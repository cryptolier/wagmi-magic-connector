import { createConnector } from '@wagmi/core';
import { UserRejectedRequestError, getAddress } from 'viem';
import { createModal } from '../modal/view.js';
import { normalizeChainId } from '../utils.js';
import { magicConnector } from './magicConnector.js';
export function dedicatedWalletConnector({ chains, options }) {
    let { id, name, type, isModalOpen, getAccount, getMagicSDK, getProvider, onAccountsChanged } = magicConnector({
        chains,
        options: { ...options, connectorType: 'dedicated' },
    });
    const magic = getMagicSDK();
    const registerProviderEventListeners = (provider, onChainChanged, onDisconnect) => {
        if (provider.on) {
            provider.on('accountsChanged', onAccountsChanged);
            provider.on('chainChanged', chain => onChainChanged(chain));
            provider.on('disconnect', onDisconnect);
        }
    };
    const oauthProviders = options.oauthOptions?.providers ?? [];
    const oauthCallbackUrl = options.oauthOptions?.callbackUrl;
    const enableSMSLogin = options.enableSMSLogin ?? false;
    const enableEmailLogin = options.enableEmailLogin ?? true;
    /**
     * This method is used to get user details from the modal UI
     * It first creates the modal UI and then waits for the user to
     * fill in the details and submit the form.
     */
    const getUserDetailsByForm = async (enableSMSLogin, enableEmailLogin, oauthProviders) => {
        const output = (await createModal({
            accentColor: options.accentColor,
            isDarkMode: options.isDarkMode,
            customLogo: options.customLogo,
            customHeaderText: options.customHeaderText,
            enableSMSLogin: enableSMSLogin,
            enableEmailLogin: enableEmailLogin,
            oauthProviders,
        }));
        isModalOpen = false;
        return output;
    };
    return createConnector(config => ({
        id,
        type,
        name,
        magic,
        getProvider,
        getAccount,
        onAccountsChanged,
        async connect() {
            if (!options.apiKey) {
                throw new Error('Magic API Key is not provided.');
            }
            const provider = await getProvider();
            if (provider?.on) {
                provider.on('accountsChanged', this.onAccountsChanged.bind(this));
                provider.on('chainChanged', this.onChainChanged.bind(this));
                provider.on('disconnect', this.onDisconnect.bind(this));
            }
            let chainId;
            try {
                chainId = await this.getChainId();
            }
            catch {
                chainId = 0;
            }
            if (await this.isAuthorized()) {
                return {
                    chainId,
                    accounts: [await getAccount()],
                };
            }
            if (!isModalOpen) {
                // const modalOutput = await getUserDetailsByForm(
                //   enableSMSLogin,
                //   enableEmailLogin,
                //   oauthProviders,
                // )
                const magic = getMagicSDK();
                const rootElement = document.querySelector('.magic-data');
                const magicLoginType = rootElement?.dataset.magicLoginType;
                const returnUrl = rootElement?.dataset.returnUrl;
                const isSignup = rootElement?.dataset.isSignup === 'true';
                let uri = new URL(oauthCallbackUrl ?? window.location.href);
                if (returnUrl) {
                    uri.searchParams.append('returnURI', returnUrl);
                }
                if (isSignup) {
                    uri.searchParams.append('isSignup', 'true');
                }
                const redirectURI = uri.toString();
                if (magicLoginType) {
                    switch (magicLoginType) {
                        case 'magic_email':
                            const inputEmail = document.querySelector("input[name='email']");
                            if (inputEmail && inputEmail.value) {
                                await magic.auth.loginWithEmailOTP({
                                    email: inputEmail.value,
                                });
                            }
                            break;
                        case 'magic_google':
                            await magic.oauth.loginWithRedirect({
                                provider: 'google',
                                redirectURI: redirectURI,
                            });
                            break;
                        case 'magic_twitter':
                            await magic.oauth.loginWithRedirect({
                                provider: 'twitter',
                                redirectURI: redirectURI,
                            });
                            break;
                    }
                }
                // LOGIN WITH MAGIC USING PHONE NUMBER
                // if (modalOutput.phoneNumber)
                //   await magic.auth.loginWithSMS({
                //     phoneNumber: modalOutput.phoneNumber,
                //   })
                if (await magic.user.isLoggedIn())
                    return {
                        accounts: [await getAccount()],
                        chainId,
                    };
            }
            throw new UserRejectedRequestError(Error('User Rejected Request'));
        },
        async disconnect() {
            try {
                const magic = getMagicSDK();
                await magic?.user.logout();
                localStorage.removeItem('magicRedirectResult');
                config.emitter.emit('disconnect');
            }
            catch (error) {
                console.error('Error disconnecting from Magic SDK:', error);
            }
        },
        async getAccounts() {
            const provider = await getProvider();
            const accounts = (await provider?.send('eth_accounts', []));
            return accounts.map(x => getAddress(x));
        },
        getChainId: async () => {
            const provider = await getProvider();
            if (provider) {
                const chainId = await provider.send('eth_chainId', []);
                return normalizeChainId(chainId);
            }
            const networkOptions = options.magicSdkConfiguration?.network;
            if (typeof networkOptions === 'object') {
                const chainID = networkOptions.chainId;
                if (chainID)
                    return normalizeChainId(chainID);
            }
            throw new Error('Chain ID is not defined');
        },
        switchChain: async function ({ chainId }) {
            if (!options.networks) {
                throw new Error('Switch chain not supported: please provide networks in options');
            }
            const normalizedChainId = normalizeChainId(chainId);
            const chain = chains.find(x => x.id === normalizedChainId);
            if (!chain) {
                throw new Error(`Unsupported chainId: ${chainId}`);
            }
            const network = options.networks.find(x => {
                if (typeof x === 'object' && x.chainId) {
                    return normalizeChainId(x.chainId) === normalizedChainId;
                }
                if (typeof x === 'string') {
                    const networkMap = {
                        mainnet: 1,
                        sepolia: 11155111,
                        goerli: 5,
                    };
                    const networkId = networkMap[x.toLowerCase()] ?? null;
                    return networkId !== null && normalizeChainId(networkId) === normalizedChainId;
                }
                return normalizeChainId(x) === normalizedChainId;
            });
            const provider = (await this.getProvider());
            if (provider?.off) {
                provider.off('accountsChanged', this.onAccountsChanged);
                provider.off('chainChanged', this.onChainChanged);
                provider.off('disconnect', this.onDisconnect);
            }
            const newOptions = {
                ...options,
                connectorType: 'dedicated',
                magicSdkConfiguration: {
                    ...options.magicSdkConfiguration,
                    network,
                },
            };
            const { getAccount, getMagicSDK, getProvider, onAccountsChanged } = magicConnector({
                chains,
                options: newOptions,
            });
            this.getAccount = getAccount;
            this.magic = getMagicSDK();
            this.getProvider = getProvider;
            this.onAccountsChanged = onAccountsChanged;
            const metadata = await this.magic?.user.getInfo();
            const account = metadata?.publicAddress;
            registerProviderEventListeners(this.magic.rpcProvider, this.onChainChanged, this.onDisconnect);
            this.onChainChanged(chain.id.toString());
            config.emitter.emit('change', { accounts: [account] });
            this.onAccountsChanged([account]);
            return chain;
        },
        isAuthorized: async () => {
            try {
                const magic = getMagicSDK();
                if (!magic) {
                    return false;
                }
                const isLoggedIn = await magic.user.isLoggedIn();
                if (isLoggedIn)
                    return true;
                // const result = await magic.oauth.getRedirectResult();
                // if (result) {
                //   localStorage.setItem('magicRedirectResult', JSON.stringify(result));
                // }
            }
            catch { }
            return false;
        },
        onChainChanged(chain) {
            const chainId = normalizeChainId(chain);
            config.emitter.emit('change', { chainId });
        },
        async onConnect(connectInfo) {
            const chainId = normalizeChainId(connectInfo.chainId);
            const accounts = await this.getAccounts();
            config.emitter.emit('connect', { accounts, chainId });
        },
        onDisconnect: () => {
            config.emitter.emit('disconnect');
        },
    }));
}

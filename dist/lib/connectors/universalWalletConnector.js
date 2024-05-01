import { createConnector } from '@wagmi/core';
import { normalizeChainId } from '../utils.js';
import { magicConnector } from './magicConnector.js';
import { getAddress } from 'viem';
export function universalWalletConnector({ chains, options, }) {
    const { id, name, type, getAccount, getMagicSDK, getProvider, onAccountsChanged, } = magicConnector({
        chains,
        options: { ...options, connectorType: 'universal' },
    });
    const magic = getMagicSDK();
    const registerProviderEventListeners = (provider, onChainChanged, onDisconnect) => {
        if (provider.on) {
            provider.on('accountsChanged', onAccountsChanged);
            provider.on('chainChanged', (chain) => onChainChanged(chain));
            provider.on('disconnect', onDisconnect);
        }
    };
    return createConnector((config) => ({
        id,
        name,
        type,
        getProvider,
        connect: async function () {
            await magic?.wallet.connectWithUI();
            const provider = await getProvider();
            const chainId = await this.getChainId();
            provider &&
                registerProviderEventListeners(provider, (chain) => {
                    const chainId = normalizeChainId(chain);
                    config.emitter.emit('change', { chainId });
                }, this.onDisconnect);
            const account = await getAccount();
            return {
                accounts: [account],
                chainId,
            };
        },
        onAccountsChanged,
        getAccounts: async () => {
            const provider = await getProvider();
            const accounts = (await provider?.request({
                method: 'eth_accounts',
            }));
            return accounts.map((x) => getAddress(x));
        },
        onChainChanged: (chain) => {
            const chainId = normalizeChainId(chain);
            config.emitter.emit('change', { chainId });
        },
        async onConnect(connectInfo) {
            const chainId = normalizeChainId(connectInfo.chainId);
            const accounts = await this.getAccounts();
            config.emitter.emit('connect', { accounts, chainId });
        },
        disconnect: async () => {
            try {
                await magic?.user.logout();
                config.emitter.emit('disconnect');
            }
            catch (error) {
                console.error('Error disconnecting from Magic SDK:', error);
            }
        },
        isAuthorized: async () => {
            try {
                const walletInfo = await magic?.wallet.getInfo();
                return !!walletInfo;
            }
            catch {
                return false;
            }
        },
        getChainId: async () => {
            const provider = await getProvider();
            if (provider) {
                const chainId = await provider.request({
                    method: 'eth_chainId',
                    params: [],
                });
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
        onDisconnect: () => {
            config.emitter.emit('disconnect');
        },
    }));
}

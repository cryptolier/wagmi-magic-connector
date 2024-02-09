import { OAuthExtension } from '@magic-ext/oauth';
import { Magic } from 'magic-sdk';
import { createModal } from '../modal/view.js';
import { MagicConnector } from './magicConnector.js';
import { UserRejectedRequestError } from 'viem';
/**
 * Dedicated Wallet Connector class used to connect to wallet using Dedicated Wallet.
 * It uses modal UI defined in our package which also takes in various styling options
 * for custom experience.
 *
 * @example
 * ```typescript
 * import { DedicatedWalletConnector } from '@magiclabs/wagmi-connector';
 * const connector = new DedicatedWalletConnector({
 *  options: {
 *     apiKey: YOUR_MAGIC_LINK_API_KEY, //required
 *    //...Other options
 *  },
 * });
 * ```
 * @see https://github.com/magiclabs/wagmi-magic-connector#-usage
 * @see https://magic.link/docs/dedicated/overview
 */
export class DedicatedWalletConnector extends MagicConnector {
    magicSDK;
    magicSdkConfiguration;
    enableSMSLogin;
    enableEmailLogin;
    oauthProviders;
    oauthCallbackUrl;
    magicOptions;
    constructor(config) {
        super(config);
        this.magicSdkConfiguration = config.options.magicSdkConfiguration;
        this.oauthProviders = config.options.oauthOptions?.providers || [];
        this.oauthCallbackUrl = config.options.oauthOptions?.callbackUrl;
        this.enableSMSLogin = config.options.enableSMSLogin || false;
        this.enableEmailLogin = config.options.enableEmailLogin || true;
        this.magicOptions = config.options;
    }
    /**
     * Get the Magic Instance
     * @throws {Error} if Magic API Key is not provided
     */
    getMagicSDK() {
        if (!this.magicSDK) {
            this.magicSDK = new Magic(this.magicOptions.apiKey, {
                ...this.magicSdkConfiguration,
                extensions: [new OAuthExtension()],
            });
        }
        this.magicSDK.preload();
        return this.magicSDK;
    }
    /**
     * Connect method attempts to connects to wallet using Dedicated Wallet modal
     * this will open a modal for the user to select their wallet
     */
    async connect() {
        if (!this.magicOptions.apiKey)
            throw new Error('Magic API Key is not provided.');
        const provider = await this.getProvider();
        if (provider?.on) {
            provider.on('accountsChanged', this.onAccountsChanged);
            provider.on('chainChanged', this.onChainChanged);
            provider.on('disconnect', this.onDisconnect);
        }
        // Check if we have a chainId, in case of error just assign 0 for legacy
        let chainId;
        try {
            chainId = await this.getChainId();
        }
        catch {
            chainId = 0;
        }
        // if there is a user logged in, return the user
        if (await this.isAuthorized()) {
            return {
                provider,
                chain: {
                    id: chainId,
                    unsupported: false,
                },
                account: await this.getAccount(),
            };
        }
        // open the modal and process the magic login steps
        if (!this.isModalOpen) {
            // const modalOutput = await this.getUserDetailsByForm(
            //   this.enableSMSLogin,
            //   this.enableEmailLogin,
            //   this.oauthProviders,
            // )
            const magic = this.getMagicSDK();
            // LOGIN WITH MAGIC USING OAUTH PROVIDER
            // if (modalOutput.oauthProvider)
            //   await magic.oauth.loginWithRedirect({
            //     provider: modalOutput.oauthProvider,
            //     redirectURI: this.oauthCallbackUrl || window.location.href,
            //   })
            // LOGIN WITH MAGIC USING GOOGLE
            console.log("LOGIN WITH MAGIC USING GOOGLE");
            console.log(this.oauthProviders);
            if (true)
                await magic.oauth.loginWithRedirect({
                    provider: 'google',
                    redirectURI: window.location.href,
                });
            // LOGIN WITH MAGIC USING EMAIL
            // const inputEmail = document.querySelector("input[name='email']") as HTMLInputElement;
            // if (inputEmail && inputEmail.value)
            //   await magic.auth.loginWithEmailOTP({
            //     email: inputEmail.value,
            //   })
            // LOGIN WITH MAGIC USING PHONE NUMBER
            // if (modalOutput.phoneNumber)
            //   await magic.auth.loginWithSMS({
            //     phoneNumber: modalOutput.phoneNumber,
            //   })
            if (await magic.user.isLoggedIn())
                return {
                    account: await this.getAccount(),
                    chain: {
                        id: chainId,
                        unsupported: false,
                    },
                    provider,
                };
        }
        throw new UserRejectedRequestError(Error('User Rejected Request'));
    }
    /**
     * checks if user is authorized with Magic.
     * It also checks for oauth redirect result incase user
     * comes from OAuth flow redirect.
     *  (without this check, user will not be logged in after oauth redirect)
     */
    async isAuthorized() {
        try {
            const magic = this.getMagicSDK();
            const isLoggedIn = await magic.user.isLoggedIn();
            if (isLoggedIn)
                return true;
            const result = await magic.oauth.getRedirectResult();
            return result !== null;
        }
        catch { }
        return false;
    }
    /**
     * This method is used to get user details from the modal UI
     * It first creates the modal UI and then waits for the user to
     * fill in the details and submit the form.
     */
    async getUserDetailsByForm(enableSMSLogin, enableEmailLogin, oauthProviders) {
        const output = (await createModal({
            accentColor: this.magicOptions.accentColor,
            isDarkMode: this.magicOptions.isDarkMode,
            customLogo: this.magicOptions.customLogo,
            customHeaderText: this.magicOptions.customHeaderText,
            enableSMSLogin: enableSMSLogin,
            enableEmailLogin: enableEmailLogin || true,
            oauthProviders,
        }));
        this.isModalOpen = false;
        return output;
    }
}
export class MagicAuthConnector extends DedicatedWalletConnector {
}

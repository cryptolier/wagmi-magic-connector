import { OAuthExtension, OAuthProvider } from '@magic-ext/oauth';
import type { InstanceWithExtensions, MagicSDKAdditionalConfiguration, MagicSDKExtensionsOption, SDKBase } from '@magic-sdk/provider';
import type { Chain } from '@wagmi/core';
import { MagicConnector, MagicOptions } from './magicConnector.js';
interface UserDetails {
    email: string;
    phoneNumber: string;
    oauthProvider: OAuthProvider;
}
interface DedicatedWalletOptions extends MagicOptions {
    enableEmailLogin?: boolean;
    enableSMSLogin?: boolean;
    oauthOptions?: {
        providers: OAuthProvider[];
        callbackUrl?: string;
    };
    magicSdkConfiguration?: MagicSDKAdditionalConfiguration<string, OAuthExtension[]>;
}
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
export declare class DedicatedWalletConnector extends MagicConnector {
    magicSDK?: InstanceWithExtensions<SDKBase, OAuthExtension[]>;
    magicSdkConfiguration?: MagicSDKAdditionalConfiguration<string, MagicSDKExtensionsOption<OAuthExtension['name']>>;
    enableSMSLogin: boolean;
    enableEmailLogin: boolean;
    oauthProviders: OAuthProvider[];
    oauthCallbackUrl?: string;
    magicOptions: MagicOptions;
    constructor(config: {
        chains?: Chain[];
        options: DedicatedWalletOptions;
    });
    /**
     * Get the Magic Instance
     * @throws {Error} if Magic API Key is not provided
     */
    getMagicSDK(): InstanceWithExtensions<SDKBase, OAuthExtension[]>;
    /**
     * Connect method attempts to connects to wallet using Dedicated Wallet modal
     * this will open a modal for the user to select their wallet
     */
    connect(): Promise<{
        provider: (import("@magic-sdk/provider/dist/types/modules/rpc-provider").RPCProviderModule & import("web3-core").AbstractProvider) | undefined;
        chain: {
            id: number;
            unsupported: boolean;
        };
        account: `0x${string}`;
    }>;
    /**
     * checks if user is authorized with Magic.
     * It also checks for oauth redirect result incase user
     * comes from OAuth flow redirect.
     *  (without this check, user will not be logged in after oauth redirect)
     */
    isAuthorized(): Promise<boolean>;
    /**
     * This method is used to get user details from the modal UI
     * It first creates the modal UI and then waits for the user to
     * fill in the details and submit the form.
     */
    getUserDetailsByForm(enableSMSLogin: boolean, enableEmailLogin: boolean, oauthProviders: OAuthProvider[]): Promise<UserDetails>;
}
export declare class MagicAuthConnector extends DedicatedWalletConnector {
}
export {};

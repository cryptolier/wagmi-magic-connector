import type { InstanceWithExtensions, MagicSDKAdditionalConfiguration, MagicSDKExtensionsOption, SDKBase } from '@magic-sdk/provider';
import type { RPCProviderModule } from '@magic-sdk/provider/dist/types/modules/rpc-provider';
import type { EthNetworkConfiguration } from '@magic-sdk/types';
import type { Chain } from '@wagmi/core';
import { MagicConnector } from './magicConnector.js';
export interface UniversalWalletOptions {
    apiKey: string;
    magicSdkConfiguration?: MagicSDKAdditionalConfiguration;
    networks?: EthNetworkConfiguration[];
}
/**
 * Universal Wallet Connector class used to connect to wallet using Universal Wallet modal
 * This uses the modal UI from Magic itself and styles for it can be configured using
 * magic dashboard.
 *
 * @example
 * ```typescript
 * import { UniversalWalletConnector } from '@magiclabs/wagmi-connector';
 * const connector = new UniversalWalletConnector({
 *  options: {
 *     apiKey: YOUR_MAGIC_LINK_API_KEY, //required
 *    //...Other options
 *  },
 * });
 * ```
 * @see https://github.com/magiclabs/wagmi-magic-connector#-usage
 * @see https://magic.link/docs/universal/overview
 */
export declare class UniversalWalletConnector extends MagicConnector {
    magic: InstanceWithExtensions<SDKBase, MagicSDKExtensionsOption<string>> | null;
    constructor(config: {
        chains?: Chain[];
        options: UniversalWalletOptions;
    });
    /**
     * Get the Magic Instance
     * @throws {Error} if Magic API Key is not provided
     */
    getMagicSDK(): InstanceWithExtensions<SDKBase, MagicSDKExtensionsOption<string>> | null;
    /**
     * Connect method attempts to connects to wallet using Universal Wallet modal
     * this will open a modal for the user to select their wallet
     */
    connect(): Promise<{
        account: `0x${string}`;
        chain: {
            id: number;
            unsupported: boolean;
        };
        provider: (RPCProviderModule & import("web3-core").AbstractProvider) | undefined;
    }>;
    /**
     * Provider events to run methods on various events
     * on user session
     */
    private registerProviderEventListeners;
    /**
     * checks if user is authorized with Universal Wallet
     */
    isAuthorized(): Promise<boolean>;
    /**
     * method that switches chains given a chainId.
     * This only works when user provides multiple networks in options
     * @param chainId
     * @throws {Error} if chainId is not supported
     */
    switchChain(chainId: number): Promise<Chain>;
}
export declare class MagicConnectConnector extends UniversalWalletConnector {
}

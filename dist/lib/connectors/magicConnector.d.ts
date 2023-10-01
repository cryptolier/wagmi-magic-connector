import type { OAuthExtension } from '@magic-ext/oauth';
import type { InstanceWithExtensions, MagicSDKExtensionsOption, SDKBase } from '@magic-sdk/provider';
import { Chain, Connector } from '@wagmi/core';
export interface MagicOptions {
    apiKey: string;
    accentColor?: string;
    isDarkMode?: boolean;
    customLogo?: string;
    customHeaderText?: string;
}
/**
 * Magic Connector class is a base class for Dedicated Wallet and Universal Wallet Connectors
 * It implements the common functionality of both the connectors
 *
 * Dedicated Wallet Connector and Universal Wallet Connector are the two connectors provided by this library
 * And both of them extend this class.
 */
export declare abstract class MagicConnector extends Connector {
    ready: boolean;
    readonly id = "magic";
    readonly name = "Magic";
    isModalOpen: boolean;
    protected constructor(config: {
        chains?: Chain[];
        options: MagicOptions;
    });
    getAccount(): Promise<`0x${string}`>;
    getWalletClient({ chainId }?: {
        chainId?: number;
    }): Promise<any>;
    getProvider(): Promise<(import("@magic-sdk/provider/dist/types/modules/rpc-provider").RPCProviderModule & import("web3-core").AbstractProvider) | undefined>;
    protected onAccountsChanged(accounts: string[]): void;
    protected onChainChanged(chainId: string | number): void;
    getChainId(): Promise<number>;
    protected onDisconnect(): void;
    disconnect(): Promise<void>;
    abstract getMagicSDK(): InstanceWithExtensions<SDKBase, OAuthExtension[]> | InstanceWithExtensions<SDKBase, MagicSDKExtensionsOption<string>> | null;
}

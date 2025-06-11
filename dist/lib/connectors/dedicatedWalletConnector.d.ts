import type { OAuthExtension, OAuthProvider } from '@magic-ext/oauth';
import type { MagicSDKAdditionalConfiguration } from '@magic-sdk/provider';
import { type MagicConnectorParams, type MagicOptions } from './magicConnector.js';
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
interface DedicatedWalletOptions extends MagicOptions {
    enableEmailLogin?: boolean;
    enableSMSLogin?: boolean;
    oauthOptions?: {
        providers: OAuthProvider[];
        callbackUrl?: string;
    };
    magicSdkConfiguration?: MagicSDKAdditionalConfiguration<string, OAuthExtension[]>;
}
export interface DedicatedWalletConnectorParams extends MagicConnectorParams {
    options: DedicatedWalletOptions;
}
export declare function dedicatedWalletConnector({ chains, options, }: DedicatedWalletConnectorParams): (config: {
    chains: readonly [import("viem").Chain, ...import("viem").Chain[]];
    emitter: import("@wagmi/core/dist/types/createEmitter").Emitter<import("@wagmi/core").ConnectorEventMap>;
    storage?: {
        key: string;
        getItem: <key_1 extends string, value extends (import("@wagmi/core").StorageItemMap & Record<string, unknown>)[key_1], defaultValue_1 extends value | null | undefined>(key: key_1, defaultValue?: defaultValue_1 | undefined) => (defaultValue_1 extends null ? value | null : value) | Promise<defaultValue_1 extends null ? value | null : value>;
        setItem: <key_1 extends string, value_1 extends (import("@wagmi/core").StorageItemMap & Record<string, unknown>)[key_1] | null>(key: key_1, value: value_1) => void | Promise<void>;
        removeItem: (key: string) => void | Promise<void>;
    } | null | undefined;
    transports?: Record<number, import("@wagmi/core").Transport> | undefined;
}) => {
    id: string;
    type: string;
    name: string;
    getProvider: () => Promise<(import("@magic-sdk/provider/dist/types/modules/rpc-provider").RPCProviderModule & import("web3-core").AbstractProvider) | null>;
    connect: () => Promise<{
        chainId: number;
        accounts: `0x${string}`[];
    }>;
    disconnect: () => Promise<void>;
    getAccounts: () => Promise<`0x${string}`[]>;
    getChainId: () => Promise<number>;
    isAuthorized: () => Promise<boolean>;
    onAccountsChanged: (accounts: string[]) => Promise<void>;
    onChainChanged(chain: string): void;
    onConnect(connectInfo: import("viem").ProviderConnectInfo): Promise<void>;
    onDisconnect: () => void;
};
export {};

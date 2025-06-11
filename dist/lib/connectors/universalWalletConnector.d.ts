import type { MagicSDKAdditionalConfiguration } from '@magic-sdk/provider';
import type { RPCProviderModule } from '@magic-sdk/provider/dist/types/modules/rpc-provider';
import type { EthNetworkConfiguration } from '@magic-sdk/types';
import { type Chain } from 'viem';
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
interface UniversalWalletConnectorParams {
    chains: readonly Chain[];
    options: UniversalWalletOptions;
}
export declare function universalWalletConnector({ chains, options, }: UniversalWalletConnectorParams): (config: {
    chains: readonly [Chain, ...Chain[]];
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
    name: string;
    type: string;
    getProvider: () => Promise<(RPCProviderModule & import("web3-core").AbstractProvider) | null>;
    connect: () => Promise<{
        accounts: `0x${string}`[];
        chainId: number;
    }>;
    onAccountsChanged: (accounts: string[]) => Promise<void>;
    getAccounts: () => Promise<`0x${string}`[]>;
    onChainChanged: (chain: string) => void;
    onConnect(connectInfo: import("viem").ProviderConnectInfo): Promise<void>;
    disconnect: () => Promise<void>;
    isAuthorized: () => Promise<boolean>;
    getChainId: () => Promise<number>;
    onDisconnect: () => void;
};
export {};

import { OAuthExtension } from '@magic-ext/oauth';
import type { InstanceWithExtensions, MagicSDKAdditionalConfiguration, MagicSDKExtensionsOption, SDKBase } from '@magic-sdk/provider';
import { type EthNetworkConfiguration } from 'magic-sdk';
import { type Chain } from 'viem';
export interface MagicOptions {
    apiKey: string;
    accentColor?: string;
    isDarkMode?: boolean;
    customLogo?: string;
    customHeaderText?: string;
    connectorType?: 'dedicated' | 'universal';
    magicSdkConfiguration?: MagicSDKAdditionalConfiguration;
    networks?: EthNetworkConfiguration[];
}
/**
 * Magic Connector class is a base class for Dedicated Wallet and Universal Wallet Connectors
 * It implements the common functionality of both the connectors
 *
 * Dedicated Wallet Connector and Universal Wallet Connector are the two connectors provided by this library
 * And both of them extend this class.
 */
export interface MagicConnectorParams {
    chains: readonly Chain[];
    options: MagicOptions;
}
export declare function magicConnector({ chains, options }: MagicConnectorParams): {
    id: string;
    name: string;
    type: string;
    isModalOpen: boolean;
    isReady: boolean;
    getProvider: () => Promise<(import("@magic-sdk/provider/dist/types/modules/rpc-provider").RPCProviderModule & import("web3-core").AbstractProvider) | null>;
    getMagicSDK: () => InstanceWithExtensions<SDKBase, OAuthExtension[]> | InstanceWithExtensions<SDKBase, MagicSDKExtensionsOption<string>> | null;
    getAccount: () => Promise<`0x${string}`>;
    getWalletClient: ({ chainId }?: {
        chainId?: number;
    }) => Promise<{
        account: {
            address: `0x${string}`;
            type: "json-rpc";
        };
        batch?: {
            multicall?: boolean | {
                batchSize?: number | undefined;
                wait?: number | undefined;
            } | undefined;
        } | undefined;
        cacheTime: number;
        ccipRead?: false | {
            request?: ((parameters: import("viem").CcipRequestParameters) => Promise<`0x${string}`>) | undefined;
        } | undefined;
        chain: Chain;
        key: string;
        name: string;
        pollingInterval: number;
        request: import("viem").EIP1193RequestFn<import("viem").WalletRpcSchema>;
        transport: import("viem").TransportConfig<"custom", import("viem").EIP1193RequestFn>;
        type: string;
        uid: string;
        addChain: (args: import("viem").AddChainParameters) => Promise<void>;
        deployContract: <const abi extends import("viem").Abi | readonly unknown[], chainOverride extends Chain | undefined>(args: import("viem").DeployContractParameters<abi, Chain, {
            address: `0x${string}`;
            type: "json-rpc";
        }, chainOverride>) => Promise<`0x${string}`>;
        getAddresses: () => Promise<import("viem").GetAddressesReturnType>;
        getChainId: () => Promise<number>;
        getPermissions: () => Promise<import("viem").GetPermissionsReturnType>;
        prepareTransactionRequest: <const TRequest extends import("viem").PrepareTransactionRequestRequest<Chain, TChainOverride>, TChainOverride extends Chain | undefined = undefined, TAccountOverride extends `0x${string}` | import("viem").Account | undefined = undefined>(args: import("viem").PrepareTransactionRequestParameters<Chain, {
            address: `0x${string}`;
            type: "json-rpc";
        }, TChainOverride, TAccountOverride, TRequest>) => Promise<import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<Chain, TChainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<Chain, TChainOverride> extends infer T_12 ? T_12 extends import("viem").DeriveChain<Chain, TChainOverride> ? T_12 extends Chain ? {
            chain: T_12;
        } : {
            chain?: undefined;
        } : never : never) & (import("viem").DeriveAccount<{
            address: `0x${string}`;
            type: "json-rpc";
        }, TAccountOverride> extends infer T_13 ? T_13 extends import("viem").DeriveAccount<{
            address: `0x${string}`;
            type: "json-rpc";
        }, TAccountOverride> ? T_13 extends import("viem").Account ? {
            account: T_13;
            from: `0x${string}`;
        } : {
            account?: undefined;
            from?: undefined;
        } : never : never), import("viem").IsNever<((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_14 ? T_14 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_14 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_15 ? T_15 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_15 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_16 ? T_16 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_16 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_17 ? T_17 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_17 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_18 ? T_18 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_18 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_19 ? T_19 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_19 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_20 ? T_20 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_20 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_21 ? T_21 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_21 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never)>> & {
            chainId?: number | undefined;
        }, (TRequest["parameters"] extends import("viem").PrepareTransactionRequestParameterType[] ? TRequest["parameters"][number] : import("viem").PrepareTransactionRequestParameterType) extends infer T_22 ? T_22 extends (TRequest["parameters"] extends import("viem").PrepareTransactionRequestParameterType[] ? TRequest["parameters"][number] : import("viem").PrepareTransactionRequestParameterType) ? T_22 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_22 : never : never> & (unknown extends TRequest["kzg"] ? {} : Pick<TRequest, "kzg">) extends infer T ? { [K in keyof T]: (import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<Chain, TChainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<Chain, TChainOverride> extends infer T_1 ? T_1 extends import("viem").DeriveChain<Chain, TChainOverride> ? T_1 extends Chain ? {
            chain: T_1;
        } : {
            chain?: undefined;
        } : never : never) & (import("viem").DeriveAccount<{
            address: `0x${string}`;
            type: "json-rpc";
        }, TAccountOverride> extends infer T_2 ? T_2 extends import("viem").DeriveAccount<{
            address: `0x${string}`;
            type: "json-rpc";
        }, TAccountOverride> ? T_2 extends import("viem").Account ? {
            account: T_2;
            from: `0x${string}`;
        } : {
            account?: undefined;
            from?: undefined;
        } : never : never), import("viem").IsNever<((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_3 ? T_3 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_3 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_4 ? T_4 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_4 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_5 ? T_5 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_5 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_6 ? T_6 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_6 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_7 ? T_7 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_7 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_8 ? T_8 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_8 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_9 ? T_9 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_9 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) extends infer T_10 ? T_10 extends (TRequest["type"] extends string ? TRequest["type"] : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<TRequest, (TRequest extends ({
            accessList?: undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").FeeValuesLegacy) | import("viem").Opaque<import("viem").TransactionSerializableLegacy, TRequest> | import("viem").Opaque<import("viem").TransactionRequestLegacy, TRequest> ? "legacy" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: bigint;
        } | {
            maxPriorityFeePerGas: bigint;
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").AccessList | undefined;
        })) | import("viem").Opaque<import("viem").TransactionSerializableEIP1559, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP1559, TRequest> ? "eip1559" : never) | (TRequest extends ({
            accessList?: import("viem").AccessList | undefined;
            blobs?: undefined;
            blobVersionedHashes?: undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined;
        } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
            accessList: import("viem").AccessList | undefined;
        }) | import("viem").Opaque<import("viem").TransactionSerializableEIP2930, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP2930, TRequest> ? "eip2930" : never) | (TRequest extends ({
            accessList?: undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        } | {
            blobVersionedHashes: readonly `0x${string}`[] | undefined;
        } | {
            sidecars: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }, import("viem").TransactionSerializableEIP4844>)) | import("viem").Opaque<import("viem").TransactionSerializableEIP4844, TRequest> | import("viem").Opaque<import("viem").TransactionRequestEIP4844, TRequest> ? "eip4844" : never) | (TRequest["type"] extends string ? TRequest["type"] : never)>) ? T_10 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never)>> & {
            chainId?: number | undefined;
        }, (TRequest["parameters"] extends import("viem").PrepareTransactionRequestParameterType[] ? TRequest["parameters"][number] : import("viem").PrepareTransactionRequestParameterType) extends infer T_11 ? T_11 extends (TRequest["parameters"] extends import("viem").PrepareTransactionRequestParameterType[] ? TRequest["parameters"][number] : import("viem").PrepareTransactionRequestParameterType) ? T_11 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_11 : never : never> & (unknown extends TRequest["kzg"] ? {} : Pick<TRequest, "kzg">))[K]; } : never>;
        requestAddresses: () => Promise<import("viem").RequestAddressesReturnType>;
        requestPermissions: (args: {
            [x: string]: Record<string, any>;
            eth_accounts: Record<string, any>;
        }) => Promise<import("viem").RequestPermissionsReturnType>;
        sendRawTransaction: (args: import("viem").SendRawTransactionParameters) => Promise<`0x${string}`>;
        sendTransaction: <const TRequest_1 extends import("viem").SendTransactionRequest<Chain, TChainOverride_1>, TChainOverride_1 extends Chain | undefined = undefined>(args: import("viem").SendTransactionParameters<Chain, {
            address: `0x${string}`;
            type: "json-rpc";
        }, TChainOverride_1, TRequest_1>) => Promise<`0x${string}`>;
        signMessage: (args: import("viem").SignMessageParameters<{
            address: `0x${string}`;
            type: "json-rpc";
        }>) => Promise<`0x${string}`>;
        signTransaction: <TChainOverride_2 extends Chain | undefined>(args: import("viem").SignTransactionParameters<Chain, {
            address: `0x${string}`;
            type: "json-rpc";
        }, TChainOverride_2>) => Promise<`0x02${string}` | `0x01${string}` | `0x03${string}` | import("viem").TransactionSerializedLegacy>;
        signTypedData: <const TTypedData extends {
            [key: string]: unknown;
        } | {
            [x: string]: readonly import("viem").TypedDataParameter[];
            [x: `string[${string}]`]: undefined;
            [x: `function[${string}]`]: undefined;
            [x: `address[${string}]`]: undefined;
            [x: `bool[${string}]`]: undefined;
            [x: `bytes[${string}]`]: undefined;
            [x: `bytes1[${string}]`]: undefined;
            [x: `bytes2[${string}]`]: undefined;
            [x: `bytes20[${string}]`]: undefined;
            [x: `bytes3[${string}]`]: undefined;
            [x: `bytes4[${string}]`]: undefined;
            [x: `bytes5[${string}]`]: undefined;
            [x: `bytes6[${string}]`]: undefined;
            [x: `bytes7[${string}]`]: undefined;
            [x: `bytes8[${string}]`]: undefined;
            [x: `bytes9[${string}]`]: undefined;
            [x: `bytes10[${string}]`]: undefined;
            [x: `bytes11[${string}]`]: undefined;
            [x: `bytes12[${string}]`]: undefined;
            [x: `bytes13[${string}]`]: undefined;
            [x: `bytes14[${string}]`]: undefined;
            [x: `bytes15[${string}]`]: undefined;
            [x: `bytes16[${string}]`]: undefined;
            [x: `bytes17[${string}]`]: undefined;
            [x: `bytes18[${string}]`]: undefined;
            [x: `bytes19[${string}]`]: undefined;
            [x: `bytes21[${string}]`]: undefined;
            [x: `bytes22[${string}]`]: undefined;
            [x: `bytes23[${string}]`]: undefined;
            [x: `bytes24[${string}]`]: undefined;
            [x: `bytes25[${string}]`]: undefined;
            [x: `bytes26[${string}]`]: undefined;
            [x: `bytes27[${string}]`]: undefined;
            [x: `bytes28[${string}]`]: undefined;
            [x: `bytes29[${string}]`]: undefined;
            [x: `bytes30[${string}]`]: undefined;
            [x: `bytes31[${string}]`]: undefined;
            [x: `bytes32[${string}]`]: undefined;
            [x: `int[${string}]`]: undefined;
            [x: `int8[${string}]`]: undefined;
            [x: `int16[${string}]`]: undefined;
            [x: `int24[${string}]`]: undefined;
            [x: `int32[${string}]`]: undefined;
            [x: `int40[${string}]`]: undefined;
            [x: `int48[${string}]`]: undefined;
            [x: `int56[${string}]`]: undefined;
            [x: `int64[${string}]`]: undefined;
            [x: `int72[${string}]`]: undefined;
            [x: `int80[${string}]`]: undefined;
            [x: `int88[${string}]`]: undefined;
            [x: `int96[${string}]`]: undefined;
            [x: `int104[${string}]`]: undefined;
            [x: `int112[${string}]`]: undefined;
            [x: `int120[${string}]`]: undefined;
            [x: `int128[${string}]`]: undefined;
            [x: `int136[${string}]`]: undefined;
            [x: `int144[${string}]`]: undefined;
            [x: `int152[${string}]`]: undefined;
            [x: `int160[${string}]`]: undefined;
            [x: `int168[${string}]`]: undefined;
            [x: `int176[${string}]`]: undefined;
            [x: `int184[${string}]`]: undefined;
            [x: `int192[${string}]`]: undefined;
            [x: `int200[${string}]`]: undefined;
            [x: `int208[${string}]`]: undefined;
            [x: `int216[${string}]`]: undefined;
            [x: `int224[${string}]`]: undefined;
            [x: `int232[${string}]`]: undefined;
            [x: `int240[${string}]`]: undefined;
            [x: `int248[${string}]`]: undefined;
            [x: `int256[${string}]`]: undefined;
            [x: `uint[${string}]`]: undefined;
            [x: `uint8[${string}]`]: undefined;
            [x: `uint16[${string}]`]: undefined;
            [x: `uint24[${string}]`]: undefined;
            [x: `uint32[${string}]`]: undefined;
            [x: `uint40[${string}]`]: undefined;
            [x: `uint48[${string}]`]: undefined;
            [x: `uint56[${string}]`]: undefined;
            [x: `uint64[${string}]`]: undefined;
            [x: `uint72[${string}]`]: undefined;
            [x: `uint80[${string}]`]: undefined;
            [x: `uint88[${string}]`]: undefined;
            [x: `uint96[${string}]`]: undefined;
            [x: `uint104[${string}]`]: undefined;
            [x: `uint112[${string}]`]: undefined;
            [x: `uint120[${string}]`]: undefined;
            [x: `uint128[${string}]`]: undefined;
            [x: `uint136[${string}]`]: undefined;
            [x: `uint144[${string}]`]: undefined;
            [x: `uint152[${string}]`]: undefined;
            [x: `uint160[${string}]`]: undefined;
            [x: `uint168[${string}]`]: undefined;
            [x: `uint176[${string}]`]: undefined;
            [x: `uint184[${string}]`]: undefined;
            [x: `uint192[${string}]`]: undefined;
            [x: `uint200[${string}]`]: undefined;
            [x: `uint208[${string}]`]: undefined;
            [x: `uint216[${string}]`]: undefined;
            [x: `uint224[${string}]`]: undefined;
            [x: `uint232[${string}]`]: undefined;
            [x: `uint240[${string}]`]: undefined;
            [x: `uint248[${string}]`]: undefined;
            [x: `uint256[${string}]`]: undefined;
            string?: undefined;
            address?: undefined;
            bool?: undefined;
            bytes?: undefined;
            bytes1?: undefined;
            bytes2?: undefined;
            bytes20?: undefined;
            bytes3?: undefined;
            bytes4?: undefined;
            bytes5?: undefined;
            bytes6?: undefined;
            bytes7?: undefined;
            bytes8?: undefined;
            bytes9?: undefined;
            bytes10?: undefined;
            bytes11?: undefined;
            bytes12?: undefined;
            bytes13?: undefined;
            bytes14?: undefined;
            bytes15?: undefined;
            bytes16?: undefined;
            bytes17?: undefined;
            bytes18?: undefined;
            bytes19?: undefined;
            bytes21?: undefined;
            bytes22?: undefined;
            bytes23?: undefined;
            bytes24?: undefined;
            bytes25?: undefined;
            bytes26?: undefined;
            bytes27?: undefined;
            bytes28?: undefined;
            bytes29?: undefined;
            bytes30?: undefined;
            bytes31?: undefined;
            bytes32?: undefined;
            int8?: undefined;
            int16?: undefined;
            int24?: undefined;
            int32?: undefined;
            int40?: undefined;
            int48?: undefined;
            int56?: undefined;
            int64?: undefined;
            int72?: undefined;
            int80?: undefined;
            int88?: undefined;
            int96?: undefined;
            int104?: undefined;
            int112?: undefined;
            int120?: undefined;
            int128?: undefined;
            int136?: undefined;
            int144?: undefined;
            int152?: undefined;
            int160?: undefined;
            int168?: undefined;
            int176?: undefined;
            int184?: undefined;
            int192?: undefined;
            int200?: undefined;
            int208?: undefined;
            int216?: undefined;
            int224?: undefined;
            int232?: undefined;
            int240?: undefined;
            int248?: undefined;
            int256?: undefined;
            uint8?: undefined;
            uint16?: undefined;
            uint24?: undefined;
            uint32?: undefined;
            uint40?: undefined;
            uint48?: undefined;
            uint56?: undefined;
            uint64?: undefined;
            uint72?: undefined;
            uint80?: undefined;
            uint88?: undefined;
            uint96?: undefined;
            uint104?: undefined;
            uint112?: undefined;
            uint120?: undefined;
            uint128?: undefined;
            uint136?: undefined;
            uint144?: undefined;
            uint152?: undefined;
            uint160?: undefined;
            uint168?: undefined;
            uint176?: undefined;
            uint184?: undefined;
            uint192?: undefined;
            uint200?: undefined;
            uint208?: undefined;
            uint216?: undefined;
            uint224?: undefined;
            uint232?: undefined;
            uint240?: undefined;
            uint248?: undefined;
            uint256?: undefined;
        }, TPrimaryType extends string>(args: import("viem").SignTypedDataParameters<TTypedData, TPrimaryType, {
            address: `0x${string}`;
            type: "json-rpc";
        }>) => Promise<`0x${string}`>;
        switchChain: (args: import("viem").SwitchChainParameters) => Promise<void>;
        watchAsset: (args: import("viem").WatchAssetParams) => Promise<boolean>;
        writeContract: <const abi_1 extends import("viem").Abi | readonly unknown[], functionName extends import("viem").ContractFunctionName<abi_1, "payable" | "nonpayable">, args extends import("viem").ContractFunctionArgs<abi_1, "payable" | "nonpayable", functionName>, TChainOverride_3 extends Chain | undefined = undefined>(args: import("viem").WriteContractParameters<abi_1, functionName, args, Chain, {
            address: `0x${string}`;
            type: "json-rpc";
        }, TChainOverride_3>) => Promise<`0x${string}`>;
        extend: <const client extends {
            [x: string]: unknown;
            account?: undefined;
            batch?: undefined;
            cacheTime?: undefined;
            ccipRead?: undefined;
            chain?: undefined;
            key?: undefined;
            name?: undefined;
            pollingInterval?: undefined;
            request?: undefined;
            transport?: undefined;
            type?: undefined;
            uid?: undefined;
        } & import("viem").ExactPartial<Pick<import("viem").PublicActions<import("viem").CustomTransport, Chain, {
            address: `0x${string}`;
            type: "json-rpc";
        }>, "getChainId" | "prepareTransactionRequest" | "sendRawTransaction" | "call" | "createContractEventFilter" | "createEventFilter" | "estimateContractGas" | "estimateGas" | "getBlock" | "getBlockNumber" | "getContractEvents" | "getEnsText" | "getFilterChanges" | "getGasPrice" | "getLogs" | "getTransaction" | "getTransactionCount" | "getTransactionReceipt" | "readContract" | "simulateContract" | "uninstallFilter" | "watchBlockNumber" | "watchContractEvent"> & Pick<import("viem").WalletActions<Chain, {
            address: `0x${string}`;
            type: "json-rpc";
        }>, "sendTransaction" | "writeContract">>>(fn: (client: import("viem").Client<import("viem").CustomTransport, Chain, {
            address: `0x${string}`;
            type: "json-rpc";
        }, import("viem").WalletRpcSchema, import("viem").WalletActions<Chain, {
            address: `0x${string}`;
            type: "json-rpc";
        }>>) => client) => import("viem").Client<import("viem").CustomTransport, Chain, {
            address: `0x${string}`;
            type: "json-rpc";
        }, import("viem").WalletRpcSchema, { [K_1 in keyof client]: client[K_1]; } & import("viem").WalletActions<Chain, {
            address: `0x${string}`;
            type: "json-rpc";
        }>>;
    }>;
    onAccountsChanged: (accounts: string[]) => Promise<void>;
};

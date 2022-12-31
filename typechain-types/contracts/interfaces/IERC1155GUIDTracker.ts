/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IERC1155GUIDTrackerInterface extends utils.Interface {
  functions: {
    "GUIDHas(address,bytes32)": FunctionFragment;
    "GUIDHasByToken(uint256,bytes32)": FunctionFragment;
    "GUIDURI(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "GUIDHas" | "GUIDHasByToken" | "GUIDURI"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "GUIDHas",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "GUIDHasByToken",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "GUIDURI",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "GUIDHas", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "GUIDHasByToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "GUIDURI", data: BytesLike): Result;

  events: {
    "GUIDCreated(uint256,bytes32)": EventFragment;
    "GUIDURIChange(string,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GUIDCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GUIDURIChange"): EventFragment;
}

export interface GUIDCreatedEventObject {
  id: BigNumber;
  guid: string;
}
export type GUIDCreatedEvent = TypedEvent<
  [BigNumber, string],
  GUIDCreatedEventObject
>;

export type GUIDCreatedEventFilter = TypedEventFilter<GUIDCreatedEvent>;

export interface GUIDURIChangeEventObject {
  value: string;
  guid: string;
}
export type GUIDURIChangeEvent = TypedEvent<
  [string, string],
  GUIDURIChangeEventObject
>;

export type GUIDURIChangeEventFilter = TypedEventFilter<GUIDURIChangeEvent>;

export interface IERC1155GUIDTracker extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC1155GUIDTrackerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    GUIDHas(
      account: PromiseOrValue<string>,
      guid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    GUIDHasByToken(
      soulToken: PromiseOrValue<BigNumberish>,
      guid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    GUIDURI(
      guid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  GUIDHas(
    account: PromiseOrValue<string>,
    guid: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  GUIDHasByToken(
    soulToken: PromiseOrValue<BigNumberish>,
    guid: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  GUIDURI(
    guid: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    GUIDHas(
      account: PromiseOrValue<string>,
      guid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    GUIDHasByToken(
      soulToken: PromiseOrValue<BigNumberish>,
      guid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    GUIDURI(
      guid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "GUIDCreated(uint256,bytes32)"(
      id?: PromiseOrValue<BigNumberish> | null,
      guid?: null
    ): GUIDCreatedEventFilter;
    GUIDCreated(
      id?: PromiseOrValue<BigNumberish> | null,
      guid?: null
    ): GUIDCreatedEventFilter;

    "GUIDURIChange(string,bytes32)"(
      value?: null,
      guid?: PromiseOrValue<BytesLike> | null
    ): GUIDURIChangeEventFilter;
    GUIDURIChange(
      value?: null,
      guid?: PromiseOrValue<BytesLike> | null
    ): GUIDURIChangeEventFilter;
  };

  estimateGas: {
    GUIDHas(
      account: PromiseOrValue<string>,
      guid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GUIDHasByToken(
      soulToken: PromiseOrValue<BigNumberish>,
      guid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GUIDURI(
      guid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    GUIDHas(
      account: PromiseOrValue<string>,
      guid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GUIDHasByToken(
      soulToken: PromiseOrValue<BigNumberish>,
      guid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GUIDURI(
      guid: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

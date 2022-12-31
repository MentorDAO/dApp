/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface IBoolStoreInterface extends utils.Interface {
  functions: {
    "boolAdd(string,bool)": FunctionFragment;
    "boolGet(string)": FunctionFragment;
    "boolGetIndex(string,uint256)": FunctionFragment;
    "boolGetIndexOf(address,string,uint256)": FunctionFragment;
    "boolGetOf(address,string)": FunctionFragment;
    "boolRemove(string,bool)": FunctionFragment;
    "boolSet(string,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "boolAdd"
      | "boolGet"
      | "boolGetIndex"
      | "boolGetIndexOf"
      | "boolGetOf"
      | "boolRemove"
      | "boolSet"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "boolAdd",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "boolGet",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "boolGetIndex",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "boolGetIndexOf",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "boolGetOf",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "boolRemove",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "boolSet",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;

  decodeFunctionResult(functionFragment: "boolAdd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "boolGet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "boolGetIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "boolGetIndexOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "boolGetOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "boolRemove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "boolSet", data: BytesLike): Result;

  events: {};
}

export interface IBoolStore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBoolStoreInterface;

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
    boolAdd(
      key: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    boolGet(
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    boolGetIndex(
      key: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    boolGetIndexOf(
      originContract: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    boolGetOf(
      originContract: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    boolRemove(
      key: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    boolSet(
      key: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  boolAdd(
    key: PromiseOrValue<string>,
    value: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  boolGet(
    key: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  boolGetIndex(
    key: PromiseOrValue<string>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  boolGetIndexOf(
    originContract: PromiseOrValue<string>,
    key: PromiseOrValue<string>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  boolGetOf(
    originContract: PromiseOrValue<string>,
    key: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  boolRemove(
    key: PromiseOrValue<string>,
    value: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  boolSet(
    key: PromiseOrValue<string>,
    value: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    boolAdd(
      key: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    boolGet(
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    boolGetIndex(
      key: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    boolGetIndexOf(
      originContract: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    boolGetOf(
      originContract: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    boolRemove(
      key: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    boolSet(
      key: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    boolAdd(
      key: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    boolGet(
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    boolGetIndex(
      key: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    boolGetIndexOf(
      originContract: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    boolGetOf(
      originContract: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    boolRemove(
      key: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    boolSet(
      key: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    boolAdd(
      key: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    boolGet(
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    boolGetIndex(
      key: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    boolGetIndexOf(
      originContract: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    boolGetOf(
      originContract: PromiseOrValue<string>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    boolRemove(
      key: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    boolSet(
      key: PromiseOrValue<string>,
      value: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

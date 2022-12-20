/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
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
} from "../../common";

export interface ProjectExtInterface extends utils.Interface {
  functions: {
    "getRepoAddr()": FunctionFragment;
    "hub()": FunctionFragment;
    "makeTask(string,string,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getRepoAddr" | "hub" | "makeTask"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getRepoAddr",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "hub", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "makeTask",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRepoAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hub", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeTask", data: BytesLike): Result;

  events: {};
}

export interface ProjectExt extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProjectExtInterface;

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
    getRepoAddr(overrides?: CallOverrides): Promise<[string]>;

    hub(overrides?: CallOverrides): Promise<[string]>;

    makeTask(
      type_: PromiseOrValue<string>,
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getRepoAddr(overrides?: CallOverrides): Promise<string>;

  hub(overrides?: CallOverrides): Promise<string>;

  makeTask(
    type_: PromiseOrValue<string>,
    name_: PromiseOrValue<string>,
    uri_: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getRepoAddr(overrides?: CallOverrides): Promise<string>;

    hub(overrides?: CallOverrides): Promise<string>;

    makeTask(
      type_: PromiseOrValue<string>,
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getRepoAddr(overrides?: CallOverrides): Promise<BigNumber>;

    hub(overrides?: CallOverrides): Promise<BigNumber>;

    makeTask(
      type_: PromiseOrValue<string>,
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRepoAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hub(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    makeTask(
      type_: PromiseOrValue<string>,
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface GameExtensionInterface extends utils.Interface {
  contractName: "GameExtension";
  functions: {
    "getRepoAddr()": FunctionFragment;
    "hub()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getRepoAddr",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "hub", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "getRepoAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hub", data: BytesLike): Result;

  events: {};
}

export interface GameExtension extends BaseContract {
  contractName: "GameExtension";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GameExtensionInterface;

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
  };

  getRepoAddr(overrides?: CallOverrides): Promise<string>;

  hub(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getRepoAddr(overrides?: CallOverrides): Promise<string>;

    hub(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getRepoAddr(overrides?: CallOverrides): Promise<BigNumber>;

    hub(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getRepoAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hub(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

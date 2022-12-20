/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MultiCallInterface extends utils.Interface {
  contractName: "MultiCall";
  functions: {
    "multiCall(address[],bytes[],uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "multiCall",
    values: [string[], BytesLike[], BigNumberish[]]
  ): string;

  decodeFunctionResult(functionFragment: "multiCall", data: BytesLike): Result;

  events: {};
}

export interface MultiCall extends BaseContract {
  contractName: "MultiCall";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MultiCallInterface;

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
    multiCall(
      targets: string[],
      payloads: BytesLike[],
      etherAmounts: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  multiCall(
    targets: string[],
    payloads: BytesLike[],
    etherAmounts: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    multiCall(
      targets: string[],
      payloads: BytesLike[],
      etherAmounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    multiCall(
      targets: string[],
      payloads: BytesLike[],
      etherAmounts: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    multiCall(
      targets: string[],
      payloads: BytesLike[],
      etherAmounts: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

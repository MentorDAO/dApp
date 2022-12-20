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
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace DataTypes {
  export type SVOStruct = {
    subject: string;
    verb: string;
    object: string;
    tool: string;
  };

  export type SVOStructOutput = [string, string, string, string] & {
    subject: string;
    verb: string;
    object: string;
    tool: string;
  };
}

export interface IActionRepoInterface extends utils.Interface {
  contractName: "IActionRepo";
  functions: {
    "actionAdd((string,string,string,string),string)": FunctionFragment;
    "actionAddBatch((string,string,string,string)[],string[])": FunctionFragment;
    "actionGet(bytes32)": FunctionFragment;
    "actionGetStr(bytes32)": FunctionFragment;
    "actionGetURI(bytes32)": FunctionFragment;
    "actionHash((string,string,string,string))": FunctionFragment;
    "actionSetURI(bytes32,string)": FunctionFragment;
    "symbol()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "actionAdd",
    values: [DataTypes.SVOStruct, string]
  ): string;
  encodeFunctionData(
    functionFragment: "actionAddBatch",
    values: [DataTypes.SVOStruct[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "actionGet",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "actionGetStr",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "actionGetURI",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "actionHash",
    values: [DataTypes.SVOStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "actionSetURI",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;

  decodeFunctionResult(functionFragment: "actionAdd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "actionAddBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "actionGet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "actionGetStr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "actionGetURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "actionHash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "actionSetURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;

  events: {
    "ActionAdded(uint256,bytes32,string,string,string,string)": EventFragment;
    "ActionURI(bytes32,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ActionAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ActionURI"): EventFragment;
}

export type ActionAddedEvent = TypedEvent<
  [BigNumber, string, string, string, string, string],
  {
    id: BigNumber;
    guid: string;
    subject: string;
    verb: string;
    object: string;
    tool: string;
  }
>;

export type ActionAddedEventFilter = TypedEventFilter<ActionAddedEvent>;

export type ActionURIEvent = TypedEvent<
  [string, string],
  { guid: string; uri: string }
>;

export type ActionURIEventFilter = TypedEventFilter<ActionURIEvent>;

export interface IActionRepo extends BaseContract {
  contractName: "IActionRepo";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IActionRepoInterface;

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
    actionAdd(
      svo: DataTypes.SVOStruct,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    actionAddBatch(
      svos: DataTypes.SVOStruct[],
      uris: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    actionGet(
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<[DataTypes.SVOStructOutput]>;

    actionGetStr(
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, string, string]>;

    actionGetURI(guid: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    actionHash(
      svo: DataTypes.SVOStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    actionSetURI(
      guid: BytesLike,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;
  };

  actionAdd(
    svo: DataTypes.SVOStruct,
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  actionAddBatch(
    svos: DataTypes.SVOStruct[],
    uris: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  actionGet(
    guid: BytesLike,
    overrides?: CallOverrides
  ): Promise<DataTypes.SVOStructOutput>;

  actionGetStr(
    guid: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string, string, string]>;

  actionGetURI(guid: BytesLike, overrides?: CallOverrides): Promise<string>;

  actionHash(
    svo: DataTypes.SVOStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  actionSetURI(
    guid: BytesLike,
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    actionAdd(
      svo: DataTypes.SVOStruct,
      uri: string,
      overrides?: CallOverrides
    ): Promise<string>;

    actionAddBatch(
      svos: DataTypes.SVOStruct[],
      uris: string[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    actionGet(
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<DataTypes.SVOStructOutput>;

    actionGetStr(
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, string, string]>;

    actionGetURI(guid: BytesLike, overrides?: CallOverrides): Promise<string>;

    actionHash(
      svo: DataTypes.SVOStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    actionSetURI(
      guid: BytesLike,
      uri: string,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ActionAdded(uint256,bytes32,string,string,string,string)"(
      id?: BigNumberish | null,
      guid?: BytesLike | null,
      subject?: null,
      verb?: null,
      object?: null,
      tool?: null
    ): ActionAddedEventFilter;
    ActionAdded(
      id?: BigNumberish | null,
      guid?: BytesLike | null,
      subject?: null,
      verb?: null,
      object?: null,
      tool?: null
    ): ActionAddedEventFilter;

    "ActionURI(bytes32,string)"(
      guid?: BytesLike | null,
      uri?: null
    ): ActionURIEventFilter;
    ActionURI(guid?: BytesLike | null, uri?: null): ActionURIEventFilter;
  };

  estimateGas: {
    actionAdd(
      svo: DataTypes.SVOStruct,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    actionAddBatch(
      svos: DataTypes.SVOStruct[],
      uris: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    actionGet(guid: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    actionGetStr(
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    actionGetURI(
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    actionHash(
      svo: DataTypes.SVOStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    actionSetURI(
      guid: BytesLike,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    actionAdd(
      svo: DataTypes.SVOStruct,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    actionAddBatch(
      svos: DataTypes.SVOStruct[],
      uris: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    actionGet(
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    actionGetStr(
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    actionGetURI(
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    actionHash(
      svo: DataTypes.SVOStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    actionSetURI(
      guid: BytesLike,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

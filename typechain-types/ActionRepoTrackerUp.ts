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
  PayableOverrides,
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

export interface ActionRepoTrackerUpInterface extends utils.Interface {
  contractName: "ActionRepoTrackerUp";
  functions: {
    "GUIDHas(address,bytes32)": FunctionFragment;
    "GUIDHasByToken(uint256,bytes32)": FunctionFragment;
    "GUIDURI(bytes32)": FunctionFragment;
    "actionAdd((string,string,string,string),string)": FunctionFragment;
    "actionAddBatch((string,string,string,string)[],string[])": FunctionFragment;
    "actionGet(bytes32)": FunctionFragment;
    "actionGetStr(bytes32)": FunctionFragment;
    "actionGetURI(bytes32)": FunctionFragment;
    "actionHash((string,string,string,string))": FunctionFragment;
    "actionSetURI(bytes32,string)": FunctionFragment;
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "balanceOfToken(uint256,uint256)": FunctionFragment;
    "contractURI()": FunctionFragment;
    "getCurrentSBT()": FunctionFragment;
    "getExtTokenId(address)": FunctionFragment;
    "getHub()": FunctionFragment;
    "getRepoAddr()": FunctionFragment;
    "getTargetContract()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setHub(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uniqueMembers(uint256)": FunctionFragment;
    "uniqueMembersCount(uint256)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "GUIDHas",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "GUIDHasByToken",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "GUIDURI", values: [BytesLike]): string;
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
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfToken",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentSBT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getExtTokenId",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getHub", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRepoAddr",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTargetContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "setHub", values: [string]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "uniqueMembers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "uniqueMembersCount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "GUIDHas", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "GUIDHasByToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "GUIDURI", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentSBT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExtTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getHub", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRepoAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTargetContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setHub", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniqueMembers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniqueMembersCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "ActionAdded(uint256,bytes32,string,string,string,string)": EventFragment;
    "ActionURI(bytes32,string)": EventFragment;
    "AdminChanged(address,address)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "GUIDCreated(uint256,bytes32)": EventFragment;
    "GUIDURIChange(string,bytes32)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferBatchByToken(address,uint256,uint256,uint256[],uint256[])": EventFragment;
    "TransferByToken(address,uint256,uint256,uint256,uint256)": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "URI(string,uint256)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ActionAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ActionURI"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GUIDCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GUIDURIChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatchByToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferByToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
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

export type AdminChangedEvent = TypedEvent<
  [string, string],
  { previousAdmin: string; newAdmin: string }
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  { account: string; operator: string; approved: boolean }
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export type BeaconUpgradedEvent = TypedEvent<[string], { beacon: string }>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export type GUIDCreatedEvent = TypedEvent<
  [BigNumber, string],
  { id: BigNumber; guid: string }
>;

export type GUIDCreatedEventFilter = TypedEventFilter<GUIDCreatedEvent>;

export type GUIDURIChangeEvent = TypedEvent<
  [string, string],
  { value: string; guid: string }
>;

export type GUIDURIChangeEventFilter = TypedEventFilter<GUIDURIChangeEvent>;

export type InitializedEvent = TypedEvent<[number], { version: number }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type TransferBatchEvent = TypedEvent<
  [string, string, string, BigNumber[], BigNumber[]],
  {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
  }
>;

export type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;

export type TransferBatchByTokenEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber[], BigNumber[]],
  {
    operator: string;
    fromOwnerToken: BigNumber;
    toOwnerToken: BigNumber;
    ids: BigNumber[];
    values: BigNumber[];
  }
>;

export type TransferBatchByTokenEventFilter =
  TypedEventFilter<TransferBatchByTokenEvent>;

export type TransferByTokenEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    operator: string;
    fromOwnerToken: BigNumber;
    toOwnerToken: BigNumber;
    id: BigNumber;
    value: BigNumber;
  }
>;

export type TransferByTokenEventFilter = TypedEventFilter<TransferByTokenEvent>;

export type TransferSingleEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
  }
>;

export type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;

export type URIEvent = TypedEvent<
  [string, BigNumber],
  { value: string; id: BigNumber }
>;

export type URIEventFilter = TypedEventFilter<URIEvent>;

export type UpgradedEvent = TypedEvent<[string], { implementation: string }>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface ActionRepoTrackerUp extends BaseContract {
  contractName: "ActionRepoTrackerUp";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ActionRepoTrackerUpInterface;

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
      account: string,
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    GUIDHasByToken(
      soulToken: BigNumberish,
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    GUIDURI(guid: BytesLike, overrides?: CallOverrides): Promise<[string]>;

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

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    balanceOfToken(
      sbt: BigNumberish,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    contractURI(overrides?: CallOverrides): Promise<[string]>;

    getCurrentSBT(overrides?: CallOverrides): Promise<[BigNumber]>;

    getExtTokenId(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getHub(overrides?: CallOverrides): Promise<[string]>;

    getRepoAddr(overrides?: CallOverrides): Promise<[string]>;

    getTargetContract(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      hub: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setHub(
      hubAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniqueMembers(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    uniqueMembersCount(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  GUIDHas(
    account: string,
    guid: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  GUIDHasByToken(
    soulToken: BigNumberish,
    guid: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  GUIDURI(guid: BytesLike, overrides?: CallOverrides): Promise<string>;

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

  balanceOf(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfBatch(
    accounts: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  balanceOfToken(
    sbt: BigNumberish,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  contractURI(overrides?: CallOverrides): Promise<string>;

  getCurrentSBT(overrides?: CallOverrides): Promise<BigNumber>;

  getExtTokenId(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  getHub(overrides?: CallOverrides): Promise<string>;

  getRepoAddr(overrides?: CallOverrides): Promise<string>;

  getTargetContract(overrides?: CallOverrides): Promise<string>;

  initialize(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isApprovedForAll(
    account: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setHub(
    hubAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniqueMembers(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  uniqueMembersCount(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    GUIDHas(
      account: string,
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    GUIDHasByToken(
      soulToken: BigNumberish,
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    GUIDURI(guid: BytesLike, overrides?: CallOverrides): Promise<string>;

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

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    balanceOfToken(
      sbt: BigNumberish,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractURI(overrides?: CallOverrides): Promise<string>;

    getCurrentSBT(overrides?: CallOverrides): Promise<BigNumber>;

    getExtTokenId(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getHub(overrides?: CallOverrides): Promise<string>;

    getRepoAddr(overrides?: CallOverrides): Promise<string>;

    getTargetContract(overrides?: CallOverrides): Promise<string>;

    initialize(hub: string, overrides?: CallOverrides): Promise<void>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setHub(hubAddr: string, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uniqueMembers(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    uniqueMembersCount(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
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

    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "ApprovalForAll(address,address,bool)"(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;

    "GUIDCreated(uint256,bytes32)"(
      id?: BigNumberish | null,
      guid?: null
    ): GUIDCreatedEventFilter;
    GUIDCreated(id?: BigNumberish | null, guid?: null): GUIDCreatedEventFilter;

    "GUIDURIChange(string,bytes32)"(
      value?: null,
      guid?: BytesLike | null
    ): GUIDURIChangeEventFilter;
    GUIDURIChange(
      value?: null,
      guid?: BytesLike | null
    ): GUIDURIChangeEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "TransferBatch(address,address,address,uint256[],uint256[])"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TransferBatchEventFilter;
    TransferBatch(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TransferBatchEventFilter;

    "TransferBatchByToken(address,uint256,uint256,uint256[],uint256[])"(
      operator?: string | null,
      fromOwnerToken?: BigNumberish | null,
      toOwnerToken?: BigNumberish | null,
      ids?: null,
      values?: null
    ): TransferBatchByTokenEventFilter;
    TransferBatchByToken(
      operator?: string | null,
      fromOwnerToken?: BigNumberish | null,
      toOwnerToken?: BigNumberish | null,
      ids?: null,
      values?: null
    ): TransferBatchByTokenEventFilter;

    "TransferByToken(address,uint256,uint256,uint256,uint256)"(
      operator?: string | null,
      fromOwnerToken?: BigNumberish | null,
      toOwnerToken?: BigNumberish | null,
      id?: null,
      value?: null
    ): TransferByTokenEventFilter;
    TransferByToken(
      operator?: string | null,
      fromOwnerToken?: BigNumberish | null,
      toOwnerToken?: BigNumberish | null,
      id?: null,
      value?: null
    ): TransferByTokenEventFilter;

    "TransferSingle(address,address,address,uint256,uint256)"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TransferSingleEventFilter;
    TransferSingle(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TransferSingleEventFilter;

    "URI(string,uint256)"(
      value?: null,
      id?: BigNumberish | null
    ): URIEventFilter;
    URI(value?: null, id?: BigNumberish | null): URIEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    GUIDHas(
      account: string,
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GUIDHasByToken(
      soulToken: BigNumberish,
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GUIDURI(guid: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

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

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfToken(
      sbt: BigNumberish,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractURI(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentSBT(overrides?: CallOverrides): Promise<BigNumber>;

    getExtTokenId(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getHub(overrides?: CallOverrides): Promise<BigNumber>;

    getRepoAddr(overrides?: CallOverrides): Promise<BigNumber>;

    getTargetContract(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      hub: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setHub(
      hubAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniqueMembers(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniqueMembersCount(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    GUIDHas(
      account: string,
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GUIDHasByToken(
      soulToken: BigNumberish,
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GUIDURI(
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfToken(
      sbt: BigNumberish,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentSBT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getExtTokenId(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getHub(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRepoAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTargetContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      hub: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setHub(
      hubAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniqueMembers(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uniqueMembersCount(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
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

export interface HubMockInterface extends utils.Interface {
  contractName: "HubMock";
  functions: {
    "assocAdd(string,address)": FunctionFragment;
    "assocGet(string)": FunctionFragment;
    "assocRemove(string,address)": FunctionFragment;
    "assocSet(string,address)": FunctionFragment;
    "beaconAdd(string,address)": FunctionFragment;
    "contractURI()": FunctionFragment;
    "getRepoAddr()": FunctionFragment;
    "hubChange(address)": FunctionFragment;
    "initialize(address,address,address,address)": FunctionFragment;
    "makeClaim(string,string,string)": FunctionFragment;
    "makeERC1155(string)": FunctionFragment;
    "makeERC721(string,string,string)": FunctionFragment;
    "makeGame(string,string,string)": FunctionFragment;
    "makeTask(string,string,string)": FunctionFragment;
    "mintForAccount(address,string)": FunctionFragment;
    "owner()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "role()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgradeImplementation(string,address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "assocAdd",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "assocGet", values: [string]): string;
  encodeFunctionData(
    functionFragment: "assocRemove",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "assocSet",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "beaconAdd",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRepoAddr",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "hubChange", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "makeClaim",
    values: [string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "makeERC1155", values: [string]): string;
  encodeFunctionData(
    functionFragment: "makeERC721",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "makeGame",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "makeTask",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mintForAccount",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "role", values?: undefined): string;
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
    functionFragment: "upgradeImplementation",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "assocAdd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assocGet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assocRemove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "assocSet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "beaconAdd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRepoAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hubChange", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeClaim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "makeERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "makeERC721", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeTask", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "role", data: BytesLike): Result;
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
    functionFragment: "upgradeImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "ContractCreated(string,address)": EventFragment;
    "ContractURI(string)": EventFragment;
    "HubChanged(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "UpdatedImplementation(string,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractURI"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "HubChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedImplementation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export type AdminChangedEvent = TypedEvent<
  [string, string],
  { previousAdmin: string; newAdmin: string }
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export type BeaconUpgradedEvent = TypedEvent<[string], { beacon: string }>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export type ContractCreatedEvent = TypedEvent<
  [string, string],
  { name: string; contractAddress: string }
>;

export type ContractCreatedEventFilter = TypedEventFilter<ContractCreatedEvent>;

export type ContractURIEvent = TypedEvent<[string], { arg0: string }>;

export type ContractURIEventFilter = TypedEventFilter<ContractURIEvent>;

export type HubChangedEvent = TypedEvent<[string], { contractAddress: string }>;

export type HubChangedEventFilter = TypedEventFilter<HubChangedEvent>;

export type InitializedEvent = TypedEvent<[number], { version: number }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type UpdatedImplementationEvent = TypedEvent<
  [string, string],
  { name: string; implementation: string }
>;

export type UpdatedImplementationEventFilter =
  TypedEventFilter<UpdatedImplementationEvent>;

export type UpgradedEvent = TypedEvent<[string], { implementation: string }>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface HubMock extends BaseContract {
  contractName: "HubMock";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HubMockInterface;

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
    assocAdd(
      key: string,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    assocGet(key: string, overrides?: CallOverrides): Promise<[string]>;

    assocRemove(
      key: string,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    assocSet(
      key: string,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    beaconAdd(
      name: string,
      implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contractURI(overrides?: CallOverrides): Promise<[string]>;

    getRepoAddr(overrides?: CallOverrides): Promise<[string]>;

    hubChange(
      newHubAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      openRepo: string,
      gameContract: string,
      claimContract: string,
      taskContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    makeClaim(
      type_: string,
      name_: string,
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    makeERC1155(
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    makeERC721(
      name_: string,
      symbol_: string,
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    makeGame(
      type_: string,
      name_: string,
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    makeTask(
      type_: string,
      name_: string,
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintForAccount(
      account: string,
      tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    role(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeImplementation(
      name: string,
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

  assocAdd(
    key: string,
    contractAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  assocGet(key: string, overrides?: CallOverrides): Promise<string>;

  assocRemove(
    key: string,
    contractAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  assocSet(
    key: string,
    contractAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  beaconAdd(
    name: string,
    implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contractURI(overrides?: CallOverrides): Promise<string>;

  getRepoAddr(overrides?: CallOverrides): Promise<string>;

  hubChange(
    newHubAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    openRepo: string,
    gameContract: string,
    claimContract: string,
    taskContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  makeClaim(
    type_: string,
    name_: string,
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  makeERC1155(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  makeERC721(
    name_: string,
    symbol_: string,
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  makeGame(
    type_: string,
    name_: string,
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  makeTask(
    type_: string,
    name_: string,
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintForAccount(
    account: string,
    tokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  role(overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeImplementation(
    name: string,
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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
    assocAdd(
      key: string,
      contractAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    assocGet(key: string, overrides?: CallOverrides): Promise<string>;

    assocRemove(
      key: string,
      contractAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    assocSet(
      key: string,
      contractAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    beaconAdd(
      name: string,
      implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    contractURI(overrides?: CallOverrides): Promise<string>;

    getRepoAddr(overrides?: CallOverrides): Promise<string>;

    hubChange(newHubAddr: string, overrides?: CallOverrides): Promise<void>;

    initialize(
      openRepo: string,
      gameContract: string,
      claimContract: string,
      taskContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    makeClaim(
      type_: string,
      name_: string,
      uri_: string,
      overrides?: CallOverrides
    ): Promise<string>;

    makeERC1155(uri_: string, overrides?: CallOverrides): Promise<string>;

    makeERC721(
      name_: string,
      symbol_: string,
      uri_: string,
      overrides?: CallOverrides
    ): Promise<string>;

    makeGame(
      type_: string,
      name_: string,
      uri_: string,
      overrides?: CallOverrides
    ): Promise<string>;

    makeTask(
      type_: string,
      name_: string,
      uri_: string,
      overrides?: CallOverrides
    ): Promise<string>;

    mintForAccount(
      account: string,
      tokenURI: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    role(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeImplementation(
      name: string,
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

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
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;

    "ContractCreated(string,address)"(
      name?: null,
      contractAddress?: string | null
    ): ContractCreatedEventFilter;
    ContractCreated(
      name?: null,
      contractAddress?: string | null
    ): ContractCreatedEventFilter;

    "ContractURI(string)"(arg0?: null): ContractURIEventFilter;
    ContractURI(arg0?: null): ContractURIEventFilter;

    "HubChanged(address)"(contractAddress?: null): HubChangedEventFilter;
    HubChanged(contractAddress?: null): HubChangedEventFilter;

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

    "UpdatedImplementation(string,address)"(
      name?: null,
      implementation?: null
    ): UpdatedImplementationEventFilter;
    UpdatedImplementation(
      name?: null,
      implementation?: null
    ): UpdatedImplementationEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    assocAdd(
      key: string,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    assocGet(key: string, overrides?: CallOverrides): Promise<BigNumber>;

    assocRemove(
      key: string,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    assocSet(
      key: string,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    beaconAdd(
      name: string,
      implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contractURI(overrides?: CallOverrides): Promise<BigNumber>;

    getRepoAddr(overrides?: CallOverrides): Promise<BigNumber>;

    hubChange(
      newHubAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      openRepo: string,
      gameContract: string,
      claimContract: string,
      taskContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    makeClaim(
      type_: string,
      name_: string,
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    makeERC1155(
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    makeERC721(
      name_: string,
      symbol_: string,
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    makeGame(
      type_: string,
      name_: string,
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    makeTask(
      type_: string,
      name_: string,
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintForAccount(
      account: string,
      tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    role(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeImplementation(
      name: string,
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
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
    assocAdd(
      key: string,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    assocGet(
      key: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assocRemove(
      key: string,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    assocSet(
      key: string,
      contractAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    beaconAdd(
      name: string,
      implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRepoAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hubChange(
      newHubAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      openRepo: string,
      gameContract: string,
      claimContract: string,
      taskContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    makeClaim(
      type_: string,
      name_: string,
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    makeERC1155(
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    makeERC721(
      name_: string,
      symbol_: string,
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    makeGame(
      type_: string,
      name_: string,
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    makeTask(
      type_: string,
      name_: string,
      uri_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintForAccount(
      account: string,
      tokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    role(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeImplementation(
      name: string,
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
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

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

export interface VotesRepoUpgradableInterface extends utils.Interface {
  contractName: "VotesRepoUpgradable";
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "delegate(address)": FunctionFragment;
    "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "delegates(address)": FunctionFragment;
    "delegatesToken(uint256)": FunctionFragment;
    "getExtTokenId(address)": FunctionFragment;
    "getPastTotalSupply(uint256)": FunctionFragment;
    "getPastVotes(address,uint256)": FunctionFragment;
    "getPastVotesForToken(uint256,uint256)": FunctionFragment;
    "getTargetContract()": FunctionFragment;
    "getVotes(address)": FunctionFragment;
    "getVotesForToken(uint256)": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "noncesForToken(uint256)": FunctionFragment;
    "transferVotingUnits(uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "delegate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "delegateBySig",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "delegates", values: [string]): string;
  encodeFunctionData(
    functionFragment: "delegatesToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getExtTokenId",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPastTotalSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPastVotes",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPastVotesForToken",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTargetContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getVotes", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getVotesForToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(
    functionFragment: "noncesForToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferVotingUnits",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delegateBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delegatesToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExtTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPastTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPastVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPastVotesForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTargetContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVotesForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "noncesForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferVotingUnits",
    data: BytesLike
  ): Result;

  events: {
    "DelegateChanged(address,address,address)": EventFragment;
    "DelegateChangedToken(uint256,uint256,uint256)": EventFragment;
    "DelegateVotesChanged(address,uint256,uint256)": EventFragment;
    "DelegateVotesChangedToken(uint256,uint256,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DelegateChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DelegateChangedToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DelegateVotesChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DelegateVotesChangedToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export type DelegateChangedEvent = TypedEvent<
  [string, string, string],
  { delegator: string; fromDelegate: string; toDelegate: string }
>;

export type DelegateChangedEventFilter = TypedEventFilter<DelegateChangedEvent>;

export type DelegateChangedTokenEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  { delegator: BigNumber; fromDelegate: BigNumber; toDelegate: BigNumber }
>;

export type DelegateChangedTokenEventFilter =
  TypedEventFilter<DelegateChangedTokenEvent>;

export type DelegateVotesChangedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { delegate: string; previousBalance: BigNumber; newBalance: BigNumber }
>;

export type DelegateVotesChangedEventFilter =
  TypedEventFilter<DelegateVotesChangedEvent>;

export type DelegateVotesChangedTokenEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  { delegate: BigNumber; previousBalance: BigNumber; newBalance: BigNumber }
>;

export type DelegateVotesChangedTokenEventFilter =
  TypedEventFilter<DelegateVotesChangedTokenEvent>;

export type InitializedEvent = TypedEvent<[number], { version: number }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface VotesRepoUpgradable extends BaseContract {
  contractName: "VotesRepoUpgradable";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VotesRepoUpgradableInterface;

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
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    delegate(
      delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegates(account: string, overrides?: CallOverrides): Promise<[string]>;

    delegatesToken(
      accountToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getExtTokenId(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPastTotalSupply(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPastVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPastVotesForToken(
      account: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTargetContract(overrides?: CallOverrides): Promise<[string]>;

    getVotes(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getVotesForToken(
      account: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    noncesForToken(
      owner: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferVotingUnits(
      from: BigNumberish,
      to: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  delegate(
    delegatee: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegateBySig(
    delegatee: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegates(account: string, overrides?: CallOverrides): Promise<string>;

  delegatesToken(
    accountToken: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getExtTokenId(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  getPastTotalSupply(
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPastVotes(
    account: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPastVotesForToken(
    account: BigNumberish,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTargetContract(overrides?: CallOverrides): Promise<string>;

  getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  getVotesForToken(
    account: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  noncesForToken(
    owner: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferVotingUnits(
    from: BigNumberish,
    to: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    delegate(delegatee: string, overrides?: CallOverrides): Promise<void>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    delegates(account: string, overrides?: CallOverrides): Promise<string>;

    delegatesToken(
      accountToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getExtTokenId(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastTotalSupply(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastVotesForToken(
      account: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTargetContract(overrides?: CallOverrides): Promise<string>;

    getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    getVotesForToken(
      account: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    noncesForToken(
      owner: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferVotingUnits(
      from: BigNumberish,
      to: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DelegateChanged(address,address,address)"(
      delegator?: string | null,
      fromDelegate?: string | null,
      toDelegate?: string | null
    ): DelegateChangedEventFilter;
    DelegateChanged(
      delegator?: string | null,
      fromDelegate?: string | null,
      toDelegate?: string | null
    ): DelegateChangedEventFilter;

    "DelegateChangedToken(uint256,uint256,uint256)"(
      delegator?: BigNumberish | null,
      fromDelegate?: BigNumberish | null,
      toDelegate?: BigNumberish | null
    ): DelegateChangedTokenEventFilter;
    DelegateChangedToken(
      delegator?: BigNumberish | null,
      fromDelegate?: BigNumberish | null,
      toDelegate?: BigNumberish | null
    ): DelegateChangedTokenEventFilter;

    "DelegateVotesChanged(address,uint256,uint256)"(
      delegate?: string | null,
      previousBalance?: null,
      newBalance?: null
    ): DelegateVotesChangedEventFilter;
    DelegateVotesChanged(
      delegate?: string | null,
      previousBalance?: null,
      newBalance?: null
    ): DelegateVotesChangedEventFilter;

    "DelegateVotesChangedToken(uint256,uint256,uint256)"(
      delegate?: BigNumberish | null,
      previousBalance?: null,
      newBalance?: null
    ): DelegateVotesChangedTokenEventFilter;
    DelegateVotesChangedToken(
      delegate?: BigNumberish | null,
      previousBalance?: null,
      newBalance?: null
    ): DelegateVotesChangedTokenEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    delegate(
      delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegates(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    delegatesToken(
      accountToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getExtTokenId(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastTotalSupply(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastVotesForToken(
      account: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTargetContract(overrides?: CallOverrides): Promise<BigNumber>;

    getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    getVotesForToken(
      account: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    noncesForToken(
      owner: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferVotingUnits(
      from: BigNumberish,
      to: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delegate(
      delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegates(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegatesToken(
      accountToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getExtTokenId(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPastTotalSupply(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPastVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPastVotesForToken(
      account: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTargetContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVotes(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVotesForToken(
      account: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonces(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    noncesForToken(
      owner: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferVotingUnits(
      from: BigNumberish,
      to: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

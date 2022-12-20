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

export declare namespace DataTypes {
  export type InputDecisionStruct = {
    ruleId: PromiseOrValue<BigNumberish>;
    decision: PromiseOrValue<boolean>;
  };

  export type InputDecisionStructOutput = [BigNumber, boolean] & {
    ruleId: BigNumber;
    decision: boolean;
  };
}

export interface IClaimInterface extends utils.Interface {
  functions: {
    "ruleRefAdd(address,uint256)": FunctionFragment;
    "stageCancel(string)": FunctionFragment;
    "stageDecision((uint256,bool)[],string)": FunctionFragment;
    "stageFile()": FunctionFragment;
    "stageWaitForDecision()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ruleRefAdd"
      | "stageCancel"
      | "stageDecision"
      | "stageFile"
      | "stageWaitForDecision"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ruleRefAdd",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stageCancel",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stageDecision",
    values: [DataTypes.InputDecisionStruct[], PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "stageFile", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stageWaitForDecision",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "ruleRefAdd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stageCancel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stageDecision",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stageFile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stageWaitForDecision",
    data: BytesLike
  ): Result;

  events: {
    "RuleAdded(address,uint256)": EventFragment;
    "RuleConfirmed(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RuleAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RuleConfirmed"): EventFragment;
}

export interface RuleAddedEventObject {
  game: string;
  ruleId: BigNumber;
}
export type RuleAddedEvent = TypedEvent<
  [string, BigNumber],
  RuleAddedEventObject
>;

export type RuleAddedEventFilter = TypedEventFilter<RuleAddedEvent>;

export interface RuleConfirmedEventObject {
  ruleId: BigNumber;
}
export type RuleConfirmedEvent = TypedEvent<
  [BigNumber],
  RuleConfirmedEventObject
>;

export type RuleConfirmedEventFilter = TypedEventFilter<RuleConfirmedEvent>;

export interface IClaim extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IClaimInterface;

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
    ruleRefAdd(
      game_: PromiseOrValue<string>,
      ruleId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stageCancel(
      uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stageDecision(
      verdict: DataTypes.InputDecisionStruct[],
      uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stageFile(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stageWaitForDecision(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  ruleRefAdd(
    game_: PromiseOrValue<string>,
    ruleId_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stageCancel(
    uri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stageDecision(
    verdict: DataTypes.InputDecisionStruct[],
    uri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stageFile(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stageWaitForDecision(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ruleRefAdd(
      game_: PromiseOrValue<string>,
      ruleId_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    stageCancel(
      uri: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    stageDecision(
      verdict: DataTypes.InputDecisionStruct[],
      uri: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    stageFile(overrides?: CallOverrides): Promise<void>;

    stageWaitForDecision(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "RuleAdded(address,uint256)"(
      game?: null,
      ruleId?: null
    ): RuleAddedEventFilter;
    RuleAdded(game?: null, ruleId?: null): RuleAddedEventFilter;

    "RuleConfirmed(uint256)"(ruleId?: null): RuleConfirmedEventFilter;
    RuleConfirmed(ruleId?: null): RuleConfirmedEventFilter;
  };

  estimateGas: {
    ruleRefAdd(
      game_: PromiseOrValue<string>,
      ruleId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stageCancel(
      uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stageDecision(
      verdict: DataTypes.InputDecisionStruct[],
      uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stageFile(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stageWaitForDecision(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ruleRefAdd(
      game_: PromiseOrValue<string>,
      ruleId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stageCancel(
      uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stageDecision(
      verdict: DataTypes.InputDecisionStruct[],
      uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stageFile(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stageWaitForDecision(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

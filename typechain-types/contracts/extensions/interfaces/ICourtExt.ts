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

export declare namespace DataTypes {
  export type RuleRefStruct = {
    game: PromiseOrValue<string>;
    ruleId: PromiseOrValue<BigNumberish>;
  };

  export type RuleRefStructOutput = [string, BigNumber] & {
    game: string;
    ruleId: BigNumber;
  };

  export type InputRoleTokenStruct = {
    tokenId: PromiseOrValue<BigNumberish>;
    role: PromiseOrValue<string>;
  };

  export type InputRoleTokenStructOutput = [BigNumber, string] & {
    tokenId: BigNumber;
    role: string;
  };

  export type PostInputStruct = {
    tokenId: PromiseOrValue<BigNumberish>;
    entRole: PromiseOrValue<string>;
    uri: PromiseOrValue<string>;
  };

  export type PostInputStructOutput = [BigNumber, string, string] & {
    tokenId: BigNumber;
    entRole: string;
    uri: string;
  };
}

export interface ICourtExtInterface extends utils.Interface {
  functions: {
    "caseMake(string,string,(address,uint256)[],(uint256,string)[],(uint256,string,string)[])": FunctionFragment;
    "caseMakeClosed(string,string,(address,uint256)[],(uint256,string)[],(uint256,string,string)[],string)": FunctionFragment;
    "caseMakeOpen(string,string,(address,uint256)[],(uint256,string)[],(uint256,string,string)[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "caseMake" | "caseMakeClosed" | "caseMakeOpen"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "caseMake",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      DataTypes.RuleRefStruct[],
      DataTypes.InputRoleTokenStruct[],
      DataTypes.PostInputStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "caseMakeClosed",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      DataTypes.RuleRefStruct[],
      DataTypes.InputRoleTokenStruct[],
      DataTypes.PostInputStruct[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "caseMakeOpen",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      DataTypes.RuleRefStruct[],
      DataTypes.InputRoleTokenStruct[],
      DataTypes.PostInputStruct[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "caseMake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "caseMakeClosed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "caseMakeOpen",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ICourtExt extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICourtExtInterface;

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
    caseMake(
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    caseMakeClosed(
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      decisionURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    caseMakeOpen(
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  caseMake(
    name_: PromiseOrValue<string>,
    uri_: PromiseOrValue<string>,
    rules: DataTypes.RuleRefStruct[],
    assignRoles: DataTypes.InputRoleTokenStruct[],
    posts: DataTypes.PostInputStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  caseMakeClosed(
    name_: PromiseOrValue<string>,
    uri_: PromiseOrValue<string>,
    rules: DataTypes.RuleRefStruct[],
    assignRoles: DataTypes.InputRoleTokenStruct[],
    posts: DataTypes.PostInputStruct[],
    decisionURI_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  caseMakeOpen(
    name_: PromiseOrValue<string>,
    uri_: PromiseOrValue<string>,
    rules: DataTypes.RuleRefStruct[],
    assignRoles: DataTypes.InputRoleTokenStruct[],
    posts: DataTypes.PostInputStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    caseMake(
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: CallOverrides
    ): Promise<string>;

    caseMakeClosed(
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      decisionURI_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    caseMakeOpen(
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    caseMake(
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    caseMakeClosed(
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      decisionURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    caseMakeOpen(
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    caseMake(
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    caseMakeClosed(
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      decisionURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    caseMakeOpen(
      name_: PromiseOrValue<string>,
      uri_: PromiseOrValue<string>,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export interface IERC1155RolesTrackerInterface extends utils.Interface {
  functions: {
    "roleExist(string)": FunctionFragment;
    "roleHas(address,string)": FunctionFragment;
    "roleHasByToken(uint256,string)": FunctionFragment;
    "roleURI(string)": FunctionFragment;
    "uniqueRoleMembers(string)": FunctionFragment;
    "uniqueRoleMembersCount(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "roleExist"
      | "roleHas"
      | "roleHasByToken"
      | "roleURI"
      | "uniqueRoleMembers"
      | "uniqueRoleMembersCount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "roleExist",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "roleHas",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "roleHasByToken",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "roleURI",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "uniqueRoleMembers",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "uniqueRoleMembersCount",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "roleExist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roleHas", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "roleHasByToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roleURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniqueRoleMembers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniqueRoleMembersCount",
    data: BytesLike
  ): Result;

  events: {
    "RoleCreated(uint256,string)": EventFragment;
    "RoleURIChange(string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoleCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleURIChange"): EventFragment;
}

export interface RoleCreatedEventObject {
  id: BigNumber;
  role: string;
}
export type RoleCreatedEvent = TypedEvent<
  [BigNumber, string],
  RoleCreatedEventObject
>;

export type RoleCreatedEventFilter = TypedEventFilter<RoleCreatedEvent>;

export interface RoleURIChangeEventObject {
  value: string;
  role: string;
}
export type RoleURIChangeEvent = TypedEvent<
  [string, string],
  RoleURIChangeEventObject
>;

export type RoleURIChangeEventFilter = TypedEventFilter<RoleURIChangeEvent>;

export interface IERC1155RolesTracker extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC1155RolesTrackerInterface;

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
    roleExist(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    roleHas(
      account: PromiseOrValue<string>,
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    roleHasByToken(
      soulToken: PromiseOrValue<BigNumberish>,
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    roleURI(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    uniqueRoleMembers(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    uniqueRoleMembersCount(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  roleExist(
    role: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  roleHas(
    account: PromiseOrValue<string>,
    role: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  roleHasByToken(
    soulToken: PromiseOrValue<BigNumberish>,
    role: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  roleURI(
    role: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  uniqueRoleMembers(
    role: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  uniqueRoleMembersCount(
    role: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    roleExist(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    roleHas(
      account: PromiseOrValue<string>,
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    roleHasByToken(
      soulToken: PromiseOrValue<BigNumberish>,
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    roleURI(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    uniqueRoleMembers(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    uniqueRoleMembersCount(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "RoleCreated(uint256,string)"(
      id?: PromiseOrValue<BigNumberish> | null,
      role?: null
    ): RoleCreatedEventFilter;
    RoleCreated(
      id?: PromiseOrValue<BigNumberish> | null,
      role?: null
    ): RoleCreatedEventFilter;

    "RoleURIChange(string,string)"(
      value?: null,
      role?: null
    ): RoleURIChangeEventFilter;
    RoleURIChange(value?: null, role?: null): RoleURIChangeEventFilter;
  };

  estimateGas: {
    roleExist(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    roleHas(
      account: PromiseOrValue<string>,
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    roleHasByToken(
      soulToken: PromiseOrValue<BigNumberish>,
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    roleURI(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniqueRoleMembers(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniqueRoleMembersCount(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    roleExist(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    roleHas(
      account: PromiseOrValue<string>,
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    roleHasByToken(
      soulToken: PromiseOrValue<BigNumberish>,
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    roleURI(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uniqueRoleMembers(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uniqueRoleMembersCount(
      role: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IContractBase,
  IContractBaseInterface,
} from "../../../contracts/interfaces/IContractBase";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "ContractURI",
    type: "event",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IContractBase__factory {
  static readonly abi = _abi;
  static createInterface(): IContractBaseInterface {
    return new utils.Interface(_abi) as IContractBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IContractBase {
    return new Contract(address, _abi, signerOrProvider) as IContractBase;
  }
}
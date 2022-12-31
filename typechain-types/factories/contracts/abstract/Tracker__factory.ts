/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Tracker,
  TrackerInterface,
} from "../../../contracts/abstract/Tracker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getExtTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class Tracker__factory {
  static readonly abi = _abi;
  static createInterface(): TrackerInterface {
    return new utils.Interface(_abi) as TrackerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Tracker {
    return new Contract(address, _abi, signerOrProvider) as Tracker;
  }
}

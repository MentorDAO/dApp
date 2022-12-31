/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IOpinionRepo, IOpinionRepoInterface } from "../IOpinionRepo";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "origin",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "target",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "domain",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int8",
        name: "score",
        type: "int8",
      },
    ],
    name: "OpinionChange",
    type: "event",
  },
  {
    inputs: [],
    name: "getTargetContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "origin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "domain",
        type: "string",
      },
    ],
    name: "getValueByDomain",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IOpinionRepo__factory {
  static readonly abi = _abi;
  static createInterface(): IOpinionRepoInterface {
    return new utils.Interface(_abi) as IOpinionRepoInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOpinionRepo {
    return new Contract(address, _abi, signerOrProvider) as IOpinionRepo;
  }
}

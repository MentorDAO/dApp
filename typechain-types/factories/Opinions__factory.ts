/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Opinions, OpinionsInterface } from "../Opinions";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "sbt",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        internalType: "int256",
        name: "oldValue",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "newValue",
        type: "int256",
      },
    ],
    name: "OpinionChange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sbt",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
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
    name: "getOpinion",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
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
    name: "getOpinionMine",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
    name: "getOpinionOnSoul",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sbt",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
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
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastRepForDomain",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class Opinions__factory {
  static readonly abi = _abi;
  static createInterface(): OpinionsInterface {
    return new utils.Interface(_abi) as OpinionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Opinions {
    return new Contract(address, _abi, signerOrProvider) as Opinions;
  }
}

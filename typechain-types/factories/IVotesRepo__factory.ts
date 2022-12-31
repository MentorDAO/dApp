/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IVotesRepo, IVotesRepoInterface } from "../IVotesRepo";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferVotingUnits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IVotesRepo__factory {
  static readonly abi = _abi;
  static createInterface(): IVotesRepoInterface {
    return new utils.Interface(_abi) as IVotesRepoInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVotesRepo {
    return new Contract(address, _abi, signerOrProvider) as IVotesRepo;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ProxyMulti,
  ProxyMultiInterface,
} from "../../../contracts/abstract/ProxyMulti";

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

export class ProxyMulti__factory {
  static readonly abi = _abi;
  static createInterface(): ProxyMultiInterface {
    return new utils.Interface(_abi) as ProxyMultiInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyMulti {
    return new Contract(address, _abi, signerOrProvider) as ProxyMulti;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IRuleExt,
  IRuleExtInterface,
} from "../../../../contracts/extensions/interfaces/IRuleExt";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "confirmationGet",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "ruling",
            type: "string",
          },
          {
            internalType: "bool",
            name: "evidence",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "witness",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.Confirmation",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "effectsGet",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "domain",
            type: "string",
          },
          {
            internalType: "int256",
            name: "value",
            type: "int256",
          },
          {
            internalType: "bool",
            name: "disabled",
            type: "bool",
          },
        ],
        internalType: "struct DataTypes.RepChange[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "about",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "affected",
            type: "string",
          },
          {
            internalType: "bool",
            name: "negation",
            type: "bool",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "bool",
            name: "disabled",
            type: "bool",
          },
        ],
        internalType: "struct DataTypes.Rule",
        name: "rule",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "ruling",
            type: "string",
          },
          {
            internalType: "bool",
            name: "evidence",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "witness",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.Confirmation",
        name: "confirmation",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "domain",
            type: "string",
          },
          {
            internalType: "int256",
            name: "value",
            type: "int256",
          },
          {
            internalType: "bool",
            name: "disabled",
            type: "bool",
          },
        ],
        internalType: "struct DataTypes.RepChange[]",
        name: "effects",
        type: "tuple[]",
      },
    ],
    name: "ruleAdd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string",
            name: "ruling",
            type: "string",
          },
          {
            internalType: "bool",
            name: "evidence",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "witness",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.Confirmation",
        name: "confirmation",
        type: "tuple",
      },
    ],
    name: "ruleConfirmationUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "disabled",
        type: "bool",
      },
    ],
    name: "ruleDisable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ruleGet",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "about",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "affected",
            type: "string",
          },
          {
            internalType: "bool",
            name: "negation",
            type: "bool",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "bool",
            name: "disabled",
            type: "bool",
          },
        ],
        internalType: "struct DataTypes.Rule",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "about",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "affected",
            type: "string",
          },
          {
            internalType: "bool",
            name: "negation",
            type: "bool",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "bool",
            name: "disabled",
            type: "bool",
          },
        ],
        internalType: "struct DataTypes.Rule",
        name: "rule",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "domain",
            type: "string",
          },
          {
            internalType: "int256",
            name: "value",
            type: "int256",
          },
          {
            internalType: "bool",
            name: "disabled",
            type: "bool",
          },
        ],
        internalType: "struct DataTypes.RepChange[]",
        name: "effects",
        type: "tuple[]",
      },
    ],
    name: "ruleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IRuleExt__factory {
  static readonly abi = _abi;
  static createInterface(): IRuleExtInterface {
    return new utils.Interface(_abi) as IRuleExtInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRuleExt {
    return new Contract(address, _abi, signerOrProvider) as IRuleExt;
  }
}

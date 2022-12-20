/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Dummy2, Dummy2Interface } from "../Dummy2";

const _abi = [
  {
    inputs: [],
    name: "debugFunc",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "debugFunc2",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getRepoAddr",
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
    inputs: [],
    name: "hub",
    outputs: [
      {
        internalType: "contract IHub",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "useSelf",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061040e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063365a86fc1461005c5780637348a9d9146100815780639e92fd8e14610096578063a01a67af1461009e578063dab11a6a146100cd575b600080fd5b6100646100f6565b6040516001600160a01b0390911681526020015b60405180910390f35b610089610105565b604051610078919061035f565b6100646101a6565b6040805180820190915260138152722432b63637902bb7b9363210223ab6b6bc901960691b6020820152610089565b60408051808201909152600d81526c2432b63637902bb7b93632101960991b6020820152610089565b6000610100610219565b905090565b60606000306001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561014257600080fd5b505afa158015610156573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261017e9190810190610282565b905080604051602001610191919061032a565b60405160208183030381529060405291505090565b6000306001600160a01b0316639e92fd8e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101e157600080fd5b505afa1580156101f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101009190610254565b6000306001600160a01b0316632db9a5126040518163ffffffff1660e01b815260040160206040518083038186803b1580156101e157600080fd5b600060208284031215610265578081fd5b81516001600160a01b038116811461027b578182fd5b9392505050565b600060208284031215610293578081fd5b81516001600160401b03808211156102a9578283fd5b818401915084601f8301126102bc578283fd5b8151818111156102ce576102ce6103c2565b604051601f8201601f19908116603f011681019083821181831017156102f6576102f66103c2565b8160405282815287602084870101111561030e578586fd5b61031f836020830160208801610392565b979650505050505050565b6c023b0b6b29029bcb6b137b61d1609d1b81526000825161035281600d850160208701610392565b91909101600d0192915050565b602081526000825180602084015261037e816040850160208701610392565b601f01601f19169190910160400192915050565b60005b838110156103ad578181015183820152602001610395565b838111156103bc576000848401525b50505050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ecfe2bf8f4eaa31d4b31a017d7a0a0e9d647a93e6246cf6c88b40024dd4b6f2b64736f6c63430008040033";

type Dummy2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Dummy2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Dummy2__factory extends ContractFactory {
  constructor(...args: Dummy2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Dummy2";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Dummy2> {
    return super.deploy(overrides || {}) as Promise<Dummy2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Dummy2 {
    return super.attach(address) as Dummy2;
  }
  connect(signer: Signer): Dummy2__factory {
    return super.connect(signer) as Dummy2__factory;
  }
  static readonly contractName: "Dummy2";
  public readonly contractName: "Dummy2";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Dummy2Interface {
    return new utils.Interface(_abi) as Dummy2Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Dummy2 {
    return new Contract(address, _abi, signerOrProvider) as Dummy2;
  }
}

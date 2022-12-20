/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ActionExt, ActionExtInterface } from "../ActionExt";

const _abi = [
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
    inputs: [
      {
        internalType: "bytes32",
        name: "actionGUID",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "runActionData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "actionGUID",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "string",
            name: "role",
            type: "string",
          },
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
        ],
        internalType: "struct ActionExt.RoleMap[]",
        name: "roleMap",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "string",
            name: "role",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        internalType: "struct ActionExt.IntMap[]",
        name: "intMap",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "string",
            name: "role",
            type: "string",
          },
          {
            internalType: "string",
            name: "value",
            type: "string",
          },
        ],
        internalType: "struct ActionExt.StrMap[]",
        name: "strMap",
        type: "tuple[]",
      },
    ],
    name: "runActionXX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506116b8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063205f34961461005c578063365a86fc146100715780639e92fd8e14610096578063e4bbfe231461009e578063f8a8fd6d146100b1575b600080fd5b61006f61006a366004611166565b6100d8565b005b6100796103f2565b6040516001600160a01b0390911681526020015b60405180910390f35b610079610401565b61006f6100ac36600461100c565b610474565b6040805180820182526005815264574f524b5360d81b6020820152905161008d919061135c565b60006100e26108ee565b905061011d604051806040016040528060178152602001761515102da222ab2e9030b1ba34b7b72932b837a0b2323960491b8152508261096a565b6001600160a01b038116156103ed576040516333f138f960e21b8152600481018490526001600160a01b0382169063cfc4e3e49060240160006040518083038186803b15801561016c57600080fd5b505afa9250505080156101a157506040513d6000823e601f3d908101601f1916820160405261019e91908101906111bd565b60015b6101fc576101ad6115cc565b806308c379a014156101f057506101c26115e4565b806101cd57506101f2565b8060405162461bcd60e51b81526004016101e7919061135c565b60405180910390fd5b505b3d6000803e3d6000fd5b61023a604051806040016040528060138152602001721515102da222ab2e9020b1ba34b7b7102a162b60691b815250826060015183602001516109b3565b6102648160600151604051806040016040528060048152602001631cdbdd5b60e21b8152506109fa565b156103eb576102938160200151604051806040016040528060048152602001637261746560e01b8152506109fa565b156103eb5760006102a2610a54565b90506102e36040518060400160405280601e81526020017f2a2a205b4445565d20616374696f6e20746172676574436f6e747261637400008152508261096a565b6000806000868060200190518101906102fc919061128e565b9250925092506103426040518060400160405280601e81526020017f2a2a205b4445565d20616374696f6e206465636f64656420706172616d7300008152508484610ab9565b61034a610a54565b6001600160a01b031663d7ebe87d858585856040518563ffffffff1660e01b815260040161037b9493929190611324565b600060405180830381600087803b15801561039557600080fd5b505af19250505080156103a6575060015b6103b2576101ad6115cc565b6103e66040518060400160405280601181526020017016d11155974814995c0810da185b99d959607a1b8152508585610b00565b505050505b505b505050565b60006103fc610b47565b905090565b6000306001600160a01b0316639e92fd8e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561043c57600080fd5b505afa158015610450573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103fc9190610ff0565b6104ad604051806040016040528060188152602001770a8a881c9d5b9058dd1a5bdb96160a0a4814d5105495115160421b815250610b82565b60006104b76108ee565b90506104ec6040518060400160405280601181526020017015151030b1ba34b7b72932b837a0b2323960791b8152508261096a565b6001600160a01b038116156108e7576040516333f138f960e21b8152600481018690526000906001600160a01b0383169063cfc4e3e49060240160006040518083038186803b15801561053e57600080fd5b505afa158015610552573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261057a91908101906111bd565b90506105a681606001516040518060400160405280600481526020016367616d6560e01b8152506109fa565b156105b0576108e5565b6105d9816060015160405180604001604052806003815260200162343ab160e91b8152506109fa565b156105e3576108e5565b61060d8160600151604051806040016040528060048152602001631cdbdd5b60e21b8152506109fa565b156108e55761063c8160200151604051806040016040528060048152602001637261746560e01b8152506109fa565b156108e557600061064b610a54565b9050610687604051806040016040528060188152602001770a8a881858dd1a5bdb881d185c99d95d10dbdb9d1c9858dd60421b8152508261096a565b60006106b1604051806040016040528060068152602001651bd89a9958dd60d21b81525087610bc8565b90506106f26040518060400160405280601d81526020017f616374696f6e206f626a6563742028746172676574546f6b656e49642900000081525082610c5a565b600061071c604051806040016040528060068152602001653237b6b0b4b760d11b81525087610c9f565b905061074d6040518060400160405280600d81526020016c30b1ba34b7b7103237b6b0b4b760991b81525082610d06565b600061077a604051806040016040528060098152602001683234b932b1ba34b7b760b91b81525088610c9f565b90506107ae6040518060400160405280601081526020016f30b1ba34b7b7103234b932b1ba34b7b760811b81525082610d06565b60006107d76040518060400160405280600581526020016476616c756560d81b8152508a610bc8565b90506108086040518060400160405280600d81526020016c1858dd1a5bdb88185b5bdd5b9d609a1b81525082610c5a565b600061083483604051806040016040528060088152602001676e6567617469766560c01b8152506109fa565b156108495761084282611586565b905061084c565b50805b610854610a54565b6001600160a01b031663d7ebe87d878787856040518563ffffffff1660e01b81526004016108859493929190611324565b600060405180830381600087803b15801561089f57600080fd5b505af19250505080156108b0575060015b6108de576108bc6115cc565b806308c379a014156101f057506108d16115e4565b806108dc57506101f2565b505b5050505050505b505b5050505050565b60006108f8610d4b565b6001600160a01b031663e2b49cb961090e610b47565b604080516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152600660448201526530b1ba34b7b760d11b60648201526084015b60206040518083038186803b15801561043c57600080fd5b6109af828260405160240161098092919061136f565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b179052610d55565b5050565b6103ed8383836040516024016109cb939291906113ec565b60408051601f198184030181529190526020810180516001600160e01b0316632ced7cef60e01b179052610d55565b600081604051602001610a0d9190611308565b6040516020818303038152906040528051906020012083604051602001610a349190611308565b604051602081830303815290604052805190602001201490505b92915050565b6000610a5e610d4b565b6001600160a01b031663e2b49cb9610a74610b47565b604080516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152600360448201526214d09560ea1b6064820152608401610952565b6103ed838383604051602401610ad193929190611451565b60408051601f198184030181529190526020810180516001600160e01b0316635970e08960e01b179052610d55565b6103ed838383604051602401610b1893929190611399565b60408051601f198184030181529190526020810180516001600160e01b0316630d26b92560e01b179052610d55565b6000306001600160a01b0316632db9a5126040518163ffffffff1660e01b815260040160206040518083038186803b15801561043c57600080fd5b610bc581604051602401610b96919061135c565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052610d55565b50565b6000805b8251811015610c5357610c0a84848381518110610bf957634e487b7160e01b600052603260045260246000fd5b6020026020010151600001516109fa565b15610c4357828181518110610c2f57634e487b7160e01b600052603260045260246000fd5b602002602001015160200151915050610a4e565b610c4c8161156b565b9050610bcc565b5092915050565b6109af8282604051602401610c7092919061142f565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b179052610d55565b606060005b8251811015610c5357610cd184848381518110610bf957634e487b7160e01b600052603260045260246000fd5b15610cf657828181518110610c2f57634e487b7160e01b600052603260045260246000fd5b610cff8161156b565b9050610ca4565b6109af8282604051602401610d1c9291906113c7565b60408051601f198184030181529190526020810180516001600160e01b0316634b5c427760e01b179052610d55565b60006103fc610401565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000610d81836114c7565b604051610d8e828261153f565b809250848152858585011115610da357600080fd5b8484602083013760006020868301015250509392505050565b600082601f830112610dcc578081fd5b81356020610dd9826114a4565b60408051610de7838261153f565b8481528381019250868401600586901b88018501891015610e06578687fd5b865b86811015610e835781356001600160401b0380821115610e2657898afd5b908a0190818c03601f1901861315610e3c57898afd5b8551610e478161151a565b8883013582811115610e57578b8cfd5b610e658e8b83870101610f74565b82525091860135888301525085529385019390850190600101610e08565b509098975050505050505050565b600082601f830112610ea1578081fd5b81356020610eae826114a4565b60408051610ebc838261153f565b8481528381019250868401600586901b88018501891015610edb578687fd5b865b86811015610e835781356001600160401b0380821115610efb57898afd5b908a0190818c03601f1901861315610f1157898afd5b8551610f1c8161151a565b8883013582811115610f2c578b8cfd5b610f3a8e8b83870101610f74565b8252508683013582811115610f4d578b8cfd5b610f5b8e8b83870101610f74565b828b015250875250509385019390850190600101610edd565b600082601f830112610f84578081fd5b610f9383833560208501610d76565b9392505050565b600082601f830112610faa578081fd5b8151610fb5816114c7565b604051610fc2828261153f565b828152856020848701011115610fd6578384fd5b610fe78360208301602088016114ee565b95945050505050565b600060208284031215611001578081fd5b8151610f938161166d565b60008060008060808587031215611021578283fd5b8435935060208501356001600160401b038082111561103e578485fd5b818701915087601f830112611051578485fd5b61105b82356114a4565b604051611068828261153f565b8335808252602080830193508086019160051b8601018b1015611089578788fd5b875b85358110156111135784823511156110a1578889fd5b813586016040818e03601f190112156110b857898afd5b6040516110c48161151a565b6020820135878111156110d5578b8cfd5b6110e48f602083860101610f74565b825250604082013591506110f78261166d565b602081810192909252855293840193919091019060010161108b565b509096505050604087013591508082111561112c578384fd5b61113888838901610dbc565b9350606087013591508082111561114d578283fd5b5061115a87828801610e91565b91505092959194509250565b60008060408385031215611178578182fd5b8235915060208301356001600160401b03811115611194578182fd5b8301601f810185136111a4578182fd5b6111b385823560208401610d76565b9150509250929050565b6000602082840312156111ce578081fd5b81516001600160401b03808211156111e4578283fd5b90830190608082860312156111f7578283fd5b6111ff61147c565b82518281111561120d578485fd5b61121987828601610f9a565b82525060208301518281111561122d578485fd5b61123987828601610f9a565b602083015250604083015182811115611250578485fd5b61125c87828601610f9a565b604083015250606083015182811115611273578485fd5b61127f87828601610f9a565b60608301525095945050505050565b6000806000606084860312156112a2578081fd5b835160208501519093506001600160401b038111156112bf578182fd5b6112cb86828701610f9a565b925050604084015190509250925092565b600081518084526112f48160208601602086016114ee565b601f01601f19169290920160200192915050565b6000825161131a8184602087016114ee565b9190910192915050565b60018060a01b038516815283602082015260806040820152600061134b60808301856112dc565b905082606083015295945050505050565b602081526000610f9360208301846112dc565b60408152600061138260408301856112dc565b905060018060a01b03831660208301529392505050565b6060815260006113ac60608301866112dc565b6001600160a01b039490941660208301525060400152919050565b6040815260006113da60408301856112dc565b8281036020840152610fe781856112dc565b6060815260006113ff60608301866112dc565b828103602084015261141181866112dc565b9050828103604084015261142581856112dc565b9695505050505050565b60408152600061144260408301856112dc565b90508260208301529392505050565b60608152600061146460608301866112dc565b846020840152828103604084015261142581856112dc565b604051608081016001600160401b038111828210171561149e5761149e6115b6565b60405290565b60006001600160401b038211156114bd576114bd6115b6565b5060051b60200190565b60006001600160401b038211156114e0576114e06115b6565b50601f01601f191660200190565b60005b838110156115095781810151838201526020016114f1565b838111156103eb5750506000910152565b604081016001600160401b0381118282101715611539576115396115b6565b60405250565b601f8201601f191681016001600160401b0381118282101715611564576115646115b6565b6040525050565b600060001982141561157f5761157f6115a0565b5060010190565b6000600160ff1b82141561159c5761159c6115a0565b0390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d11156115e157600481823e5160e01c5b90565b600060443d10156115f25790565b6040516003193d81016004833e81513d6001600160401b03808311602484018310171561162157505050505090565b82850191508151818111156116395750505050505090565b843d87010160208285010111156116535750505050505090565b6116626020828601018761153f565b509095945050505050565b6001600160a01b0381168114610bc557600080fdfea2646970667358221220dc750dd1a115b09d9ec26c91afd84624ab85d90778ca37c26e7cf87ea1f2634364736f6c63430008040033";

type ActionExtConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ActionExtConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ActionExt__factory extends ContractFactory {
  constructor(...args: ActionExtConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ActionExt";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ActionExt> {
    return super.deploy(overrides || {}) as Promise<ActionExt>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ActionExt {
    return super.attach(address) as ActionExt;
  }
  connect(signer: Signer): ActionExt__factory {
    return super.connect(signer) as ActionExt__factory;
  }
  static readonly contractName: "ActionExt";
  public readonly contractName: "ActionExt";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ActionExtInterface {
    return new utils.Interface(_abi) as ActionExtInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ActionExt {
    return new Contract(address, _abi, signerOrProvider) as ActionExt;
  }
}

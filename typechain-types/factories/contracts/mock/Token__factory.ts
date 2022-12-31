/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Token, TokenInterface } from "../../../contracts/mock/Token";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "BURNER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "batchMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
  {
    inputs: [],
    name: "totalSupply",
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
  {
    inputs: [
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
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
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
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051808201825260058152642a37b5b2b760d91b602080830191825283518085019094526006845265122a27a5a2a760d11b9084015281519192916200005d9160039162000197565b5080516200007390600490602084019062000197565b506200008591506000905033620000e3565b620000b17f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000e3565b620000dd7f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a84833620000e3565b6200027a565b620000ef8282620000f3565b5050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff16620000ef5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001533390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b828054620001a5906200023d565b90600052602060002090601f016020900481019282620001c9576000855562000214565b82601f10620001e457805160ff191683800117855562000214565b8280016001018555821562000214579182015b8281111562000214578251825591602001919060010190620001f7565b506200022292915062000226565b5090565b5b8082111562000222576000815560010162000227565b600181811c908216806200025257607f821691505b602082108114156200027457634e487b7160e01b600052602260045260246000fd5b50919050565b611381806200028a6000396000f3fe608060405234801561001057600080fd5b506004361061011d5760003560e01c806301ffc9a71461012257806306fdde031461014a578063095ea7b31461015f57806318160ddd1461017257806323b872dd14610184578063248a9ca314610197578063282c51f3146101aa5780632f2ff15d146101bf578063313ce567146101d457806336568abe146101e357806339509351146101f657806340c10f191461020957806370a082311461021c57806383b74baa1461024557806391d148541461025857806395d89b411461026b5780639dc29fac14610273578063a217fddf14610286578063a457c2d71461028e578063a9059cbb146102a1578063d5391393146102b4578063d547741f146102c9578063dd62ed3e146102dc575b600080fd5b610135610130366004611124565b6102ef565b60405190151581526020015b60405180910390f35b610152610326565b60405161014191906111bb565b61013561016d36600461104c565b6103b8565b6002545b604051908152602001610141565b610135610192366004611011565b6103d0565b6101766101a53660046110ea565b6103f4565b6101766000805160206112ec83398151915281565b6101d26101cd366004611102565b610409565b005b60405160128152602001610141565b6101d26101f1366004611102565b61042a565b61013561020436600461104c565b6104ad565b6101d261021736600461104c565b6104cf565b61017661022a366004610fc5565b6001600160a01b031660009081526020819052604090205490565b6101d2610253366004611075565b610535565b610135610266366004611102565b610596565b6101526105c1565b6101d261028136600461104c565b6105d0565b610176600081565b61013561029c36600461104c565b610636565b6101356102af36600461104c565b6106b1565b61017660008051602061130c83398151915281565b6101d26102d7366004611102565b6106bf565b6101766102ea366004610fdf565b6106db565b60006001600160e01b03198216637965db0b60e01b148061032057506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546103359061127f565b80601f01602080910402602001604051908101604052809291908181526020018280546103619061127f565b80156103ae5780601f10610383576101008083540402835291602001916103ae565b820191906000526020600020905b81548152906001019060200180831161039157829003601f168201915b5050505050905090565b6000336103c6818585610706565b5060019392505050565b6000336103de85828561082a565b6103e985858561089e565b506001949350505050565b60009081526005602052604090206001015490565b610412826103f4565b61041b81610a5a565b6104258383610a67565b505050565b6001600160a01b038116331461049f5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6104a98282610aed565b5050565b6000336103c68185856104c083836106db565b6104ca91906111ee565b610706565b6104e760008051602061130c83398151915233610596565b61052b5760405162461bcd60e51b815260206004820152601560248201527413db9b1e481b5a5b9d195c9cc818d85b881b5a5b9d605a1b6044820152606401610496565b6104a98282610b54565b60005b828110156105905761057e84848381811061056357634e487b7160e01b600052603260045260246000fd5b90506020020160208101906105789190610fc5565b836104cf565b80610588816112ba565b915050610538565b50505050565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600480546103359061127f565b6105e86000805160206112ec83398151915233610596565b61062c5760405162461bcd60e51b815260206004820152601560248201527427b7363c90313ab93732b9399031b0b710313ab93760591b6044820152606401610496565b6104a98282610c21565b6000338161064482866106db565b9050838110156106a45760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610496565b6103e98286868403610706565b6000336103c681858561089e565b6106c8826103f4565b6106d181610a5a565b6104258383610aed565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166107685760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610496565b6001600160a01b0382166107c95760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610496565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061083684846106db565b9050600019811461059057818110156108915760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610496565b6105908484848403610706565b6001600160a01b0383166109025760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610496565b6001600160a01b0382166109645760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610496565b6001600160a01b038316600090815260208190526040902054818110156109dc5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610496565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610a139084906111ee565b92505081905550826001600160a01b0316846001600160a01b031660008051602061132c83398151915284604051610a4d91815260200190565b60405180910390a3610590565b610a648133610d5d565b50565b610a718282610596565b6104a95760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610aa93390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610af78282610596565b156104a95760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b038216610baa5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610496565b8060026000828254610bbc91906111ee565b90915550506001600160a01b03821660009081526020819052604081208054839290610be99084906111ee565b90915550506040518181526001600160a01b0383169060009060008051602061132c8339815191529060200160405180910390a35050565b6001600160a01b038216610c815760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610496565b6001600160a01b03821660009081526020819052604090205481811015610cf55760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610496565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610d24908490611225565b90915550506040518281526000906001600160a01b0385169060008051602061132c8339815191529060200160405180910390a3505050565b610d678282610596565b6104a957610d7f816001600160a01b03166014610dc1565b610d8a836020610dc1565b604051602001610d9b92919061114c565b60408051601f198184030181529082905262461bcd60e51b8252610496916004016111bb565b60606000610dd0836002611206565b610ddb9060026111ee565b6001600160401b03811115610e0057634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610e2a576020820181803683370190505b509050600360fc1b81600081518110610e5357634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610e9057634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000610eb4846002611206565b610ebf9060016111ee565b90505b6001811115610f53576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610f0157634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110610f2557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93610f4c81611268565b9050610ec2565b508315610fa25760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610496565b9392505050565b80356001600160a01b0381168114610fc057600080fd5b919050565b600060208284031215610fd6578081fd5b610fa282610fa9565b60008060408385031215610ff1578081fd5b610ffa83610fa9565b915061100860208401610fa9565b90509250929050565b600080600060608486031215611025578081fd5b61102e84610fa9565b925061103c60208501610fa9565b9150604084013590509250925092565b6000806040838503121561105e578182fd5b61106783610fa9565b946020939093013593505050565b600080600060408486031215611089578283fd5b83356001600160401b038082111561109f578485fd5b818601915086601f8301126110b2578485fd5b8135818111156110c0578586fd5b8760208260051b85010111156110d4578586fd5b6020928301989097509590910135949350505050565b6000602082840312156110fb578081fd5b5035919050565b60008060408385031215611114578182fd5b8235915061100860208401610fa9565b600060208284031215611135578081fd5b81356001600160e01b031981168114610fa2578182fd5b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b81526000835161117e81601785016020880161123c565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516111af81602884016020880161123c565b01602801949350505050565b60208152600082518060208401526111da81604085016020870161123c565b601f01601f19169190910160400192915050565b60008219821115611201576112016112d5565b500190565b6000816000190483118215151615611220576112206112d5565b500290565b600082821015611237576112376112d5565b500390565b60005b8381101561125757818101518382015260200161123f565b838111156105905750506000910152565b600081611277576112776112d5565b506000190190565b600181811c9082168061129357607f821691505b602082108114156112b457634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156112ce576112ce6112d5565b5060010190565b634e487b7160e01b600052601160045260246000fdfe3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a8489f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220dbee71a8fd3dd44b0e5336ab2095bcb042313967d7265501f2ca3a68b32d5f4664736f6c63430008040033";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Token> {
    return super.deploy(overrides || {}) as Promise<Token>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Token {
    return super.attach(address) as Token;
  }
  override connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}

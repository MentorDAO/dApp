/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721Tracker, ERC721TrackerInterface } from "../ERC721Tracker";

const _abi = [
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fromSBT",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "toSBT",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "TransferByToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        internalType: "uint256",
        name: "id",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
  {
    inputs: [],
    name: "getHub",
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
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "mint",
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
    inputs: [],
    name: "owner",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    name: "renounceOwnership",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hubAddr",
        type: "address",
      },
    ],
    name: "setHub",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506124d2806100206000396000f3fe608060405234801561001057600080fd5b50600436106101335760003560e01c806301ffc9a71461013857806306fdde0314610160578063081812fc14610175578063095ea7b31461019557806323b872dd146101aa5780632db9a512146101bd57806331962cdc146101c557806342842e0e146101d857806342966c68146101eb5780634cd88b76146101fe5780636352211e1461021157806370a0823114610224578063715018a6146102455780637a8639ed1461024d5780638abe564f1461025e5780638da5cb5b1461027157806395d89b41146102795780639e92fd8e14610281578063a22cb46514610289578063b88d4fde1461029c578063c87b56dd146102af578063d0def521146102c2578063e8a3d485146102d5578063e985e9c5146102dd578063f2fde38b146102f0575b600080fd5b61014b610146366004611f5b565b610303565b60405190151581526020015b60405180910390f35b610168610355565b6040516101579190612182565b61018861018336600461205b565b6103e7565b6040516101579190612102565b6101a86101a3366004611f14565b61040e565b005b6101a86101b8366004611dde565b610529565b61018861055a565b6101a86101d3366004611d6e565b610573565b6101a86101e6366004611dde565b6105dc565b6101a86101f936600461205b565b6105f7565b6101a861020c366004612005565b610608565b61018861021f36600461205b565b6107c8565b610237610232366004611d6e565b61080a565b604051908152602001610157565b6101a8610897565b6066546001600160a01b0316610188565b61023761026c366004611d6e565b6108ab565b6101886109a6565b6101686109b3565b6101886109c2565b6101a8610297366004611e9a565b610a3f565b6101a86102aa366004611e1e565b610a4e565b6101686102bd36600461205b565b610a86565b6102376102d0366004611ec7565b610bc7565b610168610c11565b61014b6102eb366004611da6565b610c9a565b6101a86102fe366004611d6e565b610cc8565b60006001600160e01b031982166380ac58cd60e01b148061033457506001600160e01b03198216635b5e139f60e01b145b8061034f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606067805461036490612377565b80601f016020809104026020016040519081016040528092919081815260200182805461039090612377565b80156103dd5780601f106103b2576101008083540402835291602001916103dd565b820191906000526020600020905b8154815290600101906020018083116103c057829003601f168201915b5050505050905090565b60006103f282610d3e565b506000908152606c60205260409020546001600160a01b031690565b6000610419826107c8565b9050806001600160a01b0316836001600160a01b0316141561048c5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806104a857506104a88133610c9a565b61051a5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610483565b6105248383610d63565b505050565b6105333382610dd1565b61054f5760405162461bcd60e51b815260040161048390612195565b610524838383610e2f565b600061056e60cd546001600160a01b031690565b905090565b60cd546001600160a01b0316336001600160a01b0316146105d05760405162461bcd60e51b8152602060048201526017602482015276242aa11d2aa720aaaa2427a924ad22a22fa1a0a62622a960491b6044820152606401610483565b6105d981610fdf565b50565b61052483838360405180602001604052806000815250610a4e565b6105ff6110dd565b6105d98161113c565b600154610100900460ff161580801561062557506001805460ff16105b80610645575061063430611225565b15801561064557506001805460ff16145b6106a85760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610483565b6001805460ff19168117905580156106ca576001805461ff0019166101001790555b61075b6106d5611234565b60cd5460405163e2b49cb960e01b81526001600160a01b039283169263e2b49cb99261070692911690600401612153565b60206040518083038186803b15801561071e57600080fd5b505afa158015610732573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107569190611d8a565b61123e565b6107643361133c565b61076e8383611363565b61077f61077a32611394565b60cf55565b8015610524576001805461ff00191681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b6000818152606a602052604081205481906107e290611435565b90506001600160a01b03811661034f5760405162461bcd60e51b815260040161048390612234565b60006001600160a01b0382166108745760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610483565b606b6000610881846108ab565b8152602001908152602001600020549050919050565b61089f6110dd565b6108a960006114b2565b565b6066546000906001600160a01b038381169116141561092c5760405162461bcd60e51b815260206004820152603760248201527f547261636b65723a20736f7572636520636f6e74726163742061646472657373604482015276081a5cc81b9bdd0818481d985b1a59081858d8dbdd5b9d604a1b6064820152608401610483565b600061093783611504565b90508061034f5760405162461bcd60e51b815260206004820152603760248201527f547261636b65723a20726571756573746564206163636f756e74206e6f7420666044820152761bdd5b99081bdb881cdbdd5c98d94818dbdb9d1c9858dd604a1b6064820152608401610483565b600061056e60cf54611435565b60606068805461036490612377565b60cd5460408051634f497ec760e11b815290516000926001600160a01b031691639e92fd8e916004808301926020929190829003018186803b158015610a0757600080fd5b505afa158015610a1b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056e9190611d8a565b610a4a33838361160b565b5050565b610a583383610dd1565b610a745760405162461bcd60e51b815260040161048390612195565b610a80848484846116d6565b50505050565b6060610a9182610d3e565b60008281526069602052604081208054610aaa90612377565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad690612377565b8015610b235780601f10610af857610100808354040283529160200191610b23565b820191906000526020600020905b815481529060010190602001808311610b0657829003601f168201915b505050505090506000610b4160408051602081019091526000815290565b9050805160001415610b54575092915050565b815115610b86578082604051602001610b6e9291906120d3565b60405160208183030381529060405292505050919050565b6000815111610ba45760405180602001604052806000815250610bbf565b80610bae85611709565b604051602001610b6e9291906120d3565b949350505050565b6000610bd16110dd565b610bda83611394565b50610be960ce80546001019055565b6000610bf460ce5490565b9050610c008482611822565b610c0a8184611954565b9392505050565b6060610c1b611a1c565b6001600160a01b03166333dfa7d5306040518263ffffffff1660e01b8152600401610c469190612102565b60006040518083038186803b158015610c5e57600080fd5b505afa158015610c72573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261056e9190810190611f93565b6001600160a01b039182166000908152606d6020908152604080832093909416825291909152205460ff1690565b610cd06110dd565b6001600160a01b038116610d355760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610483565b6105d9816114b2565b610d4781611a6f565b6105d95760405162461bcd60e51b815260040161048390612234565b6000818152606c6020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610d98826107c8565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610ddd836107c8565b9050806001600160a01b0316846001600160a01b03161480610e045750610e048185610c9a565b80610bbf5750836001600160a01b0316610e1d846103e7565b6001600160a01b031614949350505050565b826001600160a01b0316610e42826107c8565b6001600160a01b031614610ea65760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610483565b6001600160a01b038216610f085760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610483565b6000610f13846108ab565b90506000610f20846108ab565b90506000838152606c6020908152604080832080546001600160a01b0319169055848352606b9091528120805460019290610f5c908490612334565b90915550506000818152606b60205260408120805460019290610f80908490612308565b90915550506000838152606a60205260408082208390555184916001600160a01b03808816929089169160008051602061245d83398151915291a482818360008051602061247d83398151915260405160405180910390a45050505050565b611078816001600160a01b03166310055c1d6040518163ffffffff1660e01b815260040160006040518083038186803b15801561101b57600080fd5b505afa15801561102f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526110579190810190611f93565b60405180604001604052806003815260200162243ab160e91b815250611a83565b6110bb5760405162461bcd60e51b8152602060048201526014602482015273125b9d985b1a5908121d588810dbdb9d1c9858dd60621b6044820152606401610483565b60cd80546001600160a01b0319166001600160a01b0392909216919091179055565b336110e66109a6565b6001600160a01b0316146108a95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610483565b6000611147826107c8565b90506000611154826108ab565b90506000838152606c6020908152604080832080546001600160a01b0319169055838352606b9091528120805460019290611190908490612334565b90915550506000818152606a602090815260408083208390558583526069909152902080546111be90612377565b1590506111dc5760008381526069602052604081206111dc91611c3e565b60405183906000906001600160a01b0385169060008051602061245d833981519152908390a48260008260008051602061247d83398151915260405160405180910390a4505050565b6001600160a01b03163b151590565b600061056e6109c2565b6040516301ffc9a760e01b8152635132eb7360e01b60048201526001600160a01b038216906301ffc9a79060240160206040518083038186803b15801561128457600080fd5b505afa158015611298573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112bc9190611f3f565b61131a5760405162461bcd60e51b815260206004820152602960248201527f54617267657420636f6e747261637420657870656374656420746f20737570706044820152681bdc9d081254dbdd5b60ba1b6064820152608401610483565b606680546001600160a01b0319166001600160a01b0392909216919091179055565b600154610100900460ff166105d05760405162461bcd60e51b815260040161048390612266565b600154610100900460ff1661138a5760405162461bcd60e51b815260040161048390612266565b610a4a8282611adc565b6000806113a083611504565b90508061034f5760665460408051634ed6a5f760e01b81526001600160a01b038681166004830152602482019290925260006044820152911690634ed6a5f790606401602060405180830381600087803b1580156113fd57600080fd5b505af1158015611411573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0a9190612073565b6066546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e9060240160206040518083038186803b15801561147a57600080fd5b505afa15801561148e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034f9190611d8a565b609b80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6066546000906001600160a01b038381169116141561158b5760405162461bcd60e51b815260206004820152603e60248201527f45524331313535547261636b65723a20736f7572636520636f6e74726163742060448201527f61646472657373206973206e6f7420612076616c6964206163636f756e7400006064820152608401610483565b60665460405163724686d760e01b81526001600160a01b039091169063724686d7906115bb908590600401612102565b60206040518083038186803b1580156115d357600080fd5b505afa1580156115e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034f9190612073565b816001600160a01b0316836001600160a01b031614156116695760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152606401610483565b6001600160a01b038381166000818152606d6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6116e1848484610e2f565b6116ed84848484611b2a565b610a805760405162461bcd60e51b8152600401610483906121e2565b60608161172d5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156117575780611741816123b2565b91506117509050600a83612320565b9150611731565b6000816001600160401b0381111561177f57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156117a9576020820181803683370190505b5090505b8415610bbf576117be600183612334565b91506117cb600a866123cd565b6117d6906030612308565b60f81b8183815181106117f957634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535061181b600a86612320565b94506117ad565b6001600160a01b0382166118785760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610483565b61188181611a6f565b156118cd5760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610483565b60006118d8836108ab565b90506000818152606b602052604081208054600192906118f9908490612308565b90915550506000828152606a60205260408082208390555183916001600160a01b0386169160008051602061245d833981519152908290a48181600060008051602061247d83398151915260405160405180910390a4505050565b61195d82611a6f565b6119c05760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610483565b600082815260696020908152604090912082516119df92840190611c78565b50817f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b82604051611a109190612182565b60405180910390a25050565b6000611a26611234565b60cd5460405163e2b49cb960e01b81526001600160a01b039283169263e2b49cb992611a5792911690600401612153565b60206040518083038186803b158015610a0757600080fd5b6000908152606a6020526040902054151590565b600081604051602001611a9691906120b7565b6040516020818303038152906040528051906020012083604051602001611abd91906120b7565b6040516020818303038152906040528051906020012014905092915050565b600154610100900460ff16611b035760405162461bcd60e51b815260040161048390612266565b8151611b16906067906020850190611c78565b508051610524906068906020840190611c78565b6000611b3e846001600160a01b0316611225565b15611c3357604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611b75903390899088908890600401612116565b602060405180830381600087803b158015611b8f57600080fd5b505af1925050508015611bbf575060408051601f3d908101601f19168201909252611bbc91810190611f77565b60015b611c19573d808015611bed576040519150601f19603f3d011682016040523d82523d6000602084013e611bf2565b606091505b508051611c115760405162461bcd60e51b8152600401610483906121e2565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610bbf565b506001949350505050565b508054611c4a90612377565b6000825580601f10611c5a575050565b601f0160209004906000526020600020908101906105d99190611cfc565b828054611c8490612377565b90600052602060002090601f016020900481019282611ca65760008555611cec565b82601f10611cbf57805160ff1916838001178555611cec565b82800160010185558215611cec579182015b82811115611cec578251825591602001919060010190611cd1565b50611cf8929150611cfc565b5090565b5b80821115611cf85760008155600101611cfd565b6000611d24611d1f846122e1565b6122b1565b9050828152838383011115611d3857600080fd5b828260208301376000602084830101529392505050565b600082601f830112611d5f578081fd5b610c0a83833560208501611d11565b600060208284031215611d7f578081fd5b8135610c0a81612423565b600060208284031215611d9b578081fd5b8151610c0a81612423565b60008060408385031215611db8578081fd5b8235611dc381612423565b91506020830135611dd381612423565b809150509250929050565b600080600060608486031215611df2578081fd5b8335611dfd81612423565b92506020840135611e0d81612423565b929592945050506040919091013590565b60008060008060808587031215611e33578081fd5b8435611e3e81612423565b93506020850135611e4e81612423565b92506040850135915060608501356001600160401b03811115611e6f578182fd5b8501601f81018713611e7f578182fd5b611e8e87823560208401611d11565b91505092959194509250565b60008060408385031215611eac578182fd5b8235611eb781612423565b91506020830135611dd381612438565b60008060408385031215611ed9578182fd5b8235611ee481612423565b915060208301356001600160401b03811115611efe578182fd5b611f0a85828601611d4f565b9150509250929050565b60008060408385031215611f26578182fd5b8235611f3181612423565b946020939093013593505050565b600060208284031215611f50578081fd5b8151610c0a81612438565b600060208284031215611f6c578081fd5b8135610c0a81612446565b600060208284031215611f88578081fd5b8151610c0a81612446565b600060208284031215611fa4578081fd5b81516001600160401b03811115611fb9578182fd5b8201601f81018413611fc9578182fd5b8051611fd7611d1f826122e1565b818152856020838501011115611feb578384fd5b611ffc82602083016020860161234b565b95945050505050565b60008060408385031215612017578182fd5b82356001600160401b038082111561202d578384fd5b61203986838701611d4f565b9350602085013591508082111561204e578283fd5b50611f0a85828601611d4f565b60006020828403121561206c578081fd5b5035919050565b600060208284031215612084578081fd5b5051919050565b600081518084526120a381602086016020860161234b565b601f01601f19169290920160200192915050565b600082516120c981846020870161234b565b9190910192915050565b600083516120e581846020880161234b565b8351908301906120f981836020880161234b565b01949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906121499083018461208b565b9695505050505050565b6001600160a01b039190911681526040602082018190526003908201526214d09560ea1b606082015260800190565b602081526000610c0a602083018461208b565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b602080825260189082015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b604051601f8201601f191681016001600160401b03811182821017156122d9576122d961240d565b604052919050565b60006001600160401b038211156122fa576122fa61240d565b50601f01601f191660200190565b6000821982111561231b5761231b6123e1565b500190565b60008261232f5761232f6123f7565b500490565b600082821015612346576123466123e1565b500390565b60005b8381101561236657818101518382015260200161234e565b83811115610a805750506000910152565b600181811c9082168061238b57607f821691505b602082108114156123ac57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156123c6576123c66123e1565b5060010190565b6000826123dc576123dc6123f7565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146105d957600080fd5b80151581146105d957600080fd5b6001600160e01b0319811681146105d957600080fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef67f7cc4f196d756404b8d1b249dec99118a5eba7dc255d3a8f613248a57a1072a2646970667358221220e8e37b50ec30bcc0508f9b25fc25de61fd1911d1ae19ca2dae5f9c1ac5c05adc64736f6c63430008040033";

type ERC721TrackerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721TrackerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Tracker__factory extends ContractFactory {
  constructor(...args: ERC721TrackerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721Tracker";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Tracker> {
    return super.deploy(overrides || {}) as Promise<ERC721Tracker>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721Tracker {
    return super.attach(address) as ERC721Tracker;
  }
  connect(signer: Signer): ERC721Tracker__factory {
    return super.connect(signer) as ERC721Tracker__factory;
  }
  static readonly contractName: "ERC721Tracker";
  public readonly contractName: "ERC721Tracker";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721TrackerInterface {
    return new utils.Interface(_abi) as ERC721TrackerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Tracker {
    return new Contract(address, _abi, signerOrProvider) as ERC721Tracker;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VotesRepoTrackerUpInt,
  VotesRepoTrackerUpIntInterface,
} from "../VotesRepoTrackerUpInt";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "delegator",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "fromDelegate",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "toDelegate",
        type: "uint256",
      },
    ],
    name: "DelegateChangedToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "previousBalance",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "newBalance",
        type: "int256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "delegate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "previousBalance",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "newBalance",
        type: "int256",
      },
    ],
    name: "DelegateVotesChangedToken",
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
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
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
    ],
    name: "delegates",
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
        name: "accountToken",
        type: "uint256",
      },
    ],
    name: "delegatesToken",
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
    name: "getCurrentSBT",
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
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
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
        name: "account",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotesForToken",
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
    inputs: [],
    name: "getTotalSupply",
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
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
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
    ],
    name: "getVotesForToken",
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
        name: "hub",
        type: "address",
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
    ],
    name: "nonces",
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
        name: "owner",
        type: "uint256",
      },
    ],
    name: "noncesForToken",
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
    inputs: [],
    name: "proxiableUUID",
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
    name: "renounceOwnership",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromSBT",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toSBT",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "amount",
        type: "int256",
      },
    ],
    name: "transferVotingUnits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c61292a610052600039600081816105c801528181610608015281816106ab015281816106eb0152610767015261292a6000f3fe6080604052600436106101475760003560e01c806302cd17201461014c5780630e7a5d161461017f5780632db9a5121461019457806331962cdc146101b65780633644e515146101d85780633659cfe6146101ed5780633a46b1a81461020d5780634f1ef2861461022d57806352d1902d14610240578063587cde1e146102555780635c19a95c1461027557806364d2fdb014610295578063715018a6146102b55780637a8639ed146102ca5780637ecebe00146102e85780638abe564f146103085780638da5cb5b146103285780638e539e8c1461033d5780639ab24eb01461035d5780639e92fd8e1461037d578063c1c5f41d14610392578063c3cda520146103b2578063c45e0a86146103d2578063c4d66de8146103f2578063c4e41b2214610412578063d13684ea14610427578063e8a3d48514610447578063f2fde38b14610469575b600080fd5b34801561015857600080fd5b5061016c610167366004612505565b610489565b6040519081526020015b60405180910390f35b34801561018b57600080fd5b5061016c6104a7565b3480156101a057600080fd5b506101a9610531565b6040516101769190612585565b3480156101c257600080fd5b506101d66101d1366004612315565b610545565b005b3480156101e457600080fd5b5061016c6105b3565b3480156101f957600080fd5b506101d6610208366004612315565b6105bd565b34801561021957600080fd5b5061016c6102283660046123d9565b610683565b6101d661023b36600461234d565b6106a0565b34801561024c57600080fd5b5061016c61075a565b34801561026157600080fd5b506101a9610270366004612315565b610808565b34801561028157600080fd5b506101d6610290366004612315565b61081e565b3480156102a157600080fd5b5061016c6102b0366004612505565b610829565b3480156102c157600080fd5b506101d661084a565b3480156102d657600080fd5b5060cb546001600160a01b03166101a9565b3480156102f457600080fd5b5061016c610303366004612315565b61085e565b34801561031457600080fd5b5061016c610323366004612315565b610868565b34801561033457600080fd5b506101a9610963565b34801561034957600080fd5b5061016c610358366004612505565b6109e0565b34801561036957600080fd5b5061016c610378366004612315565b610a4b565b34801561038957600080fd5b506101a9610a59565b34801561039e57600080fd5b5061016c6103ad366004612505565b610a9e565b3480156103be57600080fd5b506101d66103cd366004612404565b610b0a565b3480156103de57600080fd5b506101d66103ed36600461253e565b610c63565b3480156103fe57600080fd5b506101d661040d366004612315565b610c73565b34801561041e57600080fd5b5061016c610e1f565b34801561043357600080fd5b5061016c61044236600461251d565b610e38565b34801561045357600080fd5b5061045c610e5d565b60405161017691906125c8565b34801561047557600080fd5b506101d6610484366004612315565b610ee6565b33600090815261010160209081526040808320938352929052205490565b60006104b1610f5c565b6001600160a01b031663724686d7336040518263ffffffff1660e01b81526004016104dc9190612585565b60206040518083038186803b1580156104f457600080fd5b505afa158015610508573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052c9190612484565b905090565b600061052c6066546001600160a01b031690565b6066546001600160a01b0316336001600160a01b0316146105a75760405162461bcd60e51b8152602060048201526017602482015276242aa11d2aa720aaaa2427a924ad22a22fa1a0a62622a960491b60448201526064015b60405180910390fd5b6105b081610faf565b50565b600061052c6110ad565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156106065760405162461bcd60e51b815260040161059e906125fb565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166106386110e4565b6001600160a01b03161461065e5760405162461bcd60e51b815260040161059e90612635565b61066781611100565b604080516000808252602082019092526105b091839190611108565b600061069761069184610868565b83610e38565b90505b92915050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156106e95760405162461bcd60e51b815260040161059e906125fb565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661071b6110e4565b6001600160a01b0316146107415760405162461bcd60e51b815260040161059e90612635565b61074a82611100565b61075682826001611108565b5050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107f55760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c6044820152771b1959081d1a1c9bdd59da0819195b1959d85d1958d85b1b60421b606482015260840161059e565b5060008051602061288e83398151915290565b600061069a61081961016784610868565b611282565b3261075681836112ff565b3360009081526101046020908152604080832084845290915281205461069a565b610852611319565b61085c6000611378565b565b600061069a6102b0835b60cb546000906001600160a01b03838116911614156108e95760405162461bcd60e51b815260206004820152603760248201527f547261636b65723a20736f7572636520636f6e74726163742061646472657373604482015276081a5cc81b9bdd0818481d985b1a59081858d8dbdd5b9d604a1b606482015260840161059e565b60006108f4836113ca565b90508061069a5760405162461bcd60e51b815260206004820152603760248201527f547261636b65723a20726571756573746564206163636f756e74206e6f7420666044820152761bdd5b99081bdb881cdbdd5c98d94818dbdb9d1c9858dd604a1b606482015260840161059e565b60665460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156109a857600080fd5b505afa1580156109bc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052c9190612331565b6000438210610a315760405162461bcd60e51b815260206004820152601e60248201527f566f7465735265706f3a20626c6f636b206e6f7420796574206d696e65640000604482015260640161059e565b3360009081526101036020526040902061069a90836114d1565b600061069a6103ad836113ca565b60665460408051634f497ec760e11b815290516000926001600160a01b031691639e92fd8e916004808301926020929190829003018186803b1580156109a857600080fd5b600081610ae65760405162461bcd60e51b8152602060048201526016602482015275159bdd195cd4995c1bce88125b9d985b1a590814d09560521b604482015260640161059e565b33600090815261010260209081526040808320858452909152902061069a906115f2565b83421115610b595760405162461bcd60e51b815260206004820152601c60248201527b159bdd195cd4995c1bce881cda59db985d1d5c9948195e1c1a5c995960221b604482015260640161059e565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610bd390610bcb9060a00160405160208183030381529060405280519060200120611650565b85858561169e565b9050610c07610be182610868565b336000908152610104602090815260408083209383529290522080546001810190915590565b8614610c505760405162461bcd60e51b8152602060048201526018602482015277566f7465735265706f3a20696e76616c6964206e6f6e636560401b604482015260640161059e565b610c5a81886112ff565b50505050505050565b610c6e8383836116c6565b505050565b600154610100900460ff1615808015610c9057506001805460ff16105b80610cb05750610c9f3061172b565b158015610cb057506001805460ff16145b610d135760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161059e565b6001805460ff1916811790558015610d35576001805461ff0019166101001790555b610d3d61173a565b610d4682611761565b610dd7610d51611788565b60665460405163e2b49cb960e01b81526001600160a01b039283169263e2b49cb992610d8292911690600401612599565b60206040518083038186803b158015610d9a57600080fd5b505afa158015610dae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd29190612331565b611792565b8015610756576001805461ff00191681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b3360009081526101036020526040812061052c906115f2565b33600090815261010260209081526040808320858452909152812061069790836114d1565b6060610e67610f5c565b6001600160a01b03166333dfa7d5306040518263ffffffff1660e01b8152600401610e929190612585565b60006040518083038186803b158015610eaa57600080fd5b505afa158015610ebe573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261052c919081019061249c565b610eee611319565b6001600160a01b038116610f535760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161059e565b6105b081611378565b6000610f66611788565b60665460405163e2b49cb960e01b81526001600160a01b039283169263e2b49cb992610f9792911690600401612599565b60206040518083038186803b1580156109a857600080fd5b611048816001600160a01b03166310055c1d6040518163ffffffff1660e01b815260040160006040518083038186803b158015610feb57600080fd5b505afa158015610fff573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611027919081019061249c565b60405180604001604052806003815260200162243ab160e91b815250611890565b61108b5760405162461bcd60e51b8152602060048201526014602482015273125b9d985b1a5908121d588810dbdb9d1c9858dd60621b604482015260640161059e565b606680546001600160a01b0319166001600160a01b0392909216919091179055565b600061052c7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6110dc60cc5490565b60cd546118e9565b60008051602061288e833981519152546001600160a01b031690565b6105b0611319565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561113b57610c6e83611933565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561117457600080fd5b505afa9250505080156111a4575060408051601f3d908101601f191682019092526111a191810190612484565b60015b6112075760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b606482015260840161059e565b60008051602061288e83398151915281146112765760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b606482015260840161059e565b50610c6e8383836119cd565b60cb546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e9060240160206040518083038186803b1580156112c757600080fd5b505afa1580156112db573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069a9190612331565b61075661130b83610868565b61131483610868565b6119f8565b33611322610963565b6001600160a01b03161461085c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161059e565b603480546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60cb546000906001600160a01b03838116911614156114515760405162461bcd60e51b815260206004820152603e60248201527f45524331313535547261636b65723a20736f7572636520636f6e74726163742060448201527f61646472657373206973206e6f7420612076616c6964206163636f756e740000606482015260840161059e565b60cb5460405163724686d760e01b81526001600160a01b039091169063724686d790611481908590600401612585565b60206040518083038186803b15801561149957600080fd5b505afa1580156114ad573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069a9190612484565b60004382106115225760405162461bcd60e51b815260206004820181905260248201527f436865636b706f696e74733a20626c6f636b206e6f7420796574206d696e6564604482015260640161059e565b825460005b8181101561159557600061153b8284611ae0565b90508486600001828154811061156157634e487b7160e01b600052603260045260246000fd5b60009182526020909120015463ffffffff1611156115815780925061158f565b61158c816001612752565b91505b50611527565b816115a55760009250505061069a565b846115b16001846127c9565b815481106115cf57634e487b7160e01b600052603260045260246000fd5b600091825260209091200154600160201b9004601b90810b900b95945050505050565b8054600090806116055750600092915050565b826116116001836127c9565b8154811061162f57634e487b7160e01b600052603260045260246000fd5b600091825260209091200154600160201b9004601b90810b900b9392505050565b600061069a61165d6110ad565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006116af87878787611afb565b915091506116bc81611bde565b5095945050505050565b826116eb57336000908152610103602052604090206116e890611dda83611de6565b50505b81611710573360009081526101036020526040902061170d90611e1483611de6565b50505b610c6e61171c84610489565b61172584610489565b83611e20565b6001600160a01b03163b151590565b600154610100900460ff1661085c5760405162461bcd60e51b815260040161059e9061266f565b600154610100900460ff166105a75760405162461bcd60e51b815260040161059e9061266f565b600061052c610a59565b6040516301ffc9a760e01b81526317ff47d760e21b60048201526001600160a01b038216906301ffc9a79060240160206040518083038186803b1580156117d857600080fd5b505afa1580156117ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118109190612464565b61186e5760405162461bcd60e51b815260206004820152602960248201527f54617267657420636f6e747261637420657870656374656420746f20737570706044820152681bdc9d081254dbdd5b60ba1b606482015260840161059e565b60cb80546001600160a01b0319166001600160a01b0392909216919091179055565b6000816040516020016118a39190612569565b60405160208183030381529060405280519060200120836040516020016118ca9190612569565b6040516020818303038152906040528051906020012014905092915050565b6040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090505b9392505050565b61193c8161172b565b61199e5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161059e565b60008051602061288e83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6119d683611f7d565b6000825111806119e35750805b15610c6e576119f28383611fbd565b50505050565b6000611a0383610489565b3360009081526101016020908152604080832087845290915290208390559050611a2c82611282565b6001600160a01b0316611a3e82611282565b6001600160a01b0316611a5085611282565b6001600160a01b03167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a48181847f472d85e9261660ff5a5db6fb50351852ec3312ceeb7eb55cf99286fb54c29a1b60405160405180910390a4610c6e8183611adb8633600090815261010060209081526040808320938352929052205490565b611e20565b6000611aef600284841861276a565b61069790848416612752565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b03831115611b285750600090506003611bd5565b8460ff16601b14158015611b4057508460ff16601c14155b15611b515750600090506004611bd5565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611ba5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611bce57600060019250925050611bd5565b9150600090505b94509492505050565b6000816004811115611c0057634e487b7160e01b600052602160045260246000fd5b1415611c095750565b6001816004811115611c2b57634e487b7160e01b600052602160045260246000fd5b1415611c745760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015260640161059e565b6002816004811115611c9657634e487b7160e01b600052602160045260246000fd5b1415611ce45760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161059e565b6003816004811115611d0657634e487b7160e01b600052602160045260246000fd5b1415611d5f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161059e565b6004816004811115611d8157634e487b7160e01b600052602160045260246000fd5b14156105b05760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161059e565b60006106978284612711565b600080611e0885611e03611df9886115f2565b868863ffffffff16565b6120af565b91509150935093915050565b6000610697828461278a565b818314158015611e305750600081135b15610c6e578215611ed7573360009081526101026020908152604080832086845290915281208190611e6590611e1485611de6565b91509150611e7285611282565b6001600160a01b031660008051602061284e8339815191528383604051611ea3929190918252602082015260400190565b60405180910390a2604080518381526020810183905286916000805160206128ae833981519152910160405180910390a250505b8115610c6e573360009081526101026020908152604080832085845290915281208190611f0790611dda85611de6565b91509150611f1484611282565b6001600160a01b031660008051602061284e8339815191528383604051611f45929190918252602082015260400190565b60405180910390a2604080518381526020810183905285916000805160206128ae833981519152910160405180910390a25050505050565b611f8681611933565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060611fc88361172b565b6120235760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840161059e565b600080846001600160a01b03168460405161203e9190612569565b600060405180830381855af49150503d8060008114612079576040519150601f19603f3d011682016040523d82523d6000602084013e61207e565b606091505b50915091506120a682826040518060600160405280602781526020016128ce602791396121f6565b95945050505050565b81546000908190816120c0866115f2565b905060008211801561210c575043866120da6001856127c9565b815481106120f857634e487b7160e01b600052603260045260246000fd5b60009182526020909120015463ffffffff16145b1561217d5761211a8561222f565b866121266001856127c9565b8154811061214457634e487b7160e01b600052603260045260246000fd5b9060005260206000200160000160046101000a8154816001600160e01b030219169083601b0b6001600160e01b031602179055506121ed565b856000016040518060400160405280612195436122b0565b63ffffffff1681526020016121a98861222f565b601b90810b909152825460018101845560009384526020938490208351949093015190910b6001600160e01b0316600160201b0263ffffffff909316929092179101555b95939450505050565b6060831561220557508161192c565b8251156122155782518084602001fd5b8160405162461bcd60e51b815260040161059e91906125c8565b60006001600160df1b0319821280159061225057506001600160df1b038213155b6122ac5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b606482015260840161059e565b5090565b600063ffffffff8211156122ac5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b606482015260840161059e565b600060208284031215612326578081fd5b813561192c81612838565b600060208284031215612342578081fd5b815161192c81612838565b6000806040838503121561235f578081fd5b823561236a81612838565b915060208301356001600160401b03811115612384578182fd5b8301601f81018513612394578182fd5b80356123a76123a2826126ea565b6126ba565b8181528660208385010111156123bb578384fd5b81602084016020830137908101602001929092525090939092509050565b600080604083850312156123eb578182fd5b82356123f681612838565b946020939093013593505050565b60008060008060008060c0878903121561241c578182fd5b863561242781612838565b95506020870135945060408701359350606087013560ff8116811461244a578283fd5b9598949750929560808101359460a0909101359350915050565b600060208284031215612475578081fd5b8151801515811461192c578182fd5b600060208284031215612495578081fd5b5051919050565b6000602082840312156124ad578081fd5b81516001600160401b038111156124c2578182fd5b8201601f810184136124d2578182fd5b80516124e06123a2826126ea565b8181528560208385010111156124f4578384fd5b6120a68260208301602086016127e0565b600060208284031215612516578081fd5b5035919050565b6000806040838503121561252f578182fd5b50508035926020909101359150565b600080600060608486031215612552578283fd5b505081359360208301359350604090920135919050565b6000825161257b8184602087016127e0565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039190911681526040602082018190526003908201526214d09560ea1b606082015260800190565b60208152600082518060208401526125e78160408501602087016127e0565b601f01601f19169190910160400192915050565b6020808252602c9082015260008051602061286e83398151915260408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c9082015260008051602061286e83398151915260408201526b6163746976652070726f787960a01b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b604051601f8201601f191681016001600160401b03811182821017156126e2576126e2612822565b604052919050565b60006001600160401b0382111561270357612703612822565b50601f01601f191660200190565b600080821280156001600160ff1b03849003851316156127335761273361280c565b600160ff1b839003841281161561274c5761274c61280c565b50500190565b600082198211156127655761276561280c565b500190565b60008261278557634e487b7160e01b81526012600452602481fd5b500490565b60008083128015600160ff1b8501841216156127a8576127a861280c565b6001600160ff1b03840183138116156127c3576127c361280c565b50500390565b6000828210156127db576127db61280c565b500390565b60005b838110156127fb5781810151838201526020016127e3565b838111156119f25750506000910152565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146105b057600080fdfe8508f4e3dc4e292c5ef40ad0343e77116372b6f57806cf637d257203e009783a46756e6374696f6e206d7573742062652063616c6c6564207468726f75676820360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbcf9390babff649ee103f68f475c4d20b6017ae10e8f27a7eba9620bb8cbbb3789416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220888e7bed8137940ce5d205b0ae94f8c253b74aa49178f3d7704ece097929f37464736f6c63430008040033";

type VotesRepoTrackerUpIntConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VotesRepoTrackerUpIntConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VotesRepoTrackerUpInt__factory extends ContractFactory {
  constructor(...args: VotesRepoTrackerUpIntConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "VotesRepoTrackerUpInt";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VotesRepoTrackerUpInt> {
    return super.deploy(overrides || {}) as Promise<VotesRepoTrackerUpInt>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VotesRepoTrackerUpInt {
    return super.attach(address) as VotesRepoTrackerUpInt;
  }
  connect(signer: Signer): VotesRepoTrackerUpInt__factory {
    return super.connect(signer) as VotesRepoTrackerUpInt__factory;
  }
  static readonly contractName: "VotesRepoTrackerUpInt";
  public readonly contractName: "VotesRepoTrackerUpInt";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VotesRepoTrackerUpIntInterface {
    return new utils.Interface(_abi) as VotesRepoTrackerUpIntInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotesRepoTrackerUpInt {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VotesRepoTrackerUpInt;
  }
}

import { Web3Context } from "contexts/web3";
import WrongNetworkError from "errors/WrongNetworkError";
import { Contract } from "ethers";
import { useContext } from "react";
import contractAbi from "contracts/abi/Soul.json";

/**
 * Hook for work with soul contract.
 */
export default function useSoulContract() {
  const { provider, isNetworkChainIdCorrect } = useContext(Web3Context);

  function getContract(signerOrProvider: any) {
    return new Contract(
      process.env.NEXT_PUBLIC_SOUL_CONTRACT_ADDRESS || "",
      contractAbi,
      signerOrProvider
    );
  }

  async function mint(tokenUri: string) {
    if (!isNetworkChainIdCorrect) {
      throw new WrongNetworkError();
    }
    return await getContract(provider?.getSigner()).mint(tokenUri);
  }

  return {
    mint,
  };
}

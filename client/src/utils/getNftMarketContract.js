import { ethers } from "ethers";
import { nftMarketABI, nftMarketPlaceContractAddress } from "./constants";

const { ethereum } = window;

// Getting the smart contract methods from the ABI.
export const getNftMarketContract = () => {
  // ethers - our node provider, will help us connect to the ethereum network.
  const provider = new ethers.providers.Web3Provider(ethereum);

  // Meta mask will use this object to ask the user to sign the transaction.
  const signer = provider.getSigner();

  // Now we can create an instance of the contract using the ethers.
  const nftMarketContract = new ethers.Contract(
    nftMarketPlaceContractAddress,
    nftMarketABI,
    signer
  );
  return nftMarketContract;
};

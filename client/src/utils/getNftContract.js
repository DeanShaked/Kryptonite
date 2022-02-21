import { ethers } from "ethers";
import { nftABI, nftContractAddress } from "./constants";

const { ethereum } = window;

// Getting the smart contract instance.
export const getNftContract = () => {
  // ethers - our node provider, will help us connect to the ethereum network.
  // Something like: Bezeq is a provider for the internet.
  const provider = new ethers.providers.Web3Provider(ethereum);

  // Meta mask will use this object to ask the user to sign the transaction.
  const signer = provider.getSigner();

  // Now we can create an instance of the contract using the ethers.
  const nftContract = new ethers.Contract(nftContractAddress, nftABI, signer);
  return nftContract;
};

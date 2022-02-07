import { ethers } from "ethers";
import { contractABI, contractAddress } from "./constants";

const { ethereum } = window;

// Getting the smart contract methods from the ABI.
export const getEthereumContract = () => {
  // ethers - our node provider, will help us connect to the ethereum network.
  // Something like: Bezeq is a provider for the internet.
  const provider = new ethers.providers.Web3Provider(ethereum);

  // Meta mask will use this object to ask the user to sign the transaction.
  const signer = provider.getSigner();

  // Now we can create an instance of the contract using the ethers.
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionContract;
};

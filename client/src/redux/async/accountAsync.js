import { getEthereumContract } from "../../utils/getEthereumContract";
import { ethers } from "ethers";

// Getting the smart contract instance.
const transactionContract = getEthereumContract();

// Getting the ethereum object from any wallet provider available on your browser (We use Meta Mask)
const { ethereum } = window;

// Get the transactions count from the smart contract.
export const getTransactionsCount = async () => {
  try {
    // Calling the getTransactionCount function from the smart contract.
    const transactionCount = await transactionContract.getTransactionCount();
    // Returning the transactions count.
    return transactionCount;
  } catch (error) {
    console.error(error);
  }
};

// Get the current ethereum account used by the ethereum wallet. (We use exclusivly Meta Mask)
export const getCurrentAccount = async () => {
  // In this call, if the is any *current* account connected to the current wallet.
  try {
    const currentAccount = await ethereum.request({ method: "eth_accounts" });
    return currentAccount[0];
  } catch (error) {
    console.error(error);
  }
};

// Get the current ethereum wallet connected to the browser. (We use exclusivly Meta Mask)
export const getWallet = async () => {
  try {
    // In this call, We'll ask for *all* the accounts connected to the current wallet.
    const walletAccounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    // In return we'll get an array of all the connected accounts under the current domain (localhost:3000, wwww.xyz.com, etc..)
    return walletAccounts[0];
  } catch (error) {
    console.error(error);
  }
};

// Send transaction via the ethereum wallet connected to the browser. (We use exclusivly Meta Mask)
export const sendTransactions = async ({
  currentAccount,
  addressTo,
  amount,
}) => {
  try {
    // Using the parseEther method to match the convention of ethereum values.
    const parsedAmount = ethers.utils.parseEther(amount);

    // This will trigger the Meta mask extension to continue the transaction.
    const transaction = await ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: currentAccount,
          to: addressTo,
          gas: "0x5208", // 21000 GWEI
          value: parsedAmount._hex, // 0.0001 ETH
        },
      ],
    });
    return transaction;
  } catch (error) {
    console.error(error);
  }
};

// Add the transaction to the blockchain.
export const addToBlockchain = async ({
  addressTo,
  amount,
  keyword,
  message,
}) => {
  // Using the parseEther method to match the convention of ethereum values.
  const parsedAmount = ethers.utils.parseEther(amount);

  // After we'll add the transaction to the blockchain, we'll get in return the transaction hash.
  const transactionHash = await transactionContract.addToBlockchain(
    addressTo,
    parsedAmount,
    keyword,
    message
  );
  return transactionHash;
};

// Get all visible transactions from the smart contract.
export const getAllTransactions = async () => {
  try {
    const availableTransactions =
      await transactionContract.getAllTransactions();
    return availableTransactions;
  } catch (error) {
    console.error(error);
  }
};

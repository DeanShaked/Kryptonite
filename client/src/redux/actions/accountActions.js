// Async Requests
import {
  getTransactionsCount,
  getCurrentAccount,
  getWallet,
} from "../async/accountAsync";

// Reducers Methods
import {
  setCurrentAccount,
  setTransactionCount,
} from "../reducers/accountSlice";

const { ethereum } = window;

// Checks if a metamask wallet with a known account already exist (After the first connection with the wallet)
export const checkIfWalletIsConnected = () => async (dispatch) => {
  if (!ethereum) return alert("Please Install MetaMask");

  const currentAccount = await getCurrentAccount();

  if (currentAccount) dispatch(setCurrentAccount(currentAccount));
  else console.log("No account found");
};

// Checks for the amount of transactions under the smart contract.
export const checkTransactions = () => async (dispatch) => {
  const transactions = await getTransactionsCount();
  if (transactions) dispatch(setTransactionCount(transactions));
  else {
    console.log("No transactions found.");
  }
};

// This function collect the wallet account.... will expand later
export const connectWallet = () => async (dispatch) => {
  if (!ethereum) return alert("Please install meta mask");

  // If you have meta mask installed it means you have an interface with
  // the ethereum object which allows you to fetch information from the wallet
  // such as the current active account, wallet address, account balance, etc..
  const currentAccount = await getWallet();

  if (currentAccount) dispatch(setCurrentAccount(currentAccount));
  else console.log("No account found");
};

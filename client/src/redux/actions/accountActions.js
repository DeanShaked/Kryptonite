// Reducers Methods
import { setCurrentAccount } from "../reducers/accountSlice";

const { ethereum } = window;

// Checks if a metamask wallet with a known account already exist (After the first connection with the wallet)
export const checkIfWalletIsConnected = () => async (dispatch) => {
  if (!ethereum) return alert("Please Install MetaMask");

  const currentAccount = await ethereum.request({ method: "eth_accounts" });

  if (currentAccount.length) {
    dispatch(setCurrentAccount(currentAccount[0]));
  } else {
    console.log("No account found");
  }

  console.log("currentAccount[0] :>> ", currentAccount[0]);
};

// This function collect the wallet account.... will expand later
export const connectWallet = () => async (dispatch) => {
  try {
    if (!ethereum) return alert("Please install meta mask");
    const currentAccount = await ethereum.request({
      method: "eth_requestAccounts",
    });
    dispatch(setCurrentAccount(currentAccount[0]));
  } catch (error) {
    console.error(error);
  }
};

// Reducers Methods
import { setAccountAddress, setCurrentAccount } from "../reducers/accountSlice";

const { ethereum } = window;

// Checks if a metamask wallet with a known account already exist (After the first connection with the wallet)
export const checkIfWalletIsConnected = () => async (dispatch) => {
  if (!ethereum) return alert("Please Install MetaMask");

  const accountAdress = await ethereum.request({ method: "eth_accounts" });
  console.log("accounts", accountAdress);
  dispatch(setAccountAddress(accountAdress));
};

// This function collect the wallet account.... will expand later
export const connectWallet = () => async (dispatch) => {
  try {
    if (!ethereum) return alert("Please install meta mask");
    const currentAccount = await ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("currentAccount", currentAccount);
    dispatch(setCurrentAccount(currentAccount[0]));
  } catch (error) {
    console.error(error);
    throw new Error("No ethereum object.");
  }
};

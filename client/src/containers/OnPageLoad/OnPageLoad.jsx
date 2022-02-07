// App
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Redux
import { getAllTransactions } from "../../redux/async/accountAsync";
import {
  checkIfWalletIsConnected,
  checkTransactions,
} from "../../redux/actions/accountActions";
import { setTransactionCount } from "../../redux/reducers/accountSlice";

const OnPageLoad = () => {
  const dispatch = useDispatch();

  const LoadTransactions = async () => {
    const allTransactions = await getAllTransactions();
    return allTransactions;
  };

  useEffect(() => {
    dispatch(checkIfWalletIsConnected());
    dispatch(checkTransactions());
    dispatch(setTransactionCount(LoadTransactions));
  }, []);
  return null;
};

export default OnPageLoad;

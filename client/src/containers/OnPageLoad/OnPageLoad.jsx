// App
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Redux
import {
  checkIfWalletIsConnected,
  getAllTransactionsCount,
  getTransactions,
} from "../../redux/actions/accountActions";

import { fetchAllMarketItems } from "../../redux/actions/marketActions";

const OnPageLoad = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIfWalletIsConnected());
    dispatch(getAllTransactionsCount());
    dispatch(getTransactions());
    dispatch(fetchAllMarketItems());
  }, []);
  return null;
};

export default OnPageLoad;

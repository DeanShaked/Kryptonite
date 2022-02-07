// App
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Redux
import {
  checkIfWalletIsConnected,
  checkTransactions,
  getAvaialableTransactions,
} from "../../redux/actions/accountActions";

const OnPageLoad = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(checkIfWalletIsConnected());
    await dispatch(checkTransactions());
    await dispatch(getAvaialableTransactions());
  }, []);
  return null;
};

export default OnPageLoad;

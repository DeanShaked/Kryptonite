// App
import { useEffect } from "react";

// React Router Dom
import { Routes, Route } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  checkIfWalletIsConnected,
  checkTransactions,
} from "./redux/actions/accountActions";
import { setTransactionCount } from "./redux/reducers/accountSlice";
import { getAllTransactions } from "./redux/async/accountAsync";

// Screens
import { Navbar, Footer } from "./components";
import HomeScreen from "./containers/HomeScreen/HomeScreen";
import MarketScreen from "./containers/MarketScreen/MarketScreen";
import ExchangeScreen from "./containers/ExchangeScreen/ExchangeScreen";

const App = () => {
  const dispatch = useDispatch();

  const nfn = async () => {
    const allTransactions = await getAllTransactions();
    return allTransactions;
  };

  useEffect(() => {
    dispatch(checkIfWalletIsConnected());
    dispatch(checkTransactions());
    dispatch(setTransactionCount(nfn()));
  }, []);

  return (
    <div className="gradient-bg-home">
      <Navbar />
      <main>
        <Routes>
          <Route exact path={"/"} element={<HomeScreen />} />
          <Route path={"/market"} element={<MarketScreen />} />
          <Route path={"/exchange"} element={<ExchangeScreen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

// App
import { useEffect } from "react";

// React Router Dom
import { Routes, Route } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { checkIfWalletIsConnected } from "./redux/actions/accountActions";

// Screens
import { Navbar, Footer } from "./components";
import HomeScreen from "./containers/HomeScreen/HomeScreen";
import MarketScreen from "./containers/MarketScreen/MarketScreen";
import ExchangeScreen from "./containers/ExchangeScreen/ExchangeScreen";

const App = () => {
  const dispatch = useDispatch();

  const { accountAddress } = useSelector((state) => state.accountSlice);

  useEffect(() => {
    dispatch(checkIfWalletIsConnected());
  }, []);

  useEffect(() => {
    // TODO: Reload the page if the account address changes
  }, [accountAddress]);

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

// React Router Dom
import { Routes, Route } from "react-router-dom";

// Screens
import { Navbar, Footer } from "./components";
import HomeScreen from "./containers/HomeScreen/HomeScreen";
import MarketScreen from "./containers/MarketScreen/MarketScreen";
import ExchangeScreen from "./containers/ExchangeScreen/ExchangeScreen";
import OnPageLoad from "./containers/OnPageLoad/OnPageLoad";
import SellAsset from "./components/MarketPartials/SellAsset/SellAsset";
import MyAssets from "./components/MarketPartials/MyAssets/MyAssets";
import Dashboard from "./components/MarketPartials/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="gradient-bg-home">
      {/* This component will load all the data we need for our app to redux */}
      <OnPageLoad />
      <Navbar />
      <main>
        <Routes>
          <Route exact path={"/"} element={<HomeScreen />} />
          <Route path={"/market"} element={<MarketScreen />}>
            <Route path="sell-asset" element={<SellAsset />} />
            <Route path="my-assets" element={<MyAssets />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path={"/exchange"} element={<ExchangeScreen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

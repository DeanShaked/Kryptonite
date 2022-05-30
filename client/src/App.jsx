// React Router Dom
import { Routes, Route } from "react-router-dom";

// Screens
import { Navbar, Footer } from "./components";
import HomeScreen from "./containers/HomeScreen/HomeScreen";
import MarketScreen from "./containers/MarketScreen/MarketScreen";
import ExchangeScreen from "./containers/ExchangeScreen/ExchangeScreen";
import OnPageLoad from "./containers/OnPageLoad/OnPageLoad";
import NewAsset from "./components/MarketPartials/NewAsset/NewAsset";
import MyAssets from "./components/MarketPartials/MyAssets/MyAssets";
import Dashboard from "./components/MarketPartials/Dashboard/Dashboard";
import HomeMarket from "./components/MarketPartials/HomeMarket/HomeMarket";

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
            <Route index element={<HomeMarket />} />
            <Route path="sell-asset" element={<NewAsset />} />
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

// React Router Dom
import { Routes, Route } from "react-router-dom";

// Components
import SellAsset from "../../components/MarketPartials/SellAsset/SellAsset";
import MyAssets from "../../components/MarketPartials/MyAssets/MyAssets";
import Dashboard from "../../components/MarketPartials/Dashboard/Dashboard";

const MarketScreen = () => {
  return (
    <Routes>
      <Route path="markets/sell-asset">
        <SellAsset />
      </Route>
      <Route path="markets/sell-asset">
        <MyAssets />
      </Route>
      <Route path="markets/sell-asset">
        <Dashboard />
      </Route>
    </Routes>
  );
};

export default MarketScreen;

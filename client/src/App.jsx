// React Router Dom
import { Routes, Route } from "react-router-dom";

// Screens
import { Navbar, Footer } from "./components";
import HomeScreen from "./containers/HomeScreen/HomeScreen";
import MarketScreen from "./containers/MarketScreen/MarketScreen";
import ExchangeScreen from "./containers/ExchangeScreen/ExchangeScreen";

const App = () => {
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

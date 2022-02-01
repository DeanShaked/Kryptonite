// Components
import { Services } from "../../components";
import ExchangeInfo from "../../components/HomePartials/ExchangeInfo/ExchangeInfo";
import MarketInfo from "../../components/HomePartials/MarketInfo/MarketInfo";

const HomeScreen = () => {
  return (
    <div>
      <ExchangeInfo />
      <Services />
      {/* <MarketInfo /> */}
    </div>
  );
};

export default HomeScreen;

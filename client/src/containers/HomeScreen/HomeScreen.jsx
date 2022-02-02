// Components
import Welcome from "../../components/HomePartials/Welcome/Welcome";
import Services from "../../components/HomePartials/Services/Services";
import Transactions from "../../components/HomePartials/Transactions/Transactions";

const HomeScreen = () => {
  return (
    <div>
      <Welcome />
      <Services />
      <Transactions />
      {/* <MarketInfo /> */}
    </div>
  );
};

export default HomeScreen;

// Components
import Welcome from "../../components/HomePartials/Welcome/Welcome";
import Services from "../../components/HomePartials/Services/Services";

const HomeScreen = () => {
  return (
    <div>
      <Welcome />
      <Services />
      {/* <MarketInfo /> */}
    </div>
  );
};

export default HomeScreen;

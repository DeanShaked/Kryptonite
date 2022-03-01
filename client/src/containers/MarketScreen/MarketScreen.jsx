// React Router Dom
import { Outlet } from "react-router-dom";

// Components
import MarketNavBar from "../../components/MarketPartials/MakretNavbar/MarketNavBar";

const MarketScreen = () => {
  return (
    <div>
      <div className="h-36 text-white ">
        <MarketNavBar />
      </div>

      <Outlet />
    </div>
  );
};

export default MarketScreen;

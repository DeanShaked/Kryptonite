import React from "react";
import { NavLink } from "react-router-dom";

const MarketNavBar = () => {
  return (
    <ul className="flex flex-row justify-around h-24 mt-24 m-4">
      <li className="text-2xl hover:opacity-80">
        <NavLink
          to="/market/sell-asset"
          className={({ isActive }) =>
            isActive ? "--silver-border p-4 rounded-3xl bg-grey" : "text-white"
          }
        >
          Sell Digital Asset
        </NavLink>
      </li>
      <li className="text-2xl hover:opacity-80">
        <NavLink
          to="/market/my-assets"
          className={({ isActive }) =>
            isActive ? "--silver-border p-4 rounded-3xl bg-grey" : "text-white"
          }
        >
          My Digital Assets
        </NavLink>
      </li>
      <li className="text-2xl hover:opacity-80">
        <NavLink
          to="/market/dashboard"
          className={({ isActive }) =>
            isActive ? "--silver-border p-4 rounded-3xl bg-grey" : "text-white"
          }
        >
          Creator Dasboard
        </NavLink>
      </li>
    </ul>
  );
};

export default MarketNavBar;

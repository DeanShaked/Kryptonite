// App
import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItem = ({ title, route }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        isActive
          ? "font-bold text-purple"
          : "font-bold text-white hover:text-purple opacity-80 hover:opacity-100 "
      }
    >
      <li className="mx-4 cursor-pointer font-medium text-xl">{title}</li>
    </NavLink>
  );
};

export default NavbarItem;

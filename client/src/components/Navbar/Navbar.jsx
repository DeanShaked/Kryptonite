// App
import React from "react";
import { NavLink } from "react-router-dom";

// Components & Assets
import NavbarItem from "./NavbarItem";
import LogoSvg from "../../../assets/images/logo.svg?component";

// Fixture
import { menu } from "../../fixture/navbar.json";

const Navbar = () => {
  const createNav = menu.map(({ id, title, route }) => (
    <NavbarItem key={id} title={title} route={route} />
  ));

  return (
    <nav className="w-full items-center justify-around flex flex-row h-32 bg-gradient-to-r from-green via-primary to-black">
      <div className="flex">
        <NavLink exact="true" to={"/"}>
          <LogoSvg className="w-20 cursor-pointer" />
        </NavLink>
      </div>
      <ul className="flex justify-center items-center p">{createNav}</ul>
      <div className="flex items-center rounded-xl py-4 h-10 bg-green shadow-md shadow-black hover:transition-opacity hover:duration-300 hover:opacity-70 ">
        <button className="text-grey font-bold px-4 ">Connect Wallet</button>
        <button className="h-20 w-20 ">hey</button>
      </div>
    </nav>
  );
};

export default Navbar;

// App
import React from "react";

// Components & Assets
import NavbarItem from "./NavbarItem";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// Fixture
import { menu } from "../../fixture/navbar.json";

const Navbar = () => {
  const createNav = menu.map(({ id, title, route }) => (
    <NavbarItem key={id} title={title} route={route} />
  ));

  return (
    <nav className="w-full items-center justify-between flex flex-row px-4">
      <div className="flex">
        <NavLink exact to={"/"}>
          <img src={logo} className="w-32 cursor-pointer" />
        </NavLink>
      </div>
      <ul className="flex justify-center items-center">{createNav}</ul>
      <div className="flex items-center rounded-xl py-4 h-10 bg-green shadow-md shadow-black hover:transition-opacity hover:duration-500 hover:opacity-70 ">
        <button className="text-grey font-bold px-4 ">Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;

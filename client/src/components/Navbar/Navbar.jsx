import React from "react";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../../assets/images/logo.png";

import NavbarItem from "./NavbarItem";

// Fixture
import { menu } from '../../fixture/navbar.json';

const Navbar = () => {
  const createNav = menu.map(({ id, title, route }) => <NavbarItem key={id} title={title} />)

  return (
    <nav className="w-full items-center justify-between flex flex-row px-4">
      <div className="flex">
        <img src={logo} alt="" className="w-32 cursor-pointer" />
      </div>
      <ul className="flex justify-center items-center">
        {createNav}
      </ul>
      <div className="flex items-center bg-greyish rounded-xl py-4 h-10">
        <h3 className="text-green px-4">Connect Wallet</h3>
      </div>
    </nav>
  );
};

export default Navbar;

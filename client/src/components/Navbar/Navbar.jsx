import React from "react";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../../assets/images/logo.png";

import NavbarItem from "./NavbarItem";

const titles = ["Markets","Exchange", "Tutorial", "Wallets"]

const Navbar = () => {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden flex-row justify-between items-center flex-initial">
        {titles.map(title => <NavbarItem title={title} />)}
      </ul>
    </nav>
  );
};

export default Navbar;

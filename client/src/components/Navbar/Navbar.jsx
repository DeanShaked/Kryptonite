import React from "react";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../../assets/images/logo.png";

import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="w-full items-center justify-between flex flex-row px-4">
      <div className="flex">
        <img src={logo} alt="" className="w-32 cursor-pointer" />
      </div>
      <ul className="flex justify-center items-center">
        {/* TODO: Pass classProps according to  */}
        {["Home", "Exchange"].map((title) => (
          <NavbarItem title={title} />
        ))}
      </ul>
      <div className="flex items-center bg-greyish rounded-xl py-4 h-10">
        <h3 className="text-green px-4">Connect Wallet</h3>
      </div>
    </nav>
  );
};

export default Navbar;

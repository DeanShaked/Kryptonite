import React from "react";

const NavbarItem = ({ title }) => {
  return (
    <li className="mx-4 cursor-pointer text-green font-medium text-xl">
      {title}
    </li>
  );
};

export default NavbarItem;

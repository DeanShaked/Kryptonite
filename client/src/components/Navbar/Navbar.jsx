// App
import { NavLink } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

// Components & Assets
import ConnectWallet from "./Elements/ConnectWallet";
import NavbarItem from "./Elements/NavbarItem";
import LogoSvg from "../../../assets/images/logo.svg?component";

// Fixture
import { menu } from "../../fixture/navbar.json";

const Navbar = () => {
  const createNav = menu.map(({ id, title, route }) => (
    <NavbarItem key={id} title={title} route={route} />
  ));
  const { accountAddress } = useSelector((state) => state.accountSlice);

  return (
    <>
      <nav className="w-full items-center justify-evenly flex flex-row h-32">
        <div className="flex">
          <NavLink exact="true" to={"/"}>
            <LogoSvg className="w-[108px] cursor-pointer" />
          </NavLink>
        </div>
        <ul className="flex justify-center items-center p">{createNav}</ul>
        {!accountAddress ? (
          <ConnectWallet />
        ) : (
          <div className="flex w-[143px]"></div>
        )}
      </nav>
      <hr />
    </>
  );
};

export default Navbar;

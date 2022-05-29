// Redux
import { useSelector } from "react-redux";

// Components & Assets
import ConnectWallet from "./Elements/ConnectWallet";
import NavbarItem from "./Elements/NavbarItem";

// Fixture
import { menu } from "../../fixture/navbar.json";

const Navbar = () => {
  const createNav = menu.map(({ id, title, route }) => (
    <NavbarItem key={id} title={title} route={route} />
  ));
  const { currentAccount } = useSelector((state) => state.accountSlice);

  return (
    <>
      <nav className="w-full items-center flex flex-row h-32">
        <ul className="flex justify-center items-center w-full px-10">
          <div className="flex justify-center pl-14 flex-grow">{createNav}</div>
          {!currentAccount ? (
            <ConnectWallet />
          ) : (
            <div className="flex w-[143px]"></div>
          )}
        </ul>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;

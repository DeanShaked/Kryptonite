import { isMetaMaskInstalled } from "../../../utils/isMetaMaskInstalled";

// Redux
import { useDispatch } from "react-redux";
import { connectWallet } from "../../../redux/actions/accountActions";

const ConnectWallet = () => {
  const isMetaInstalled = isMetaMaskInstalled();
  const dispatch = useDispatch();

  const handleConnectWallet = () => dispatch(connectWallet());

  let displayConnection = (
    <div className="flex flex-col items-center rounded-xl py-4 h-14 shadow-md ">
      <a
        href="https://metamask.io/download/"
        target="_blank"
        rel="noreferrer"
        className="text-purple cursor-pointer font-bold text-lg hover:scale-110 hover:transition-transform"
      >
        Please Install MetaMask
      </a>
    </div>
  );

  if (isMetaInstalled) {
    displayConnection = (
      <div className="flex items-center rounded-xl py-4 h-14 bg-purple shadow-md hover:transition-opacity hover:duration-300 hover:opacity-70">
        <button
          className="text-white font-bold px-4"
          onClick={handleConnectWallet}
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  return <div className="flex w-auto">{displayConnection}</div>;
};

export default ConnectWallet;

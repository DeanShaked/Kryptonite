const ConnectWallet = () => {
  // Have to check the ethereum binding on the window object to see if it's installed
  const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  return isMetaMaskInstalled() ? (
    <div className="flex items-center rounded-xl py-4 h-14 bg-purple shadow-md hover:transition-opacity hover:duration-300 hover:opacity-70 ">
      <button className="text-white font-bold px-4">Connect Wallet</button>
    </div>
  ) : (
    <div className="flex flex-col items-center rounded-xl py-4 h-14 shadow-md ">
      <a
        href="https://metamask.io/download/"
        target="_blank"
        rel="noreferrer"
        className="text-purple cursor-pointer font-bold text-lg"
      >
        Please Install MetaMask
      </a>
    </div>
  );
};

export default ConnectWallet;

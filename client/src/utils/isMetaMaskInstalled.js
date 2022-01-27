// Checking if the user has Etheruem Wallet by the global Window object.

export const isMetaMaskInstalled = () => {
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};

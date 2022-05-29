/* importing all abi's */
import transactionsAbi from "../fixture/Transactions.json";
import NftMarketAbi from "../fixture/NFTMarket.json";
import NftAbi from "../fixture/NFT.json";

/* Transactions contract*/
export const transactionsABI = transactionsAbi.abi;
export const transactionsContractAddress =
  "0x5FbDB2315678afecb367f032d93F642f64180aa3";

/* NFTMarket contract*/
export const nftMarketABI = NftMarketAbi.abi;
export const nftMarketContractAddress =
  "0x84302dbb199bbb69eef05955b192f42db4dc42ba";

/* NFT contract*/
export const nftABI = NftAbi.abi;
export const nftContractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

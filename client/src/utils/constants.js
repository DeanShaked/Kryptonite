/* importing all abi's */
import transactionsAbi from "../fixture/Transactions.json";
import NftMarketAbi from "../fixture/NFTMarket.json";
import NftAbi from "../fixture/NFT.json";

/* Transactions contract*/
export const transactionsABI = transactionsAbi.abi;
export const transactionsContractAddress =
  "0xEae40ccbB427d2D31AAE1ADFC2C5cA1388f84d4e";

/* NFTMarket contract*/
export const nftMarketABI = NftMarketAbi.abi;
export const nftMarketContractAddress =
  "0xf0Cb2f672AFD30D6244332bA775f254316076F63";

/* NFT contract*/
export const nftABI = NftAbi.abi;
export const nftContractAddress = "0xF7e4f9360743242f626ae86a5597422e015135d7";

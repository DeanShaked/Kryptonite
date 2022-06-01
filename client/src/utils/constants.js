/* importing all abi's */
import transactionsAbi from "../abis/Transactions.json";
import NftMarketAbi from "../abis/NFTMarket.json";
import NftAbi from "../abis/NFT.json";

/* Transactions contract*/
export const transactionsABI = transactionsAbi.abi;
export const transactionsContractAddress =
  "0xdB64BbA9667B533b49f88C4317fA8407D5b5Fda3";

/* NFTMarket contract*/
export const nftMarketABI = NftMarketAbi.abi;
export const nftMarketPlaceContractAddress =
  "0x2f0E2f6d2882118bFDc1072F23ED45028AB14C6d";

/* NFT contract*/
export const nftABI = NftAbi.abi;
export const nftContractAddress = "0xF42100D2d9DFAF00dB37bE554aDf4c0B1c5ed4a3";

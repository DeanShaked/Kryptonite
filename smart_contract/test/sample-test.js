const { ethers } = require("hardhat");

// describe("NFTMarket", function () {
//   it("Should create and execute market sales", async function () {
//     /* Deploy the marketplace */
//     const Market = await ethers.getContractFactory("NFTMarket");
//     const market = await Market.deploy();
//     await market.deployed();
//     const marketAddress = market.address;

//     /* Deploy the NFT contract */
//     const NFT = await ethers.getContractFactory("NFT");
//     const nft = await NFT.deploy(marketAddress);
//     await nft.deployed();
//     const nftContractAddress = nft.address;

//     let listingPrice = await market.getListingPrice();
//     listingPrice = listingPrice.toString();

//     const auctionPrice = ethers.utils.parseUnits(".1", "ether");

//     /* Create two tokens */
//     await nft.createToken("https://www.mytokenlocation.com");
//     await nft.createToken("https://www.mytokenlocation2.com");

//     /* Put both tokens for sale */
//     await market.createMarketItem(nftContractAddress, 1, auctionPrice, {
//       value: listingPrice,
//     });
//     await market.createMarketItem(nftContractAddress, 2, auctionPrice, {
//       value: listingPrice,
//     });

//     /*
//       We don't want the buyer address to conflict with seller address,
//       so we ignore the current address provided by ethers and use the buyer address instead.
//     */
//     const [_, buyerAddress] = await ethers.getSigners();

//     /* Execute sale of token to another user */
//     await market
//       .connect(buyerAddress)
//       .createMarketSale(nftContractAddress, 1, { value: auctionPrice });

//     /* Query for and return the unsold items */
//     items = await market.fetchMarketItems();
//     console.log("items: ", items);
//   });
// });

describe("Transactions", function () {
  it("Execute a transaction between two wallets", async function () {
    /* Deploy smart contract */
    const Transactions = await ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();
    await transactions.deployed();

    /* General init */
    const transactionsAddress = transactions.address;
    const [senderAddress] = await ethers.getSigners();
    const bigNumber = ethers.utils.parseUnits("1", "ether");

    const addressTo = senderAddress.address;
    const amount = bigNumber;
    const keyword = "hello world";
    const message = "Hello World";

    console.log("addressTo :>> ", addressTo);
    console.log("amount :>> ", amount);
    console.log("keyword :>> ", keyword);
    console.log("message :>> ", message);

    await transactionsAddress;
    /* Add transaction to the blockchain */
    await transactions.addToBlockchain({
      addressTo,
      amount,
      keyword,
      message,
    });
  });
});

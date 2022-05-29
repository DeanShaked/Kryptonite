const hre = require("hardhat");
const helper = require("./helper");

/* Smart contracts deployment*/
const main = async () => {
  /* Transactions */
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();
  await transactions.deployed();
  console.log("Transactions deployed to:", transactions.address);

  /* NFT Market Place */
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();
  console.log("NFTMarket deployed to:", nftMarket.address);

  /* NFT */
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarket.address);
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);

  /* Array of all deployed contracts */
  const contracts = [transactions, nftMarket, nft];

  /* Deployment File */
  const fileMessage = await helper.createDeploymentFile(contracts);
  console.log(fileMessage);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();

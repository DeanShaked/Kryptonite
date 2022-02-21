import { Contract, ethers } from "ethers";
import { axios } from "axios";
import { getNftContract } from "../../utils/getNftContract";
import { getNftMarketContract } from "../../utils/getNftMarketContract";

// Getting the smart contract instances.
const nftContract = getNftContract();
const nftMarketContract = getNftMarketContract();

// Getting the ethereum object from any wallet provider available on your browser (We use Meta Mask)
const { ethereum } = window;

// Fetching all the NFT market place items
export const getMarketItems = async () => {
  try {
    const data = await nftMarketContract.fetchMarketItems();

    const items = await Promise.all(
      data.map(async (item) => {
        // tokenUri is the link (string) to the image/video/etc..
        const tokenUri = await tokenContract.tokenURI(item.tokenId);
        // nftMeta is the actual link to the IPFS storage
        const nftMeta = await axios.get(tokenUri);

        let price = ethers.utils.formatUnits(item.price.toString(), "ether");

        let nft = {
          price,
          tokenId: item.tokenId.toNumber(),
          seller: item.seller,
          owner: item.owner,
          image: nftMeta.data.image,
          name: nftMeta.data.name,
          description: nftMeta.data.description,
        };
        return nft;
      })
    );

    // Returning the all NFT market place items.
    return items;
  } catch (error) {
    console.error(error);
  }
};

// Buying a token/NFT from the sell
export const buyNft = async (nft) => {
  try {
    let price = ethers.utils.formatUnits(nft.price.toString(), "ether");

    const transaction = await Contract.createMarketSale(
      nftContract,
      nft.tokenId,
      { value: price }
    );
    await transaction.wait();
  } catch (error) {
    console.error(error);
  }
};

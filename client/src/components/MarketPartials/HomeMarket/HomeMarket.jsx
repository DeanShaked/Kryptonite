import React from "react";
import AssetCard from "../../Reusable/AssetCard";

const HomeMarket = () => {
  return (
    <div className="h-full flex flex-col items-center justify-start mt-0 mb-10">
      {/* TODO: map over the nft cards */}
      <div className="flex flex-wrap space-x-12 mx-4 justify-center mb-10">
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
        <AssetCard />
      </div>
    </div>
  );
};

export default HomeMarket;

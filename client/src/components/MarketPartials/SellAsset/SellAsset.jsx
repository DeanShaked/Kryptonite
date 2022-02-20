import React from "react";

const SellAsset = () => {
  return (
    <>
      <h1>hey</h1>
      <div className="flex flex-wrap w-64 justify-center h-full">
        <input type="text" placeholder="Asset Name"></input>
        <input type="textarea" placeholder="Asset Description"></input>
        <input type="text" placeholder="Asset Price in ETH"></input>
        <input type="file" placeholder="Asset Name"></input>
        <button>Create New Asset</button>
      </div>
    </>
  );
};

export default SellAsset;

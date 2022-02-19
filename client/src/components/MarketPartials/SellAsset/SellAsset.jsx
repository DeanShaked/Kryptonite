import React, { Fragment } from "react";

const SellAsset = () => {
  return (
    <Fragment>
      <div className="flex flex-wrap w-64 justify-center">
        <input type="text" placeholder="Asset Name"></input>
        <input type="textarea" placeholder="Asset Description"></input>
        <input type="text" placeholder="Asset Price in ETH"></input>
        <input type="file" placeholder="Asset Name"></input>
        <button>Create New Asset</button>
      </div>
    </Fragment>
  );
};

export default SellAsset;

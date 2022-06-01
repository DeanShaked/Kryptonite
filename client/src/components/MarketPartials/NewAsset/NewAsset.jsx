// App
import React, { useState } from "react";

// External Libraries
import { Formik, Form } from "formik";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { create } from "ipfs-http-client";

// ABI and Contract address
import NFTMarketplace from "../../../abis/NFTMarket.json";
import { nftMarketPlaceContractAddress } from "../../../utils/constants";

// Components and Styles
import InputElement from "../../Reusable/InputElement";

const NewAsset = () => {
  // connect using a URL
  const client = create(new URL("http://127.0.0.1:5002"));
  return (
    <div className="h-[455px] --silver-border --gradient-blue-silver shadow-lg rounded-2xl w-[516px] mx-auto">
      <div className="flex flex-col justify-center items-center mt-4">
        <Formik
          initialValues={{
            name: "X Æ A-12",
            description: "Elon Musk's son name",
            price: "0.25",
            file: null,
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <InputElement
                value={values.name}
                name="name"
                onChange={handleChange}
                width={"96"}
                type="text"
                placeholder="Asset Name"
              />
              <InputElement
                value={values.description}
                name="description"
                onChange={handleChange}
                width={"96"}
                type="textarea"
                placeholder="Asset Descriptions"
              />
              <InputElement
                value={values.price}
                name="price"
                onChange={handleChange}
                width={"96"}
                type="text"
                placeholder="Asset Price in ETH"
              />
              <input
                type="file"
                name="file"
                className="text-white mt-8"
                onChange={handleChange}
              />
              {values.file !== null && <img src={values.file} alt="Asset" />}
              <div className="mt-5">
                <button
                  type="submit"
                  className="text-white --silver-border p-4 w-96 self-center hover:bg-grey "
                >
                  Create New Asset
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewAsset;

// App
import React from "react";

// External Libraries
import { Formik } from "formik";

// Components & Styles
import InputElement from "../../Reusable/InputElement";

const NewAsset = () => {
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
            <form onSubmit={handleSubmit}>
              <InputElement
                name="name"
                onChange={handleChange}
                width={"96"}
                type="text"
                placeholder="Asset Name"
              />
              <InputElement
                name="description"
                onChange={handleChange}
                width={"96"}
                type="textarea"
                placeholder="Asset Descriptions"
              />
              <InputElement
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
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewAsset;

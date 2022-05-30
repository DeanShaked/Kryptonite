// App
import React from "react";
import { Formik } from "formik";

// Components
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
            file: "",
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <>
              <div className="mt-8">
                <InputElement
                  value={values.name}
                  width={"96"}
                  type="text"
                  placeholder="Asset Name"
                />
              </div>
              <div className="mt-8">
                <InputElement
                  value={values.description}
                  width={"96"}
                  type="textarea"
                  placeholder="Asset Descriptions"
                />
              </div>
              <div className="mt-8">
                <InputElement
                  value={values.price}
                  width={"96"}
                  type="text"
                  placeholder="Asset Price in ETH"
                />
              </div>
              <input
                type="file"
                className="text-white mt-8"
                onChange={handleChange}
              />
              ;
              <div className="mt-5">
                <button
                  onSubmit={handleSubmit}
                  className="text-white --silver-border p-4 w-96 self-center hover:bg-grey "
                >
                  Create New Asset
                </button>
              </div>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewAsset;

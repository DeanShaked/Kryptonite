import React from "react";

// Components
import InputElement from "../../Reusable/InputElement";

// Fixture
import { inputs } from "../../../fixture/market-navbar.json";

const SellAsset = () => {
  return (
    <div className="h-[455px] --silver-border --gradient-blue-silver shadow-lg rounded-2xl w-[516px] mx-auto">
      <div className="flex flex-col justify-center items-center mt-4">
        {inputs.map((input) => {
          if (+input.id === 4) {
            return (
              <div className="mt-8">
                <input type={input.type} className="text-white mt-8" />;
              </div>
            );
          } else {
            return (
              <div className="mt-8" key={input.id}>
                <InputElement
                  key={input.id}
                  width={"96"}
                  type={input.type}
                  placeholder={input?.placeholder}
                />
              </div>
            );
          }
        })}
        <div className="mt-5">
          <button className="text-white --silver-border p-4 w-96 self-center">
            Create New Asset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellAsset;

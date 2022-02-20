import React from "react";
import InputElement from "../../Reusable/InputElement";

const SellAsset = () => {
  const inputs = [
    {
      id: "1",
      placeholder: "Asset Name",
      type: "text",
    },
    {
      id: "2",
      placeholder: "Asset Description",
      type: "textarea",
    },
    {
      id: "3",
      placeholder: "Asset Price in ETH",
      type: "text",
    },
    {
      id: "4",
      placeholder: "upload",
      type: "file",
    },
  ];
  return (
    <div className="h-[455px] flex justify-center">
      <div className="h-full w-96 flex flex-col p-10 --silver-border">
        {inputs.map((input) => {
          if (+input.id === 4) {
            return (
              <div className="mt-8">
                <input type={input.type} className="text-white mt-8" />;
              </div>
            );
          } else {
            return (
              <div className="mt-8">
                <InputElement
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

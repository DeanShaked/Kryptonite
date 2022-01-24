// App
import React from "react";

const MarketInfo = () => {
  return (
    <section>
      <div className="flex min-h-max justify-center items-center space-x-4 flex-row">
        <div className="bg-green w-64 h-96 flex items-center justify-center rounded-xl font-bold">
          <h1>Create an NFT</h1>
        </div>
        <div className="bg-white w-20 h-5 rounded-xl"></div>
        <div className="bg-green w-64 h-64 flex items-center justify-center rounded-xl font-bold">
          <h1>View your collection</h1>
        </div>
        <div className="bg-white w-20 h-5 rounded-xl"></div>
        <div className="bg-green w-64 h-96 flex items-center justify-center rounded-xl font-bold">
          <h1>Explore more collections</h1>
        </div>
      </div>
      <div className="flex flex-row justify-end w-full px-16">
        <button className="bg-green h-10 w-40 rounded-xl font-bold">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default MarketInfo;

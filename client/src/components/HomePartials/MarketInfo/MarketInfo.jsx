// Components
import ButtonElement from "../../Reusable/ButtonElement";

const MarketInfo = () => {
  return (
    <section className="h-screen flex justify-center flex-col">
      <div className="flex min-h-max justify-center items-center space-x-4 flex-row">
        <div className="bg-purple w-64 h-96 flex items-center justify-center rounded-xl font-bold">
          <h1>Create an NFT</h1>
        </div>
        <div className="bg-white w-20 h-5 rounded-xl"></div>
        <div className="bg-purple w-64 h-64 flex items-center justify-center rounded-xl font-bold">
          <h1>View your collection</h1>
        </div>
        <div className="bg-white w-20 h-5 rounded-xl"></div>
        <div className="bg-purple w-64 h-96 flex items-center justify-center rounded-xl font-bold">
          <h1>Explore more collections</h1>
        </div>
      </div>
      {/* <ButtonElement
        title={"Learn More"}
        backgroundColor={"green"}
        textColor={"grey"}
        onClick={() => {}}
      /> */}
    </section>
  );
};

export default MarketInfo;

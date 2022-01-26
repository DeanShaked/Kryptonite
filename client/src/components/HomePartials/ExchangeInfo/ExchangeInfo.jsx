// Components
import ButtonElement from "../../Reusable/ButtonElement";
import ExchangeInfoTable from "./ExchangeInfoTable";

const ExchangeInfo = () => {
  return (
    <div className="container mx-auto bg-transparent h-[700px] flex flex-col  xl:flex-row my-2">
      <div className="flex flex-col bg-black w-full h-full">
        <h1 className="font-bold text-6xl text-white">
          Trusted and secure bitcoin and crypto exchange{" "}
        </h1>
        <p className="font-medium text-[#CAC5CA]">
          Get Started with the easiest and most secure platform to buy, sell,
          trade, and earn cryptocurrencies
        </p>
        <ButtonElement
          title="Get Started"
          backgroundColor="green"
          textColor="white"
          onClick={{}}
        />
      </div>
      <div className="flex flex-rowbg-black w-full h-full">
        <h1>hey</h1>
        <h1>hey</h1>
        <h1>hey</h1>
      </div>
    </div>
  );
};

export default ExchangeInfo;

{
  /* <ButtonElement
    title={"Learn More"}
    textColor={"green"}
    backgroundColor={"grey"}
    onClick={() => {}}
  /> */
}

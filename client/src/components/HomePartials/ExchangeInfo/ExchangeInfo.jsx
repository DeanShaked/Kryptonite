import { RiWifiLine, RiVisaLine } from "react-icons/ri";

const ExchangeInfo = () => {
  return (
    <div className="container mx-auto bg-transparent h-[700px] flex flex-col  xl:flex-row my-2">
      <div className="flex flex-col w-full h-full px-28 py-20">
        <h1 className="font-bold text-6xl text-white">
          Trusted and secure bitcoin and crypto exchange{" "}
        </h1>
        <p className="font-medium text-[#CAC5CA] py-8">
          Get Started with the easiest and most secure platform to buy, sell,
          trade, and earn cryptocurrencies
        </p>
        <button className="--gradient-silver --silver-border w-56 h-14 rounded-md text-white font-semibold  mt-10">
          Get Started
        </button>
      </div>
      <div className="flex flex-col w-full h-full justify-center">
        <div className="--silver-border bg-greyish h-96 w-[240px] mx-auto translate-y-16 rounded-lg flex flex-col justify-between">
          <div className="flex flex-row justify-around mt-3">
            <p>Debit</p>
            <img src="" alt="logo" />
          </div>
          <RiWifiLine className="rotate-[90deg] -translate-y-10 h-8 w-6 ml-2" />
          <div className="h-[100px] bg-grey mx-0 rounded-b-md --gradient-light-silver">
            <p className="text-white ml-3 mt-3">Frank Smith</p>
            <RiVisaLine className="h-[80px] w-24 mb-3 ml-2 text-white" />
          </div>
        </div>
        <div className="--silver-border --gradient-blue-silver rounded-2xl h-96 w-[516px] mx-auto"></div>
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

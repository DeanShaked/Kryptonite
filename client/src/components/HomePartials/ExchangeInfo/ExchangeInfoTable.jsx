// Components
import BNBLogo from "../../../../assets/images/bnb-logo.svg";
import ETHLogo from "../../../../assets/images/eth-logo.svg";
import { IoSwapVerticalSharp } from "react-icons/io5";

const ExchangeInfoTable = () => {
  return (
    <div className="flex flex-col bg-grey h-72 w-1/2 rounded-2xl relative">
      <div className="flex flex-row bg-greyish h-1/2 justify-center items-center ">
        <img src={BNBLogo} className="h-10 w-10" />
        <h1 className="">{"BNB"}</h1>
      </div>
      <IoSwapVerticalSharp className=" cursor-pointer w-12 h-12 absolute top-[42%] right-[47%] rounded-xl bg-grey text-green" />

      {/* <div className="">
          <img src={ETHLogo} className="h-10 w-10" />
          <h1>{"ETH"}</h1>
        </div> */}
    </div>
  );
};

export default ExchangeInfoTable;

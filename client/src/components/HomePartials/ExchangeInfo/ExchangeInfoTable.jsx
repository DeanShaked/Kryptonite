// Components
import BNBLogo from "../../../../assets/images/bnb-logo.svg";
import ETHLogo from "../../../../assets/images/eth-logo.svg";

const ExchangeInfoTable = () => {
  return (
    <div className="flex flex-col bg-grey h-64 w-2/5 rounded-2xl">
      <div className="flex flex-col">
        <div className="flex flex-row bg-greyish h-32 justify-center align-center rounded-xl">
          <img src={BNBLogo} className="h-10 w-10" />
          <h1>{"BNB"}</h1>
        </div>

        {/* <div className="">
          <img src={ETHLogo} className="h-10 w-10" />
          <h1>{"ETH"}</h1>
        </div> */}
      </div>
    </div>
  );
};

export default ExchangeInfoTable;

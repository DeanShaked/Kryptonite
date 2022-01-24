import LearnMoreButton from "../../components/Reusable UI/LearnMoreButton";
import BNBLogo from "../../../assets/images/bnb-logo.svg";
import ETHLogo from "../../../assets/images/eth-logo.svg";

const ExchangeInfo = () => {
  return (
    <section>
      <div className="bg-green w-full my-5 flex space-y-4 justify-center items-center flex-col py-4">
        <div className="flex flex-col bg-grey h-64 w-2/5 rounded-2xl">
          <div className="w-10 h-10">
            <img src={BNBLogo} />
          </div>
          <div className="w-10 h-10">
            <img src={ETHLogo} />
          </div>
        </div>
        <LearnMoreButton textColor={"green"} backgroundColor={"grey"} />
      </div>
    </section>
  );
};

export default ExchangeInfo;

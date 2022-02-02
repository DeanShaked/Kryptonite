// React Reveal
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";
// Icons
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const CreditCard = () => {
  const { accountAddress } = useSelector((state) => state.accountSlice);
  const addressToDisplay = accountAddress?.toString().slice(0, 28) + "...";
  return (
    <div className="eth-card z-50 h-[200px] w-96 mx-auto translate-y-16 rounded-lg flex flex-col justify-between">
      <Fade delay={1000}>
        <div className="flex justify-between items-start mt-3">
          <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center ml-5">
            <SiEthereum fontSize={21} color="#fff" />
          </div>

          <BsInfoCircle fontSize={21} color="#fff" className="mr-5" />
        </div>
        <div className="h-16 ml-5 ">
          <div>
            {addressToDisplay !== undefined ? (
              <p className="text-white font-light text-sm">
                {addressToDisplay}
              </p>
            ) : (
              <p className="text-white font-light text-sm">Address</p>
            )}
            <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default CreditCard;

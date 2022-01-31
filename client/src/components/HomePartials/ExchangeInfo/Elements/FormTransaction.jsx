// App
import React, { useState } from "react";

// React Reveal
import Fade from "react-reveal/Fade";

// Components
import InputElement from "../../../Reusable/InputElement";
import ButtonElement from "../../../Reusable/ButtonElement";
import { getEthereumContract } from "../../../../utils/getEthereumContract";

const {ethereum} = window;

const initState = {
  addressTo: "",
  amount: "",
  keyword: "",
  message: "",
};

const FormTransaction = () => {
  const [stateTransaction, setStateTransaction] = useState(initState);

  const {accountAddress} = useSelector((state) => state.accountSlice);
  const 
  const updateState = (name, event) => {
    setStateTransaction((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  const onSend = () => {
    console.log(stateTransaction);
    if (!addressTo || !amount || !keyword || !message) {
      return;
    } else {
      // Getting the smart contract instance.
      const transactionContract = getEthereumContract();

      await ethereum.request( {
        method: "eth_sendTransaction",
        // params:[{from:accountAddress,to:addressTo,gas:}]
      })

      setStateTransaction(transactionContract);
    }
  };

  const [isError, setIsError] = useState(false);

  const { addressTo, amount, keyword, message } = stateTransaction;

  return (
    <Fade delay={500} duration={1000}>
      <div className=" --silver-border --gradient-blue-silver shadow-lg rounded-2xl h-[420px] w-[516px] mx-auto">
        <div className="flex flex-col h-[80%] justify-around items-center translate-y-20 w-full">
          <InputElement
            value={addressTo}
            placeholder={"Address To"}
            onChange={updateState.bind(this, "addressTo")}
            name={"addressTo"}
            isError={isError}
          />
          <InputElement
            value={amount}
            placeholder={"Amount"}
            onChange={updateState.bind(this, "amount")}
            name={"amount"}
            isError={isError}
          />
          <InputElement
            value={keyword}
            placeholder={"Keyword"}
            onChange={updateState.bind(this, "keyword")}
            name={"keyword"}
            isError={isError}
          />
          <InputElement
            value={message}
            placeholder={"Message"}
            onChange={updateState.bind(this, "message")}
            name={"message"}
            isError={isError}
          />
          <div className="--silver-border --gradient-silver outline-none border-none shadow-lg rounded-lg mb-3">
            <ButtonElement
              title={"Send Now"}
              backgroundColor={"green"}
              textColor={"white"}
              onClick={onSend}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default FormTransaction;

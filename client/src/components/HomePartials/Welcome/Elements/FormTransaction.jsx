// App
import React, { useState } from "react";

// Redux
import { useSelector } from "react-redux";
import {
  addToBlockchain,
  sendTransactions,
} from "../../../../redux/async/accountAsync";

// React Reveal
import Fade from "react-reveal/Fade";

// Components
import InputElement from "../../../Reusable/InputElement";
import ButtonElement from "../../../Reusable/ButtonElement";

const initState = {
  addressTo: "0xdb5f5f1ea2c4e051357048347a066313e265a9dd",
  amount: "0.001",
  keyword: "test",
  message: "test",
};

const FormTransaction = () => {
  const [stateTransaction, setStateTransaction] = useState(initState);
  const { currentAccount, transactionCount } = useSelector(
    (state) => state.accountSlice
  );
  const { addressTo, amount, keyword, message } = stateTransaction;

  const [isLoading, setIsLoading] = useState(false);

  const updateState = (name, event) => {
    setStateTransaction((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  const onSend = async () => {
    if (addressTo && amount && keyword && message) {
      try {
        // Initiating the send transaction proccess with our ethereum wallet provider. (We use Meta Mask)
        await sendTransactions({ currentAccount, addressTo, amount });
        // // We'll add the transaction to the blockchain and in return we'll get the transaction hash.
        const transactionHash = await addToBlockchain({
          addressTo,
          amount,
          keyword,
          message,
        });
        setIsLoading(true);
        await transactionHash.wait();
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const [isError, setIsError] = useState(false);

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

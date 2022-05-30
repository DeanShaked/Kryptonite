// App
import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  addToBlockchain,
  sendTransactions,
} from "../../../../redux/async/accountAsync";
import { setLoader } from "../../../../redux/reducers/accountSlice";

// React Reveal
import Fade from "react-reveal/Fade";

// Components
import InputElement from "../../../Reusable/InputElement";
import ButtonElement from "../../../Reusable/ButtonElement";
import { Loader } from "../../..";

const initState = {
  addressTo: "0x3f513bB285f243FFf50B2Ec6BDd906376d2Dd1f0",
  amount: "0.001",
  keyword: "",
  message: "",
};

const FormTransaction = () => {
  const dispatch = useDispatch();
  const [stateTransaction, setStateTransaction] = useState(initState);
  const { currentAccount, isLoading } = useSelector(
    (state) => state.accountSlice
  );
  const { addressTo, amount, keyword, message } = stateTransaction;

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
        const response = await sendTransactions({
          currentAccount,
          addressTo,
          amount,
        });

        // We'll add the transaction to the blockchain and in return we'll get the transaction hash.
        const transactionHash = await addToBlockchain({
          addressTo,
          amount,
          keyword,
          message,
        });
        dispatch(setLoader(true));
        transactionHash.wait();
        dispatch(setLoader(false));
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
            width="80"
            value={addressTo}
            placeholder={"Address To"}
            onChange={updateState.bind(this, "addressTo")}
            name={"addressTo"}
            isError={isError}
          />
          <InputElement
            width="80"
            value={amount}
            placeholder={"Amount"}
            onChange={updateState.bind(this, "amount")}
            name={"amount"}
            isError={isError}
          />
          <InputElement
            width="80"
            value={keyword}
            placeholder={"Keyword"}
            onChange={updateState.bind(this, "keyword")}
            name={"keyword"}
            isError={isError}
          />
          <InputElement
            width="80"
            value={message}
            placeholder={"Message"}
            onChange={updateState.bind(this, "message")}
            name={"message"}
            isError={isError}
          />
          {isLoading ? (
            <Loader />
          ) : (
            <div className="--silver-border --gradient-silver outline-none border-none shadow-lg rounded-lg mb-3">
              <ButtonElement
                title={"Send Now"}
                backgroundColor={"green"}
                textColor={"white"}
                onClick={onSend}
              />
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default FormTransaction;

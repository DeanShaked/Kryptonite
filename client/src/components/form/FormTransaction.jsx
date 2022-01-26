import React, { useState } from "react";

import InputElement from "../Reusable/InputElement";
import ButtonElement from "../Reusable/ButtonElement";

const initState = {
  addressTo: "",
  amount: "",
  keyword: "",
  message: "",
};

const FormTransaction = () => {
  const [stateTransaction, setStateTransaction] = useState(initState);

  const updateState = (name, event) => {
    setStateTransaction((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  const onSend = () => {
    console.log(stateTransaction);
    setStateTransaction(initState);
  };

  const { addressTo, amount, keyword, message } = stateTransaction;

  return (
    <div>
      <InputElement
        value={addressTo}
        placeholder={"Address To"}
        onChange={updateState.bind(this, "addressTo")}
        name={"addressTo"}
      />
      <InputElement
        value={amount}
        placeholder={"Amount"}
        onChange={updateState.bind(this, "amount")}
        name={"amount"}
      />
      <InputElement
        value={keyword}
        placeholder={"Keyword"}
        onChange={updateState.bind(this, "keyword")}
        name={"keyword"}
      />
      <InputElement
        value={message}
        placeholder={"Message"}
        onChange={updateState.bind(this, "message")}
        name={"message"}
      />
      <ButtonElement
        title={"Send Now"}
        backgroundColor={"green"}
        textColor={"white"}
        onClick={onSend}
      />
    </div>
  );
};

export default FormTransaction;

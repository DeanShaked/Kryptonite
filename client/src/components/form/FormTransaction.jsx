import React, { useState } from "react";

// Components
import InputElement from '../Reusable/InputElement'
import ButtonElement from '../Reusable/ButtonElement'

const initState = {
    addressTo: null,
    amount: null,
    keyword: null,
    message: null
},

const FormTransaction = () => {
    // const [transactionFormState, setTransactionFormState] = useState(initState);

    // const { addressTo, amount, keyword, message } = transactionFormState;

    // const updateState = () => {}

    return (
        <div>
            {/* <InputElement value={addressTo} placeholder={'Address To'} onChange={updateState} name={'addressTo'} />
            <InputElement value={amount} placeholder={'Amount'} onChange={updateState} name={'amount'} />
            <InputElement value={keyword} placeholder={'Keyword'} onChange={updateState} name={'keyword'} />
            <InputElement value={message} placeholder={'Message'} onChange={updateState} name={'message'} />
            <ButtonElement title={'Send Now'} backgroundColor={'green'} textColor={'white'} onClick={() => {}} /> */}
        </div>
    )
}

export default FormTransaction;
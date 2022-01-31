// App
import React, { useState } from 'react';
import { ethers } from 'ethers';

// Redux
import { useSelector } from 'react-redux';

// React Reveal
import Fade from 'react-reveal/Fade';

// Components
import InputElement from '../../../Reusable/InputElement';
import ButtonElement from '../../../Reusable/ButtonElement';
import { getEthereumContract } from '../../../../utils/getEthereumContract';

const { ethereum } = window;

const initState = {
  addressTo: '0xE6eAc49546CBD45B3C8DE0da4ed1B9351be74f84',
  amount: '0.001',
  keyword: 'test',
  message: 'test',
};

const FormTransaction = () => {
  const [stateTransaction, setStateTransaction] = useState(initState);
  const { accountAddress } = useSelector(state => state.accountSlice);
  const { addressTo, amount, keyword, message } = stateTransaction;

  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem('transactionCount') || 0
  );
  const [isLoading, setIsLoading] = useState(false);

  const updateState = (name, event) => {
    setStateTransaction(prevState => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  const onSend = async () => {
    if (addressTo && amount && keyword && message) {
      try {
        // Getting the smart contract instance.
        const transactionContract = getEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: accountAddress[0],
              to: addressTo,
              gas: '0x5208', // 21000 GWEI
              value: parsedAmount._hex, // 0.0001 ETH
            },
          ],
        });

        const transactionHash = await transactionContract.addToBlockchain(
          addressTo,
          parsedAmount,
          keyword,
          message
        );

        setIsLoading(true);
        await transactionHash.wait();
        setIsLoading(false);

        const transactionCount = transactionContract.getTransactionCount();
        setTransactionCount(transactionCount);
        setStateTransaction(transactionContract.toNumber());
      } catch (error) {
        console.error(error);
      }
    }
  };

  const [isError, setIsError] = useState(false);

  return (
    <Fade delay={500} duration={1000}>
      <div className=' --silver-border --gradient-blue-silver shadow-lg rounded-2xl h-[420px] w-[516px] mx-auto'>
        <div className='flex flex-col h-[80%] justify-around items-center translate-y-20 w-full'>
          <InputElement
            value={addressTo}
            placeholder={'Address To'}
            onChange={updateState.bind(this, 'addressTo')}
            name={'addressTo'}
            isError={isError}
          />
          <InputElement
            value={amount}
            placeholder={'Amount'}
            onChange={updateState.bind(this, 'amount')}
            name={'amount'}
            isError={isError}
          />
          <InputElement
            value={keyword}
            placeholder={'Keyword'}
            onChange={updateState.bind(this, 'keyword')}
            name={'keyword'}
            isError={isError}
          />
          <InputElement
            value={message}
            placeholder={'Message'}
            onChange={updateState.bind(this, 'message')}
            name={'message'}
            isError={isError}
          />
          <div className='--silver-border --gradient-silver outline-none border-none shadow-lg rounded-lg mb-3'>
            <ButtonElement
              title={'Send Now'}
              backgroundColor={'green'}
              textColor={'white'}
              onClick={onSend}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default FormTransaction;

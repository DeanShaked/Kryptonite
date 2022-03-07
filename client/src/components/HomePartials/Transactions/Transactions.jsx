// App
import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../../redux/actions/accountActions";

// Components
import TransactionsCard from "./TransactionsCard";

const Transactions = () => {
  const { currentAccount, avaiableTransactions } = useSelector(
    (state) => state.accountSlice
  );

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <Fade delay={200}>
          <div className="flex flex-wrap justify-center items-center mt-10">
            {avaiableTransactions?.map((transaction, i) => {
              return <TransactionsCard key={i} {...transaction} />;
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Transactions;

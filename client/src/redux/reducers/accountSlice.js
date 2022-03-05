import { createSlice } from "@reduxjs/toolkit";
import { getAllTransactions } from "../async/accountAsync";

const initialState = {
  currentAccount: null,
  transactionCount: null,
  transactions: null,
  isLoading: false,
  message: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      const availableTransactions = action.payload;
      const structuredTransactions = availableTransactions.map(
        (transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / 10 ** 18,
        })
      );
      state.avaiableTransactions = structuredTransactions;
    },
    setTransactionCount: (state, action) => {
      state.transactionCount = parseInt(action.payload, 16);
    },
    setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },

    setLoader: (state) => {
      state.isLoading = true;
    },
  },
});

export const {
  setLoader,
  setAvaiableTransactions,
  setCurrentAccount,
  setTransactionCount,
} = accountSlice.actions;

export default accountSlice.reducer;

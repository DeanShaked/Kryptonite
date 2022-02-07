import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: null,
  transactionCount: null,
  avaiableTransactions: null,
  isLoading: false,
  message: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAvaiableTransactions: (state, action) => {
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
  setcurrentAccount,
  setCurrentAccount,
  setTransactionCount,
} = accountSlice.actions;

export default accountSlice.reducer;

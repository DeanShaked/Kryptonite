import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: null,
  transactionCount: null,
  isLoading: false,
  message: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setTransactionCount: (state, action) => {
      state.transactionCount = action.payload;
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
  setcurrentAccount,
  setCurrentAccount,
  setTransactionCount,
} = accountSlice.actions;

export default accountSlice.reducer;

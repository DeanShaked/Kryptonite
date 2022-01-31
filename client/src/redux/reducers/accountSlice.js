import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountAddress: null,
  currentAccount: null,
  isLoading: false,
  message: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccountAddress: (state, action) => {
      state.accountAddress = action.payload;
    },
    setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
    setLoader: (state) => {
      state.isLoading = true;
    },
  },
});

export const { setLoader, setAccountAddress, setCurrentAccount } =
  accountSlice.actions;

export default accountSlice.reducer;

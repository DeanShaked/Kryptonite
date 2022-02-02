import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: null,
  currentAccount: null,
  isLoading: false,
  message: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setcurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
    setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
    setLoader: (state) => {
      state.isLoading = true;
    },
  },
});

export const { setLoader, setcurrentAccount, setCurrentAccount } =
  accountSlice.actions;

export default accountSlice.reducer;

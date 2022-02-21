import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marketItems: [] || null,
  isLoading: false,
};

export const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    setMarketItems: (state, action) => {
      state.marketItems = action.payload;
    },
    setLoader: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { setLoader, setMarketItems } = marketSlice.actions;

export default marketSlice.reducer;

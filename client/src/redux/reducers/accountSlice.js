import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rates: null,
  isLoading: false,
  message: null,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setRates: (state, action) => {
      state.rates = action.payload;
    },
    setLoader: state => {
      state.isLoading = true;
    },
  },
});

export const { setLoader, setRates } = accountSlice.actions;

export default accountSlice.reducer;

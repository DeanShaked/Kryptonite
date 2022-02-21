import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// Reducers
import accountSlice from "../reducers/accountSlice";
import marketSlice from "../reducers/marketSlice";

const rootReducer = combineReducers({
  accountSlice,
  marketSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

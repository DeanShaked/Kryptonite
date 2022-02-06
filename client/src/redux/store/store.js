import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// Reducers
import accountSlice from "../reducers/accountSlice";

const rootReducer = combineReducers({
  accountSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

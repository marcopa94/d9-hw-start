import { configureStore, combineReducers } from "@reduxjs/toolkit";
import preferiti from "../reducers/preferiti.js";

const unifiedReducer = combineReducers({
  preferiti: preferiti,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;

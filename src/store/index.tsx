import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { footerReducer, navbarReducer } from "./reducers/allReducers";

export const rootReducer = combineReducers({
  navbar: navbarReducer,
  footer: footerReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;

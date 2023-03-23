import { FooterAction, NavbarAction } from "../actions/interfaces";
import {
  FETCH_FOOTER_SUCCESS,
  FETCH_NAVBAR_SUCCESS,
} from "../constants/constants";
import { StoreStateFooter, StoreState } from "./interfaces";

const initialStateFooter: StoreStateFooter = {
  data: null,
};

export const footerReducer = (
  state = initialStateFooter,
  action: FooterAction
) => {
  switch (action.type) {
    case FETCH_FOOTER_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const initialState: StoreState = {
  data: null,
};

export const navbarReducer = (state = initialState, action: NavbarAction) => {
  switch (action.type) {
    case FETCH_NAVBAR_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

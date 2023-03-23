import {
  FETCH_NAVBAR_SUCCESS,
  FETCH_NAVBAR_FAILURE,
  FETCH_FOOTER_SUCCESS,
  FETCH_FOOTER_FAILURE,
} from "../constants/constants";
import { FooterData, NavbarItem } from "../interfaces";
import {
  FetchNavbarSuccessAction,
  FetchNavbarFailureAction,
  FetchFooterSuccessAction,
  FetchFooterFailureAction,
} from "./interfaces";

export const fetchNavbarSuccess = (
  data: NavbarItem[]
): FetchNavbarSuccessAction => {
  return {
    type: FETCH_NAVBAR_SUCCESS,
    payload: data,
  };
};

export const fetchNavbarFailure = (error: string): FetchNavbarFailureAction => {
  return {
    type: FETCH_NAVBAR_FAILURE,
    payload: error,
  };
};

export const fetchFooterSuccess = (
  data: FooterData | null
): FetchFooterSuccessAction => {
  return {
    type: FETCH_FOOTER_SUCCESS,
    payload: data,
  };
};

export const fetchFooterFailure = (error: string): FetchFooterFailureAction => {
  return {
    type: FETCH_FOOTER_FAILURE,
    payload: error,
  };
};

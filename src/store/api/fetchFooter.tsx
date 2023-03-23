import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {
  fetchFooterSuccess,
  fetchFooterFailure,
} from "../actions/actionCreators";
import { FooterAction } from "../actions/interfaces";
import { FETCH_FOOTER } from "../constants/constants";
import { FooterData } from "../interfaces";
import { StoreStateFooter } from "../reducers/interfaces";

export const fetchFooter = (): ThunkAction<
  Promise<void>,
  StoreStateFooter,
  undefined,
  FooterAction
> => {
  return async (
    dispatch: ThunkDispatch<StoreStateFooter, undefined, FooterAction>
  ) => {
    dispatch({ type: FETCH_FOOTER });
    try {
      const res = await axios.get<FooterData | null>(
        "https://acecmsmock.z6.web.core.windows.net/api/content/1"
      );
      const data = res.data;
      dispatch(fetchFooterSuccess(data));
    } catch (error: any) {
      console.error(error);
      dispatch(fetchFooterFailure(error.message));
    }
  };
};

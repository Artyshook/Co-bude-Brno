import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {
  fetchNavbarSuccess,
  fetchNavbarFailure,
} from "../actions/actionCreators";
import { NavbarAction } from "../actions/interfaces";
import { FETCH_NAVBAR } from "../constants/constants";
import { NavbarApiResponse } from "../interfaces";
import { StoreState } from "../reducers/interfaces";

export const fetchNavbar = (): ThunkAction<
  Promise<void>,
  StoreState,
  undefined,
  NavbarAction
> => {
  return async (
    dispatch: ThunkDispatch<StoreState, undefined, NavbarAction>
  ) => {
    dispatch({ type: FETCH_NAVBAR });
    try {
      const res = await axios.get<NavbarApiResponse>(
        "https://acecmsmock.z6.web.core.windows.net/api/content/2"
      );
      const response = res.data.data;
      dispatch(fetchNavbarSuccess(response.items));
    } catch (error: any) {
      console.error(error);
      dispatch(fetchNavbarFailure(error.message));
    }
  };
};

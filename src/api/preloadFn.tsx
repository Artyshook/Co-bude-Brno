import { ThunkDispatch } from "@reduxjs/toolkit";
import {
  fetchNavbarSuccess,
  fetchFooterSuccess,
} from "../store/actions/actionCreators";
import { AllActions } from "../store/actions/interfaces";
import { NavbarItem, FooterData } from "../store/interfaces";
import { StoreStateAll } from "../store/reducers/interfaces";

export const preloadFn = async (
  dispatch: ThunkDispatch<StoreStateAll, undefined, AllActions>
) => {
  const navbarData: NavbarItem[] = await fetch(
    "https://acecmsmock.z6.web.core.windows.net/api/content/2"
  ).then((response) => response.json());

  dispatch(fetchNavbarSuccess(navbarData));
  const footerData: FooterData = await fetch(
    "https://acecmsmock.z6.web.core.windows.net/api/content/1"
  ).then((response) => response.json());
  dispatch(fetchFooterSuccess(footerData));
};

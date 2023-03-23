import { FooterData, NavbarApiResponse } from "../interfaces";

export interface StoreState {
  data: NavbarApiResponse | null;
}

export interface StoreStateFooter {
  data: FooterData | null;
}

export interface StoreStateAll {
  navbar: StoreState;
  footer: StoreStateFooter;
}

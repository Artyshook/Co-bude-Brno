import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AllActions } from "../store/actions/interfaces";
import { StoreStateAll } from "../store/reducers/interfaces";

export default function usePreload(
  preloadFn: (
    dispatch: ThunkDispatch<StoreStateAll, undefined, AllActions>
  ) => Promise<void>
) {
  const dispatch =
    useDispatch<ThunkDispatch<StoreStateAll, undefined, AllActions>>();

  useEffect(() => {
    preloadFn(dispatch);
  }, [preloadFn, dispatch]);
}

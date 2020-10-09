import React, { useEffect, useReducer } from "react";
import SET_FULL_STATE from "./constant";
import middleware from "./middleware";
import storage from "./storage";

const usePersistedReducer = (key, reducer, initialState, init) => {
  const [state, dispatch] = useReducer(middleware(reducer), {}, () => {
    return storage.get(key, initialState, init);
  });

  useEffect(() => {
    window.addEventListener("storage", ({ key: evKey, newValue }) => {
      if (evKey === key) {
        dispatch({ type: SET_FULL_STATE, payload: JSON.parse(newValue) });
      }
    });
  });

  useEffect(() => {
    storage.set(key, state);
  }, [state]);

  return [state, dispatch];
};

export default usePersistedReducer;

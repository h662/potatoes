"use client";

import { ReactNode, createContext, useContext, useReducer } from "react";

const AppStateContext = createContext();
const AppDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACCOUNT":
      return {
        ...state,
        account: action.account,
      };
  }
};

export const useAppState = () => {
  const state = useContext(AppStateContext);

  if (!state) throw new Error("Cannot find AppProvider.");

  return state;
};

export const useAppDispatch = () => {
  const dispatch = useContext(AppDispatchContext);

  if (!dispatch) throw new Error("Cannot find AppProvider.");

  return dispatch;
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    account: "",
  });

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppProvider;

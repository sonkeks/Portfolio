import React, { createContext, useReducer, useEffect, Dispatch, ReactNode } from "react";
import { darkModeReducer, DarkModeState, DarkModeAction } from "./darkModeReducer";

interface DarkModeContextValue {
  state: DarkModeState;
  dispatch: Dispatch<DarkModeAction>;
}

const initialState: DarkModeState = { isDark: false };

export const DarkModeContext = createContext<DarkModeContextValue>({state: initialState, dispatch: () => {}});

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(darkModeReducer, { isDark: false });
  
  useEffect(() => {
    if (state.isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [state.isDark]);
  
  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

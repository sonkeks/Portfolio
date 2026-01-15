import React, { createContext, useReducer, useEffect, Dispatch, ReactNode } from "react";
import { darkModeReducer, DarkModeState, DarkModeAction } from "./darkModeReducer";

interface DarkModeContextValue {
  state: DarkModeState;
  dispatch: Dispatch<DarkModeAction>;
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const initialState: DarkModeState = { isDark: prefersDark };

export const DarkModeContext = createContext<DarkModeContextValue>({state: initialState, dispatch: () => {}});

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(darkModeReducer, initialState);
  
  useEffect(() => {
    document.body.classList.toggle("dark", state.isDark);
  }, [state.isDark]);
  
  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

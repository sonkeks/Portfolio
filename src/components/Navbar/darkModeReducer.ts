export interface DarkModeState {
  isDark: boolean;
}

export type DarkModeAction = { type: "TOGGLE" } | { type: "SET"; payload: boolean };

export const darkModeReducer = (state: DarkModeState, action: DarkModeAction): DarkModeState => {
  switch (action.type) {
    case "TOGGLE":
      return { isDark: !state.isDark };
    case "SET":
      return { isDark: action.payload };
    default:
      return state;
  }
};

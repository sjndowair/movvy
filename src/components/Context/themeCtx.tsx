import {
  ReactNode,
  createContext,
  useCallback,
  useReducer,
  useMemo,
} from "react";
import { FC } from "react";

interface IThemeState {
  isDark: boolean;
}

const initialState: IThemeState = {
  isDark: false,
};

type TThemeAction = {
  type: "TOGGLE_THEME";
};

export const ThemeContext = createContext<IThemeState | any>(initialState);
ThemeContext.displayName = "themeContext";

const themeReducer = (state: IThemeState, action: TThemeAction) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { isDark: !state.isDark };
    default:
      return state;
  }
};

export const ThemeModeProvider: FC<{
  children?: string | ReactNode | JSX.Element;
}> = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const toggleTheme = useCallback(
    () => dispatch({ type: "TOGGLE_THEME" }),
    [dispatch]
  );

  const value = useMemo(
    () => ({ ...state, toggleTheme }),
    [state, toggleTheme]
  );

  return <ThemeContext.Provider value={value} {...props} />;
};

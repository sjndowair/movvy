import {
  ReactNode,
  createContext,
  useCallback,
  useReducer,
  useMemo,
  useContext,
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

interface IUseThemeMode extends IThemeState {
  toggleTheme(): void;
}

export const useThemeMode = () => {
  const ctx = useContext<IUseThemeMode>(ThemeContext);

  if (!ctx) throw new Error("테마 컨텍스트의 프로바이더가 필요합니다.");

  return ctx;
};

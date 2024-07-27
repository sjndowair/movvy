import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useReducer,
  useContext,
} from "react";
import { IMovieListResponse } from "../types/movieList";

interface ICardState {
  title: string;
  fetchMovies: IMovieListResponse[];
}

const cardState: ICardState = {
  title: "Default Title",
  fetchMovies: [],
};

type TCardAction =
  | { type: "TITLE"; config: string }
  | { type: "FETCH_MOVIES"; config: IMovieListResponse[] };

export const CardContext = createContext<ICardState | any>(cardState);
CardContext.displayName = "cardContext";

const CardReducer = (state: ICardState, action: TCardAction) => {
  switch (action.type) {
    case "TITLE":
      return { ...state, title: action.config };
    case "FETCH_MOVIES":
      return { ...state, fetchMovies: action.config };
    default:
      return state;
  }
};

export const CardProvider: FC<{
  children?: string | ReactNode | JSX.Element;
}> = (props) => {
  const [state, dispatch] = useReducer(CardReducer, cardState);
  const setTitle = useCallback((title: string) => {
    dispatch({ type: "TITLE", config: title });
  }, []);
  const setFetchMovies = useCallback((fetchMovies: IMovieListResponse[]) => {
    dispatch({ type: "FETCH_MOVIES", config: fetchMovies });
  }, []);

  const value = useMemo(
    () => ({ ...state, setTitle, setFetchMovies }),
    [setTitle, setFetchMovies, state]
  );
  return <CardContext.Provider value={value} {...props} />;
};

interface IUseCardState extends ICardState {
  setTitle(title: string): void;
  setFetchMovies(fetchMovies: IMovieListResponse[]): void;
}

export const useCardStore = (): IUseCardState => {
  const ctx = useContext(CardContext);
  if (!ctx) throw new Error("MovieContext의 프로바이더가 필요합니다.");
  return ctx;
};

import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useReducer,
  useContext,
} from "react";
import { IMovie, IMovieListResponse } from "../types/movieList";
import { getNowPlayingMovieList } from "../apis/movieList.api";
interface ICardState {
  title: string;
  movies: IMovie[];
}

const cardState: ICardState = {
  title: "",
  movies: [],
};

type TCardAction =
  | { type: "SET_TITLE"; config: string }
  | { type: "SET_MOVIES"; config: IMovie[] };

export const CardContext = createContext<ICardState | any>(cardState);
CardContext.displayName = "cardContext";

const CardReducer = (state: ICardState, action: TCardAction) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.config };
    case "SET_MOVIES":
      return { ...state, fetchMovies: action.config };
    default:
      return state;
  }
};

export const CardProvider = ({
  children,
}: {
  children: ReactNode | string | JSX.Element;
}) => {
  const [state, dispatch] = useReducer(CardReducer, cardState);
  const setTitle = useCallback((title: string) => {
    dispatch({ type: "SET_TITLE", config: title });
  }, []);
  const setMovies = useCallback((fetchMovies: IMovie[]) => {
    dispatch({ type: "SET_MOVIES", config: fetchMovies });
  }, []);

  const fetchMovies = useCallback(async (): Promise<IMovieListResponse> => {
    const response = await getNowPlayingMovieList();
    setMovies(response.results);

    return response;
  }, [setMovies]);
  const value = useMemo(
    () => ({ ...state, setTitle, fetchMovies }),
    [setTitle, fetchMovies, state]
  );
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

interface IUseCardState extends ICardState {
  setTitle(title: string): void;
  fetchMovies: () => Promise<IMovieListResponse>;
}

export const useCardStore = (): IUseCardState => {
  const ctx = useContext(CardContext);
  if (!ctx) throw new Error("MovieContext의 프로바이더가 필요합니다.");
  return ctx;
};

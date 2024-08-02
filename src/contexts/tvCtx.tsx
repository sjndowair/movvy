import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useReducer,
  useContext,
} from "react";

import { ITvSerise, ITvSeriseResponse } from "../types/movieList";
import { getTvSeriesList } from "../apis/seriesList.api";
interface ICardState {
  title: string;
  tv: ITvSerise[];
}

const cardState: ICardState = {
  title: "",
  tv: [],
};

type TCardAction =
  | { type: "SET_TITLE"; config: string }
  | { type: "SET_TV"; config: ITvSerise[] };

export const CardContext = createContext<ICardState | any>(cardState);
CardContext.displayName = "cardContext";

const CardReducer = (state: ICardState, action: TCardAction) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.config };
    case "SET_TV":
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
  const setTv = useCallback((fetchTv: ITvSerise[]) => {
    dispatch({ type: "SET_TV", config: fetchTv });
  }, []);

  const fetchTv = useCallback(async (): Promise<ITvSeriseResponse> => {
    const response = await getTvSeriesList();
    setTv(response.results);

    return response;
  }, [setTv]);
  const value = useMemo(
    () => ({ ...state, setTitle, fetchTv: fetchTv }),
    [setTitle, fetchTv, state]
  );
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

interface IUseCardState extends ICardState {
  setTitle(title: string): void;
  fetchTv: () => Promise<ITvSeriseResponse>;
}

export const useCardStore = (): IUseCardState => {
  const ctx = useContext(CardContext);
  if (!ctx) throw new Error("TvContext의 프로바이더가 필요합니다.");
  return ctx;
};

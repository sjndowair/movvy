import { useQuery } from "@tanstack/react-query";
import { SERIES_LIST_QUERY_KEYS } from "../constants/query-keys.constant";
import {
  getAiringTodaySeriesList,
  getOnTheAirSeriesList,
  getPopularSeriesList,
  getTopRatedSeriesList,
} from "../apis/seriesList.api";
import { ITvSeriseResponse } from "../types/movieList";

export const seriesMatchService = {
  useAiringTodayList: () => {
    return useQuery<ITvSeriseResponse>({
      queryKey: [...SERIES_LIST_QUERY_KEYS.AIRING_TODAY],
      queryFn: getAiringTodaySeriesList,
    });
  },
  useOnTheAirList: () => {
    return useQuery<ITvSeriseResponse>({
      queryKey: [...SERIES_LIST_QUERY_KEYS.ON_THE_AIR],
      queryFn: getOnTheAirSeriesList,
    });
  },
  useTopRatedList: () => {
    return useQuery<ITvSeriseResponse>({
      queryKey: [...SERIES_LIST_QUERY_KEYS.TOP_RATED],
      queryFn: getTopRatedSeriesList,
    });
  },
  usePopularList: () => {
    return useQuery<ITvSeriseResponse>({
      queryKey: [...SERIES_LIST_QUERY_KEYS.POPULAR],
      queryFn: getPopularSeriesList,
    });
  },
};

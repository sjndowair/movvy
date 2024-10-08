import { useQuery } from "@tanstack/react-query";
import {
  getNowPlayingMovieList,
  getTopRatedMovieList,
  getUpComingMovieList,
  getPopularMovieList,
} from "../apis/movieList.api";
import { IMovieListResponse } from "../types/movieList";
import { MOVIE_LIST_QUERY_KEYS } from "../constants/query-keys.constant";

export const movieListService = {
  useNowPlayingMovieList: () =>
    useQuery<IMovieListResponse>({
      queryKey: [...MOVIE_LIST_QUERY_KEYS.NOW_PLAYING],
      queryFn: getNowPlayingMovieList,
    }),
  useTopRatedMovieList: () =>
    useQuery<IMovieListResponse>({
      queryKey: [...MOVIE_LIST_QUERY_KEYS.TOP_RATED],
      queryFn: getTopRatedMovieList,
    }),
  usePopularMovieList: () =>
    useQuery<IMovieListResponse>({
      queryKey: [...MOVIE_LIST_QUERY_KEYS.POPULAR],
      queryFn: getPopularMovieList,
    }),
  useUpcomingMovieList: () =>
    useQuery<IMovieListResponse>({
      queryKey: [...MOVIE_LIST_QUERY_KEYS.UPCOMING],
      queryFn: getUpComingMovieList,
    }),
};

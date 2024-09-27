import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMovieList } from "../apis/movieList.api";
import { IMovieListResponse } from "../types/movieList";

// 상수화시켜서 분리할 것
const movieKey = "movie";

const MOVIE_LIST_QUERY_KEYS = {
    NOW_PLAYING: [movieKey, "nowPlaying"],
    TOP_RATED: [movieKey, "topRated"],
    POPULAR: [movieKey, "popular"],
    UPCOMING: [movieKey, "upComing"],
};

export const movieListService = {
    useNowPlayingMovieList: () =>
        useQuery<IMovieListResponse>({
            queryKey: [...MOVIE_LIST_QUERY_KEYS.NOW_PLAYING],
            queryFn: getNowPlayingMovieList,
        }),
    useTopRatedMovieList: () =>
        useQuery<IMovieListResponse>({
            queryKey: [...MOVIE_LIST_QUERY_KEYS.TOP_RATED],
            queryFn: getNowPlayingMovieList,
        }),
    usePopularMovieList: () =>
        useQuery<IMovieListResponse>({
            queryKey: [...MOVIE_LIST_QUERY_KEYS.POPULAR],
            queryFn: getNowPlayingMovieList,
        }),
    useUpcomingMovieList: () =>
        useQuery<IMovieListResponse>({
            queryKey: [...MOVIE_LIST_QUERY_KEYS.UPCOMING],
            queryFn: getNowPlayingMovieList,
        }),
};

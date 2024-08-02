import {
  API_KEY,
  BASE_URL,
  REQUEST_INIT_OBJECT,
} from "../constants/api.constant";
import { IMovieListResponse } from "../types/movieList";

export const getNowPlayingMovieList = async (
  reqInit: RequestInit = REQUEST_INIT_OBJECT
): Promise<IMovieListResponse> => {
  const response = await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`,
    reqInit
  );

  return await response.json();
};

export const getTopRatedMovieList = async (
  reqInit: RequestInit = REQUEST_INIT_OBJECT
): Promise<IMovieListResponse> => {
  return await (
    await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`,
      reqInit
    )
  ).json();
};

export const getUpComingMovieList = async (
  reqInit: RequestInit = REQUEST_INIT_OBJECT
): Promise<IMovieListResponse> => {
  return await (
    await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`,
      reqInit
    )
  ).json();
};

export const getPopularMovieList = async (
  reqInit: RequestInit = REQUEST_INIT_OBJECT
): Promise<IMovieListResponse> => {
  return await (
    await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`,
      reqInit
    )
  ).json();
};

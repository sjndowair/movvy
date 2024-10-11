import {
  API_KEY,
  BASE_URL,
  REQUEST_INIT_OBJECT,
} from "../constants/api.constant";
import { ITvSeriseResponse } from "../types/movieList";

export const getAiringTodaySeriesList = async (
  reqInit: RequestInit = REQUEST_INIT_OBJECT
): Promise<ITvSeriseResponse> => {
  return await (
    await fetch(
      `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`,
      reqInit
    )
  ).json();
};
export const getOnTheAirSeriesList = async (
  reqInit: RequestInit = REQUEST_INIT_OBJECT
): Promise<ITvSeriseResponse> => {
  return await (
    await fetch(
      `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`,
      reqInit
    )
  ).json();
};
export const getPopularSeriesList = async (
  reqInit: RequestInit = REQUEST_INIT_OBJECT
): Promise<ITvSeriseResponse> => {
  return await (
    await fetch(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`,
      reqInit
    )
  ).json();
};

export const getTopRatedSeriesList = async (
  reqInit: RequestInit = REQUEST_INIT_OBJECT
): Promise<ITvSeriseResponse> => {
  return await (
    await fetch(
      `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`,
      reqInit
    )
  ).json();
};

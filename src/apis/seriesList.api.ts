import {
  API_KEY,
  BASE_URL,
  REQUEST_INIT_OBJECT,
} from "../constants/api.constant";
import { ITvSeriseResponse } from "../types/movieList";

export const getTvSeriesList = async (
  reqInit: RequestInit = REQUEST_INIT_OBJECT
): Promise<ITvSeriseResponse> => {
  return await (
    await fetch(
      `${BASE_URL}/tv/airing_today?api_key=${API_KEY}language=ko-KR&page=1&region=kr`,
      reqInit
    )
  ).json();
};

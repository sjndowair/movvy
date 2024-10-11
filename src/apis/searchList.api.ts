import {
  API_KEY,
  BASE_URL,
  REQUEST_INIT_OBJECT,
} from "../constants/api.constant";

import { ISearchResponce } from "../types/searchList";

export const getSearchList = async (
  keyword: string,
  reqInit: RequestInit = REQUEST_INIT_OBJECT
): Promise<ISearchResponce> => {
  const response = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&language=ko-KR&query=${keyword}&page=1`,
    reqInit
  );
  return await response.json();
};

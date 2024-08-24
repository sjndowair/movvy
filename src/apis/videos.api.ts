import { error } from "console";
import {
  API_KEY,
  BASE_URL,
  REQUEST_INIT_OBJECT,
} from "../constants/api.constant";
import { IVideosResponse } from "../types/videos";

export const getVideoByMovieId = async (
  ApiType: string,
  programId: string | number,
  reqInit: RequestInit = REQUEST_INIT_OBJECT
): Promise<IVideosResponse> => {
  const response = await fetch(
    `${BASE_URL}/${ApiType}/${programId}/videos?api_key=${API_KEY}&language=ko-KR`,
    reqInit
  );

  return await response.json();
};

import { Await } from "react-router-dom";
import {
  API_KEY,
  BASE_URL,
  REQUEST_INIT_OBJECT,
} from "../constants/api.constant";

import { IDetailListResponse } from "../types/detailList";
import { promises } from "dns";

export const getDetailList = async (
  type: string,
  Id: string | number,
  reqInit: RequestInit = REQUEST_INIT_OBJECT
): Promise<IDetailListResponse> => {
  return await (
    await fetch(
      `${BASE_URL}/${type}/${Id}?api_key=${API_KEY}&language=ko-KR`,
      reqInit
    )
  ).json();
};

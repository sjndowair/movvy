export const API_KEY = process.env.REACT_APP_API_KEY; //내가 보유한 고유의 key값이므로 그냥 깃헙에 올리지 않기
//process.env.REACT_APP_이름

export const BASE_URL = "https://api.themoviedb.org/3";

export const REQUEST_INIT_OBJECT: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

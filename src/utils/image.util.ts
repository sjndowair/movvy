const BASE_URL = "https://image.tmdb.org/t/p";

export const getImagePath = (id: string, format: string = "original") => {
  return `${BASE_URL}/${format}/${id}`;
};

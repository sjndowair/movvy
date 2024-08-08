const BASE_URL = "https://image.tmdb.org/t/p";

export const getImagePath = (
    id?: string | null,
    format: string = "original"
) => {
    if (!id) return "#";
    return `${BASE_URL}/${format}/${id}`;
};

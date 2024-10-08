const movieKey = "movie";
const seriesKey = "series";

export const MOVIE_LIST_QUERY_KEYS = {
  NOW_PLAYING: [movieKey, "nowPlaying"],
  TOP_RATED: [movieKey, "topRated"],
  POPULAR: [movieKey, "popular"],
  UPCOMING: [movieKey, "upComing"],
};

export const SERIES_LIST_QUERY_KEYS = {
  AIRING_TODAY: [seriesKey, "airingToday"],
  ON_THE_AIR: [seriesKey, "onTheAir"],
  POPULAR: [seriesKey, "popular"],
  TOP_RATED: [seriesKey, "topRated"],
};

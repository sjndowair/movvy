import { useMatch } from "react-router-dom";

export const usePages = () => {
  const getMovieDetailPage = () => {
    return "movie/:movieId";
  };

  const getSeriesDetailPage = () => {
    return "series/:seriesId";
  };

  const getSeriesPage = () => {
    return "series";
  };

  const getRootPage = () => {
    return "/";
  };

  const getSearchPage = () => {
    return "/search";
  };

  const getSearchDetailPage = () => {
    return "search/:type/:id";
  };

  const useRootPage = () => {
    return useMatch(getRootPage());
  };

  const useSearchDetailPage = () => {
    const match = useMatch(getSearchDetailPage());

    const isSearchIdPage = !!match?.params.id;

    return { match, isSearchIdPage };
  };

  const useMovieDetailPage = () => {
    const match = useMatch(getMovieDetailPage());

    const isMovieIdPage = !!match?.params.movieId;

    return { match, isMovieIdPage };
  };

  const useSeriesDetailPage = () => {
    const seriesMatch = useMatch(getSeriesDetailPage());

    const isSeriesPage = !!seriesMatch?.params.seriesId;

    return { seriesMatch, isSeriesPage };
  };

  return {
    getMovieDetailPage,
    getSeriesDetailPage,
    getSeriesPage,
    getRootPage,
    getSearchPage,
    useRootPage,
    useSeriesDetailPage,
    useSearchDetailPage,
    useMovieDetailPage,
  };
};

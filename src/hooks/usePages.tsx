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

    const useRootPage = () => {
        return useMatch(getRootPage());
    };

    const useMovieDetailPage = () => {
        const match = useMatch(getMovieDetailPage());

        const isMovieIdPage = !!match?.params.movieId;

        return { match, isMovieIdPage };
    };

    return {
        getMovieDetailPage,
        getSeriesDetailPage,
        getRootPage,
        getSearchPage,
        useRootPage,
        useMovieDetailPage,
    };
};

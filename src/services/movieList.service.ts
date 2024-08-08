import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants/query-keys.constants";
import { getNowPlayingMovieList } from "../apis/movieList.api";
import { MovieSeriesListItemClass } from "../classes/movieSeriesList";

export const movieListService = {
    useGetMovieListNowPlaying: () => {
        const queryKey = [...QUERY_KEYS.MOVIE.NOW_PLAYING];
        const queryFn = () => {
            return getNowPlayingMovieList().then((res) =>
                res?.results.map(
                    (it) => new MovieSeriesListItemClass({ movie: it })
                )
            );
        };

        return useQuery({
            queryKey: queryKey,
            queryFn: queryFn,
        });
    },
};

export const QUERY_KEYS = {
    MOVIE: {
        NOW_PLAYING: ["movie", "nowPlaying"],
        TOP_RATED: ["movie", "topRated"],
        POPULAR: ["movie", "popular"],
    },
};

/**
 * 
 * const { data: nowPlaying, isLoading: isLoadingNowPlaying } =
        useQuery<IMovieListResponse>({
            queryKey: ["movie", "nowPlaying"],
            queryFn: getNowPlayingMovieList,
        });
    console.log(isLoadingNowPlaying);

    const { data: topRated, isLoading: isLoadingTopRated } =
        useQuery<IMovieListResponse>({
            queryKey: ["movie", "topRated"],
            queryFn: getTopRatedMovieList,
        });

    const { data: popular, isLoading: isLoadingPopular } =
        useQuery<IMovieListResponse>({
            queryKey: ["movie", "popular"],
            queryFn: getPopularMovieList,
        });

    const { data: upComing, isLoading: isLodingUpComing } =
        useQuery<IMovieListResponse>({
            queryKey: ["movie", "upComing"],
            queryFn: getUpComingMovieList,
        });
 */

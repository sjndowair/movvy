import { useQuery } from "@tanstack/react-query";
import { getTvSeriesList } from "../apis/seriesList.api";
import { MovieSeriesListItemClass } from "../classes/movieSeriesList";

export const seriesListService = {
    useGetSeriesListNowPlaying: () => {
        const queryKey = ["series", "now"];
        const queryFn = () => {
            return getTvSeriesList().then((res) =>
                res?.results.map(
                    (it) => new MovieSeriesListItemClass({ series: it })
                )
            );
        };

        return useQuery({
            queryKey: queryKey,
            queryFn: queryFn,
        });
    },
};

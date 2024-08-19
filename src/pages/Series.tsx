import { useQuery } from "@tanstack/react-query";
import Layout from "../components/layout";
import ScrollButton from "../components/layout/ScrollBtn";
import MainCarouselComponent from "../components/pages/root/mainCarousel";
import CardCarouselComponent from "../components/common/cardCarousel";
import { CardCollectionBox } from "./style";
import {
  getAiringTodaySeriesList,
  getOnTheAirSeriesList,
  getPopularSeriesList,
  getTopRatedSeriesList,
} from "../apis/seriesList.api";
import { ITvSeriseResponse } from "../types/movieList";
import { useMatch } from "react-router-dom";

const Series = () => {
  const { data: airingToday, isLoading: isLoadingAiringToday } =
    useQuery<ITvSeriseResponse>({
      queryKey: ["series", "airingToday"],
      queryFn: getAiringTodaySeriesList,
    });

  const { data: onTheAir, isLoading: isLoadingOnTheAir } =
    useQuery<ITvSeriseResponse>({
      queryKey: ["series", "onTheAir"],
      queryFn: getOnTheAirSeriesList,
    });

  const { data: popular, isLoading: isLoadingPopular } =
    useQuery<ITvSeriseResponse>({
      queryKey: ["series", "popular"],
      queryFn: getPopularSeriesList,
    });

  const { data: topRated, isLoading: isLoadingTopRated } =
    useQuery<ITvSeriseResponse>({
      queryKey: ["series", "topRated"],
      queryFn: getTopRatedSeriesList,
    });

  const match = useMatch(`series/seriesId`);
  const airingTodayData = match?.params.seriesId
    ? airingToday?.results.find(
        (i) => i.id.toString() === match.params.seriesId
      )
    : null;

  const onTheAirData = match?.params.seriesId
    ? onTheAir?.results.find((i) => i.id.toString() === match.params.seriesId)
    : null;

  return (
    <>
      <Layout>
        <ScrollButton></ScrollButton>
        <MainCarouselComponent ITvSeries={onTheAir?.results} />
        <CardCollectionBox>
          <CardCarouselComponent
            ITvSerise={onTheAir?.results}
            title="On the air"
            ApiType="series"
          />
          <CardCarouselComponent
            ITvSerise={popular?.results}
            title="Popular"
            ApiType="series"
          />
          <CardCarouselComponent
            ITvSerise={airingToday?.results}
            title="Airing today"
            ApiType="series"
          />
          <CardCarouselComponent
            ITvSerise={topRated?.results}
            title="Top Rated"
            ApiType="series"
          />
        </CardCollectionBox>
      </Layout>
    </>
  );
};

export default Series;

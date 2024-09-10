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
import VideoPage from "../components/layout/video/Video";

const Series = () => {
  const seriesMatch = useMatch(`/series/:seriesId`);

  const { data: airingToday } = useQuery<ITvSeriseResponse>({
    queryKey: ["series", "airingToday"],
    queryFn: getAiringTodaySeriesList,
  });

  const { data: onTheAir } = useQuery<ITvSeriseResponse>({
    queryKey: ["series", "onTheAir"],
    queryFn: getOnTheAirSeriesList,
  });

  const { data: popular } = useQuery<ITvSeriseResponse>({
    queryKey: ["series", "popular"],
    queryFn: getPopularSeriesList,
  });

  const { data: topRated } = useQuery<ITvSeriseResponse>({
    queryKey: ["series", "topRated"],
    queryFn: getTopRatedSeriesList,
  });

  const airingTodayData = seriesMatch?.params.seriesId
    ? airingToday?.results.find(
        (it) => it.id.toString() === seriesMatch?.params.seriesId
      )
    : null;

  const onTheAirData = seriesMatch?.params.seriesId
    ? onTheAir?.results.find(
        (it) => it.id.toString() === seriesMatch?.params.seriesId
      )
    : null;

  const topRatedData = seriesMatch?.params.seriesId
    ? topRated?.results.find(
        (it) => it.id.toString() === seriesMatch?.params.seriesId
      )
    : null;

  const popularData = seriesMatch?.params.seriesId
    ? popular?.results.find(
        (it) => it.id.toString() === seriesMatch?.params.seriesId
      )
    : null;

  return (
    <>
      <Layout>
        <ScrollButton></ScrollButton>
        <MainCarouselComponent ApiType="series" ITvSeries={topRated?.results} />
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
        {seriesMatch ? (
          <VideoPage
            seriesTotalData={
              topRatedData || airingTodayData || onTheAirData || popularData
            }
            ApiType="series"
            programId={seriesMatch?.params.seriesId!}
          />
        ) : (
          <div>is Loading...</div>
        )}
      </Layout>
    </>
  );
};

export default Series;

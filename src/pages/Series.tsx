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
import { ITvSerise, ITvSeriseResponse } from "../types/movieList";

const Series = () => {
  const { data: airingToday, isLoading: isLoadingAiringToday } =
    useQuery<ITvSeriseResponse>({
      queryKey: ["series", "airingToday"],
      queryFn: getAiringTodaySeriesList,
    });

  const { data: onTheAir, isLoading: isLoadingOnTheAir } = useQuery({
    queryKey: ["series", "onTheAir"],
    queryFn: getOnTheAirSeriesList,
  });

  const { data: popular, isLoading: isLoadingPopular } = useQuery({
    queryKey: ["series", "popular"],
    queryFn: getPopularSeriesList,
  });
  console.log(popular);

  const { data: topRated, isLoading: isLoadingTopRated } = useQuery({
    queryKey: ["series", "topRated"],
    queryFn: getTopRatedSeriesList,
  });

  return (
    <>
      <Layout>
        <ScrollButton></ScrollButton>
        <MainCarouselComponent />
        <CardCollectionBox>
          <CardCarouselComponent
            IMovie={onTheAir?.results}
            title="On the air"
            ApiType="movie"
          />
          <CardCarouselComponent
            IMovie={popular?.results}
            title="Popular"
            ApiType="movie"
          />
          <CardCarouselComponent
            IMovie={airingToday?.results}
            title="Airing today"
            ApiType="movie"
          />
          <CardCarouselComponent
            IMovie={topRated?.results}
            title="Top Rated"
            ApiType="movie"
          />
        </CardCollectionBox>
      </Layout>
    </>
  );
};

export default Series;

import Layout from "../../components/common/layoutPage";
import MainCarouselComponent from "../../components/common/mainCarousal";
import CardCarouselComponent from "../../components/common/cardCarousel";
import { CardCollectionBox } from "../root/style";
import VideoPage from "../../components/layout/video";
import { useEffect, useState } from "react";
import { seriesMatchService } from "../../services/seriesList.service";
import { usePages } from "../../hooks/usePages";

const Series = () => {
  const [hiddenCard, setHiddenCard] = useState<number[]>([]);
  const [isVideoOpacity, setIsVideoOpactiy] = useState<boolean>(false);

  const { useSeriesDetailPage } = usePages();
  const { seriesMatch } = useSeriesDetailPage();

  const { data: airingTodayData } = seriesMatchService.useAiringTodayList();
  const { data: onTheAirData } = seriesMatchService.useOnTheAirList();
  const { data: topRatedData } = seriesMatchService.useTopRatedList();
  const { data: popularData } = seriesMatchService.usePopularList();

  const removeHiddenCard = (programId: number) => {
    setHiddenCard((pre) => pre.filter((id) => id !== programId));
  };

  const getVideoDetail = () => {
    if (seriesMatch?.params.seriesId) {
      return [
        ...(airingTodayData?.results ?? []),
        ...(onTheAirData?.results ?? []),
        ...(topRatedData?.results ?? []),
        ...(popularData?.results ?? []),
      ]?.find((i) => i.id?.toString() === seriesMatch?.params.seriesId);
    }
  };

  useEffect(() => {
    if (seriesMatch) {
      setIsVideoOpactiy(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsVideoOpactiy(false);
      setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 300);
    }
  }, [seriesMatch]);

  return (
    <Layout>
      <MainCarouselComponent ITvSeries={topRatedData?.results} />
      <CardCollectionBox>
        <CardCarouselComponent
          ITvSerise={topRatedData?.results}
          title="Top Rated"
          hiddenCard={hiddenCard}
          setHiddenCard={setHiddenCard}
        />
        <CardCarouselComponent
          ITvSerise={onTheAirData?.results}
          title="On the air"
          hiddenCard={hiddenCard}
          setHiddenCard={setHiddenCard}
        />
        <CardCarouselComponent
          ITvSerise={popularData?.results}
          title="Popular"
          hiddenCard={hiddenCard}
          setHiddenCard={setHiddenCard}
        />
        <CardCarouselComponent
          ITvSerise={airingTodayData?.results}
          title="Airing today"
          hiddenCard={hiddenCard}
          setHiddenCard={setHiddenCard}
        />
      </CardCollectionBox>
      {seriesMatch?.params.seriesId && (
        <VideoPage
          $videoVisible={isVideoOpacity}
          seriesTotalData={getVideoDetail()}
          programId={seriesMatch?.params.seriesId}
          removeHiddenCard={removeHiddenCard}
        />
      )}
    </Layout>
  );
};

export default Series;

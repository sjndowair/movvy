import { useEffect, useState } from "react";
import Layout from "../../components/common/layoutPage"; // 레이아웃 컴포넌트
import MainCarouselComponent from "../../components/common/mainCarousal";
import CardCarouselComponent from "../../components/common/cardCarousel"; // 카드 캐러셀 컴포넌트

import VideoPage from "../../components/layout/video";
import { CardCollectionBox } from "./style"; //스타일 컴포넌트
import { usePages } from "../../hooks/usePages";
import { movieListService } from "../../services/movieList.service";

const Home = () => {
  const [hiddenCard, setHiddenCard] = useState<number[]>([]);
  const [isVideoOpacity, setIsVideoOpacity] = useState<boolean>(false);

  const { useMovieDetailPage } = usePages();
  const { match } = useMovieDetailPage();

  const { data: nowPlayingData } = movieListService.useNowPlayingMovieList();
  const { data: topRatedData } = movieListService.useTopRatedMovieList();
  const { data: popularData } = movieListService.usePopularMovieList();
  const { data: upComingData } = movieListService.useUpcomingMovieList();

  const removeHiddenCard = (programId: number) => {
    setHiddenCard((pre) => pre.filter((id) => id !== programId));
  };

  const getVideoDetail = () => {
    if (match?.params.movieId) {
      return [
        ...(nowPlayingData?.results ?? []),
        ...(topRatedData?.results ?? []),
        ...(popularData?.results ?? []),
        ...(upComingData?.results ?? []),
      ]?.find((i) => i.id?.toString() === match?.params.movieId);
    }
  };

  useEffect(() => {
    if (match) {
      setIsVideoOpacity(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsVideoOpacity(false);
      setTimeout(() => {
        document.body.style.overflow = "initial";
      }, 300);
    }
  }, [match]);

  return (
    <Layout>
      <MainCarouselComponent IMovie={topRatedData?.results} />
      <CardCollectionBox>
        <CardCarouselComponent
          IMovie={topRatedData?.results}
          title="TOP RATED"
          hiddenCard={hiddenCard}
          setHiddenCard={setHiddenCard}
        />
        <CardCarouselComponent
          IMovie={nowPlayingData?.results}
          title="NOW PLAYING"
          hiddenCard={hiddenCard}
          setHiddenCard={setHiddenCard}
        />
        <CardCarouselComponent
          IMovie={popularData?.results}
          title="POPULAR"
          hiddenCard={hiddenCard}
          setHiddenCard={setHiddenCard}
        />
        <CardCarouselComponent
          IMovie={upComingData?.results}
          title="UP COMING"
          hiddenCard={hiddenCard}
          setHiddenCard={setHiddenCard}
        />
      </CardCollectionBox>
      {match?.params?.movieId && (
        <VideoPage
          $videoVisible={isVideoOpacity}
          movieTotalData={getVideoDetail()}
          programId={match.params.movieId}
          removeHiddenCard={removeHiddenCard}
        />
      )}
    </Layout>
  );
};

export default Home;

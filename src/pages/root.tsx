import { useEffect, useState } from "react";

import NoticeContainer from "../components/common/noticeContainer";
import Layout from "../components/layout";
import MainCarouselComponent from "../components/pages/root/mainCarousel";
import CardCarouselComponent from "../components/common/cardCarousel";

import {
  HeaderToggleMenu,
  TabletGnb,
  TabletGnbList,
} from "../components/pages/root/mainCarousel/style";

import { CARD_MENU } from "../constants/card-menus.constant";
import {
  getNowPlayingMovieList,
  getTopRatedMovieList,
} from "../apis/movieList.api";
import { getImagePath } from "../utils/image.util";
import { IMovie } from "../types/movieList";
import { Link } from "react-router-dom";
import { getVideoByMovieId } from "../apis/videos.api";
import { IVideo } from "../types/videos";
import { getVideoPath } from "../utils/video.util";
import { CardCollectionBox } from "./style";

const Home = () => {
  const [headerToggle, setHeaderToggle] = useState<boolean>(false);
  const [randomMovie, setRandomMovie] = useState<IMovie | null>(null);

  const handleToggleMenu = (): void => {
    setHeaderToggle((prev) => !prev);
  };

  useEffect(() => {
    getNowPlayingMovieList().then((res) => {
      if (res.results.length > 0) {
        const randomMovieIndex = Math.floor(Math.random() * res.results.length);
        setRandomMovie(res.results[randomMovieIndex]);
      }
    });
  }, []);

  return (
    <Layout headerToggle={headerToggle} iconClickRotate={handleToggleMenu}>
      <MainCarouselComponent />
      <CardCollectionBox>
        <CardCarouselComponent
          title="Now Playing"
          fetchMovies={getNowPlayingMovieList}
        ></CardCarouselComponent>
        <CardCarouselComponent
          title="Top Rated"
          fetchMovies={getTopRatedMovieList}
        />
      </CardCollectionBox>
      <NoticeContainer></NoticeContainer>
    </Layout>
  );
};

export default Home;

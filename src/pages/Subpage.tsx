import Header from "../components/common/header";
import CardCarouselComponent from "../components/common/cardCarousel";
import { useCardStore } from "../contexts/movieCtx";
import { useEffect } from "react";
import Footer from "../components/common/footer";
import {
  getNowPlayingMovieList,
  getTopRatedMovieList,
  getPopularMovieList,
} from "../apis/movieList.api";

const SubPage = () => {
  const { setTitle, fetchMovies } = useCardStore();

  useEffect(() => {
    setTitle("newTitlesubpage");
    fetchMovies();
  }, [setTitle, fetchMovies]);

  return (
    <>
      <Header />
      <CardCarouselComponent
        title="Now play"
        fetchMovies={getNowPlayingMovieList}
      />
      <CardCarouselComponent
        title="top Rate"
        fetchMovies={getTopRatedMovieList}
      />
      <CardCarouselComponent
        title="popular"
        fetchMovies={getPopularMovieList}
      />
      <CardCarouselComponent title="newTitle" fetchMovies={fetchMovies} />
      <CardCarouselComponent title="newTitle" fetchMovies={fetchMovies} />
      <Footer />
    </>
  );
};

export default SubPage;

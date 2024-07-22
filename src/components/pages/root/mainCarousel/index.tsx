import { useEffect, useState } from "react";
import { getNowPlayingMovieList } from "../../../../apis/movieList.api";
import { getImagePath } from "../../../../utils/image.util";
import { IMovie } from "../../../../types/movieList";
import {
  MainTitleImg,
  MainTitleName,
  BackgroundDimEffectBox,
  MainTitleOverView,
  MainTitle,
} from "../../../../pages/style";
import { ArrowInnerContainer, Slide, SlideContainer } from "./style";
import { LeftArrowButton, RightArrowButton } from "../../../Context/\bindex";

const MainCarouselComponent = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<boolean>(true);

  const prevClickSlideEvent = () => {
    setSlideDirection(false);
    setCurrentIndex((pre) => (pre === 0 ? movies?.length - 1 : pre - 1));
  };

  const nextClickSlideEvent = () => {
    setSlideDirection(true);
    setCurrentIndex((pre) => (pre === movies?.length - 1 ? 0 : pre + 1));
  };

  useEffect(() => {
    getNowPlayingMovieList().then((res) => {
      if (res?.results?.length) {
        setMovies(res?.results);
      }
    });
  }, []);

  useEffect(() => {
    const mainCarouselInterval = setInterval(() => {
      setSlideDirection(true);
      setCurrentIndex((pre) => (pre === movies?.length - 1 ? 0 : pre + 1));
    }, 10000);
    return () => clearInterval(mainCarouselInterval);
  }, [movies?.length]);

  if (!movies?.length) {
    return <h1>로딩중</h1>;
  }
  const currentMovies = movies[currentIndex]; //함수로 수정하기

  return (
    movies && (
      <>
        <SlideContainer>
          <Slide key={currentIndex} slideDirection={slideDirection}>
            <MainTitle>
              <BackgroundDimEffectBox />
              <MainTitleImg src={getImagePath(currentMovies.backdrop_path)} />
              <MainTitleName>{currentMovies.title}</MainTitleName>
              <MainTitleOverView>{currentMovies.overview}</MainTitleOverView>
            </MainTitle>
          </Slide>
        </SlideContainer>
        <ArrowInnerContainer>
          <button onClick={prevClickSlideEvent}>
            <LeftArrowButton />
          </button>
          <button onClick={nextClickSlideEvent}>
            <RightArrowButton />
          </button>
        </ArrowInnerContainer>
      </>
    )
  );
};

export default MainCarouselComponent;

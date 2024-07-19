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
import {
  ArrowInnerContainer,
  ArrowStyleContainer,
  NextSlideButton,
  PositionValueContainer,
  PrevSlideButton,
  Slide,
  SlideContainer,
} from "./style";

export const SlideLeftArrow: any = () => {
  return (
    <ArrowStyleContainer
      fill="rgb(50, 50, 50)"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </ArrowStyleContainer>
  );
};

export const SlideRightArrow: any = () => {
  return (
    <ArrowStyleContainer
      fill="rgb(50, 50, 50)"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </ArrowStyleContainer>
  );
};

const MainCarouselComponent = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<boolean>(true);

  const prevClickSlideEvent = () => {
    setSlideDirection(false);
    setCurrentIndex((pre) => (pre === 0 ? movies.length - 1 : pre - 1));
  };

  const nextClickSlideEvent = () => {
    setSlideDirection(true);
    setCurrentIndex((pre) => (pre === movies.length - 1 ? 0 : pre + 1));
  };

  useEffect(() => {
    getNowPlayingMovieList().then((res) => {
      if (res.results.length > 0) {
        setMovies(res.results);
      }
    });
  }, []);

  useEffect(() => {
    const mainCarouselInterval = setInterval(() => {
      setSlideDirection(true);
      setCurrentIndex((pre) => (pre === movies.length - 1 ? 0 : pre + 1));
    }, 10000);
    return () => clearInterval(mainCarouselInterval);
  }, [movies.length]);

  if (movies.length === 0) {
    return <p>로딩중</p>;
  }
  const currentMovies = movies[currentIndex];

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
        <PositionValueContainer>
          <ArrowInnerContainer>
            <PrevSlideButton onClick={prevClickSlideEvent}>
              <SlideLeftArrow />
            </PrevSlideButton>
            <NextSlideButton onClick={nextClickSlideEvent}>
              <SlideRightArrow />
            </NextSlideButton>
          </ArrowInnerContainer>
        </PositionValueContainer>
      </>
    )
  );
};

export default MainCarouselComponent;

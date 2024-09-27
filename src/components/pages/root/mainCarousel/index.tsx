import { useEffect, useState } from "react";
import { getImagePath } from "../../../../utils/image.util";
import { IMovie, ITvSerise } from "../../../../types/movieList";
import { useNavigate } from "react-router-dom";

import {
  ArrowInnerContainer,
  Slide,
  SlideContainer,
  MainTitle,
  MainTitleImg,
  MainTitleName,
  MainTitleOverView,
  ArrowButtonWrapper,
  BackgroundDimEffectBox,
} from "./style";
import { LeftArrowButton, RightArrowButton } from "../../../common/svg/index";

interface IMainCarousalProps {
  IMovie?: IMovie[];
  ITvSeries?: ITvSerise[];
}

const MainCarouselComponent = ({ IMovie, ITvSeries }: IMainCarousalProps) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<boolean>(false);

  const moveState = () => setSlideDirection((pre) => !pre);

  const getItemCount = () => {
    if (IMovie?.length && IMovie) {
      return IMovie.length;
    } else if (ITvSeries?.length && ITvSeries) {
      return ITvSeries.length;
    }
    return 0;
  };

  const prevClickSlideEvent = () => {
    setSlideDirection(false);
    moveState();
    setCurrentIndex((pre) => (pre === 0 ? getItemCount() - 1 : pre - 1));
  };

  const nextClickSlideEvent = () => {
    setSlideDirection(true);
    moveState();
    setCurrentIndex((pre) => (pre === getItemCount() - 1 ? 0 : pre + 1));
  };

  useEffect(() => {
    const mainCarouselInterval = setInterval(() => {
      setSlideDirection(false);
      setCurrentIndex((pre) => (pre === getItemCount() ? 0 : pre + 1));
    }, 10000);

    return () => clearInterval(mainCarouselInterval);
  }, [IMovie, ITvSeries]);

  const onMovieClick = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };
  const onSeriesClick = (seriesId: string) => {
    navigate(`/series/${seriesId}`);
  };

  return (
    <>
      <SlideContainer>
        {IMovie &&
          IMovie?.map((m, i) => (
            <Slide
              key={m.id}
              $slideDirection={slideDirection}
              $active={currentIndex === i}
              onClick={() => onMovieClick(m?.id?.toString())}
            >
              <MainTitle>
                <BackgroundDimEffectBox />
                <MainTitleImg $mainImg={getImagePath(m.backdrop_path)}>
                  <MainTitleName>{m.title}</MainTitleName>
                  <MainTitleOverView>{m.overview}</MainTitleOverView>
                </MainTitleImg>
              </MainTitle>
            </Slide>
          ))}
        {ITvSeries &&
          ITvSeries?.map((m, i) => (
            <Slide
              $slideDirection={slideDirection}
              key={m?.id}
              $active={currentIndex === i}
              onClick={() => onSeriesClick(m?.id.toString())}
            >
              <MainTitle>
                <BackgroundDimEffectBox />
                <MainTitleImg $mainImg={getImagePath(m.backdrop_path)}>
                  <MainTitleName>{m.name}</MainTitleName>
                  <MainTitleOverView>{m.overview}</MainTitleOverView>
                </MainTitleImg>
              </MainTitle>
            </Slide>
          ))}
      </SlideContainer>
      <ArrowInnerContainer>
        <ArrowButtonWrapper onClick={prevClickSlideEvent}>
          <LeftArrowButton />
        </ArrowButtonWrapper>
        <ArrowButtonWrapper onClick={nextClickSlideEvent}>
          <RightArrowButton />
        </ArrowButtonWrapper>
      </ArrowInnerContainer>
    </>
  );
};

export default MainCarouselComponent;

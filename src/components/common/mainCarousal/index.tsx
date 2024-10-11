import { useCallback, useEffect, useState } from "react";
import { getImagePath } from "../../../utils/image.util";

import { useNavigate } from "react-router-dom";
import {
  Slide,
  SlideContainer,
  MainTitle,
  MainTitleImg,
  MainTitleName,
  MainTitleOverView,
  BackgroundDimEffectBox,
} from "./style";
import {
  IMainCarousalProps,
  IOnClickProprs,
} from "../../../types/mainCarusalList";
import { useThemeMode } from "../../../contexts/themeCtx";

const MainCarouselComponent = ({ IMovie, ITvSeries }: IMainCarousalProps) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<boolean>(false);

  const { isDark } = useThemeMode();

  const isGetItemCount = useCallback(
    () => IMovie?.length || ITvSeries?.length || 0,
    [IMovie, ITvSeries]
  );

  const onPrevMove = useCallback(() => {
    setCurrentIndex((pre) => (!pre ? isGetItemCount() - 1 : pre - 1));
  }, [isGetItemCount]);

  const onNextMove = useCallback(() => {
    setCurrentIndex((pre) => (pre === isGetItemCount() - 1 ? 0 : pre + 1));
  }, [isGetItemCount]);

  useEffect(() => {
    const mainCarouselInterval = setInterval(() => {
      setSlideDirection(false);
      onNextMove();
    }, 10000);

    return () => clearInterval(mainCarouselInterval);
  }, [onNextMove]);

  const onClickItem = ({ movieId, seriesId }: IOnClickProprs) => {
    if (movieId) {
      navigate(`/movie/${movieId}`);
      return;
    }

    if (seriesId) {
      navigate(`/series/${seriesId}`);
      return;
    }
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
              onClick={() => onClickItem({ movieId: m?.id?.toString() })}
            >
              <MainTitle>
                <BackgroundDimEffectBox $isDark={isDark} />
                <MainTitleImg $mainImg={getImagePath(m.backdrop_path)}>
                  <MainTitleName>{m.title}</MainTitleName>
                  <MainTitleOverView>{m.overview}</MainTitleOverView>
                </MainTitleImg>
              </MainTitle>
            </Slide>
          ))}
        {ITvSeries &&
          ITvSeries.map((m, i) => (
            <Slide
              $slideDirection={slideDirection}
              key={m?.id}
              $active={currentIndex === i}
              onClick={() => onClickItem({ seriesId: m?.id?.toString() })}
            >
              <MainTitle>
                <BackgroundDimEffectBox $isDark={isDark} />
                <MainTitleImg $mainImg={getImagePath(m.backdrop_path)}>
                  <MainTitleName>{m.name}</MainTitleName>
                  <MainTitleOverView>{m.overview}</MainTitleOverView>
                </MainTitleImg>
              </MainTitle>
            </Slide>
          ))}
      </SlideContainer>
    </>
  );
};

export default MainCarouselComponent;

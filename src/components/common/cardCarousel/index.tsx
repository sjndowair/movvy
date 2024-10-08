import { useCallback, useEffect, useState } from "react";
import { getImagePath } from "../../../utils/image.util";
import {
  NextBtn,
  Slide,
  SlideContainer,
  PrevBtn,
  MoviesImgBox,
  CardImg,
  MoviesTitleName,
  TitleEncaseContainer,
  CardTitle,
  ArrowButtonContainer,
} from "./style";
import { RightArrowButton, LeftArrowButton } from "../svg/index";
import { useNavigate } from "react-router-dom";
import {
  ICardCarousalProps,
  IOnClickProprs,
} from "../../../types/cardCarousalList";
import { useThemeMode } from "../../../contexts/themeCtx";

const CardCarouselComponent = ({
  IMovie,
  ITvSerise,
  title,
  hiddenCard,
  setHiddenCard,
}: ICardCarousalProps) => {
  const [index, setIndex] = useState<number>(0);
  const [carousalEvent, setCarousalEvent] = useState<boolean>(true);

  const { isDark } = useThemeMode();
  const navigate = useNavigate();

  const isCarousalIndex = useCallback(() => {
    if (IMovie) return IMovie.length - 1;
    if (ITvSerise) return ITvSerise.length - 1;
    return 0;
  }, [IMovie, ITvSerise]);

  const isCarousalResizeNumber = () => {
    if (window?.innerWidth >= 1500) {
      return 7;
    } else if (window?.innerWidth >= 1300) {
      return 6;
    } else if (window?.innerWidth >= 1080) {
      return 5;
    } else if (window?.innerWidth >= 800) {
      return 4;
    }
    return 3;
  };
  const onMoveCarousal = () => {
    setCarousalEvent(true);
  };

  const onNextMove = () => {
    if (index < isCarousalIndex() - isCarousalResizeNumber() + 1) {
      onMoveCarousal();
      setIndex((pre) => pre + isCarousalResizeNumber());
    }
  };

  const onPrevMove = () => {
    if (index > 0) {
      onMoveCarousal();
      setIndex((pre) => pre - isCarousalResizeNumber());
    }
  };

  useEffect(() => {
    const isWindowResize = () => {
      setIndex(isCarousalResizeNumber()!);
    };

    window?.addEventListener("resize", isWindowResize);

    return () => window?.removeEventListener("resize", isWindowResize);
  }, [isCarousalResizeNumber()]);

  const onClickItem = ({ seriesId, movieId }: IOnClickProprs) => {
    if (movieId) {
      navigate(`/movie/${movieId}`);
      setHiddenCard((pre) => [...pre, Number(movieId)]);
      return;
    }
    if (seriesId) {
      navigate(`/series/${seriesId}`);
      setHiddenCard((pre) => [...pre, Number(seriesId)]);
      return;
    }
  };

  return (
    <>
      <TitleEncaseContainer>
        <CardTitle>{title}</CardTitle>
        <ArrowButtonContainer>
          <PrevBtn onClick={onPrevMove}>
            <LeftArrowButton />
          </PrevBtn>
          <NextBtn onClick={onNextMove}>
            <RightArrowButton />
          </NextBtn>
        </ArrowButtonContainer>
        <SlideContainer>
          {IMovie &&
            IMovie?.map((m) => (
              <Slide
                key={m.id}
                $hiddenCard={hiddenCard.includes(m.id)}
                $index={index}
                onClick={() => onClickItem({ movieId: m?.id.toString() })}
                $cards={IMovie?.length}
                $reaction={isCarousalResizeNumber()!}
              >
                <MoviesImgBox $isDark={isDark}>
                  <CardImg src={getImagePath(m.poster_path)} alt={m.overview} />
                  <MoviesTitleName>{m.title}</MoviesTitleName>
                </MoviesImgBox>
              </Slide>
            ))}
          {ITvSerise &&
            ITvSerise?.map((m) => (
              <Slide
                $hiddenCard={hiddenCard.includes(m.id)}
                key={m.id}
                $index={index}
                $cards={ITvSerise?.length}
                onClick={() => onClickItem({ seriesId: m?.id.toString() })}
                $reaction={isCarousalResizeNumber()!}
              >
                <MoviesImgBox $isDark={isDark}>
                  <CardImg src={getImagePath(m.poster_path)} alt={m.overview} />
                  <MoviesTitleName>{m.name}</MoviesTitleName>
                </MoviesImgBox>
              </Slide>
            ))}
        </SlideContainer>
      </TitleEncaseContainer>
    </>
  );
};
export default CardCarouselComponent;

import { useEffect, useState } from "react";
import { getImagePath } from "../../../utils/image.util";
import { IMovie } from "../../../types/movieList";
import { ITvSerise } from "../../../types/movieList";
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
import { mediaSize } from "../../Theme/theme";

type TApiType = "movie" | "series";

interface ISlideProps {
  IMovie?: IMovie[];
  ITvSerise?: ITvSerise[];
  ApiType?: TApiType;
  title?: string;
  name?: string;
}

const CardCarouselComponent = ({
  IMovie,
  ITvSerise,
  ApiType,
  title,
  name,
}: ISlideProps) => {
  const [index, setIndex] = useState<number>(0);
  const [move, setMove] = useState<boolean>(false);
  const [carousalEvent, setCarousalEvent] = useState<boolean>(true);

  const navigate = useNavigate();

  const onMovieClick = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };
  const onSeriesClick = (seriesId: string) => {
    navigate(`/series/${seriesId}`);
  };

  const programIndex = () => {
    if (IMovie && IMovie.length) {
      return IMovie.length - 1;
    } else if (ITvSerise && ITvSerise.length) {
      return ITvSerise.length - 1;
    } else {
      return 0;
    }
  };

  const moveState = () => setMove((pre) => !pre);

  const inMoveCollectFunction = () => {
    setCarousalEvent(true);
    moveState();
  };

  const screenReactionType = () => {
    if (mediaSize.pc) {
      return 6;
    } else if (mediaSize.tablet) {
      return 5;
    } else if (mediaSize.mobile) return 4;
    return 6;
  };

  const nextMove = () => {
    if (index < programIndex() - screenReactionType() + 1) {
      inMoveCollectFunction();
      setIndex((pre) => pre + screenReactionType());
    }
  };

  const prevMove = () => {
    if (index > 0) {
      inMoveCollectFunction();
      setIndex((pre) => pre - screenReactionType());
    }
  };

  return (
    <>
      <TitleEncaseContainer>
        <CardTitle>{title}</CardTitle>
        <ArrowButtonContainer>
          <PrevBtn onClick={prevMove}>
            <LeftArrowButton />
          </PrevBtn>
          <NextBtn onClick={nextMove}>
            <RightArrowButton />
          </NextBtn>
        </ArrowButtonContainer>
        <SlideContainer>
          {IMovie &&
            IMovie?.map((m) => (
              <Slide
                key={m.id}
                $index={index}
                onClick={() => onMovieClick(m.id.toString())}
                $cards={IMovie?.length}
                $reaction={screenReactionType()}
              >
                <MoviesImgBox>
                  <CardImg src={getImagePath(m.poster_path)} />
                  <MoviesTitleName>{m.title}</MoviesTitleName>
                </MoviesImgBox>
              </Slide>
            ))}
          {ITvSerise &&
            ITvSerise?.map((m) => (
              <Slide
                key={m.id}
                $index={index}
                $cards={ITvSerise?.length}
                onClick={() => onSeriesClick(m.id.toString())}
                $reaction={screenReactionType()}
              >
                <MoviesImgBox>
                  <CardImg src={getImagePath(m.poster_path)} />
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

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
  isMatch?: any;
}

const CardCarouselComponent = ({
  IMovie,
  ITvSerise,
  ApiType,
  isMatch,
  title,
  name,
}: ISlideProps) => {
  const [move, setMove] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [carousalEvent, setCarousalEvent] = useState<boolean>(true);
  const [hiddenCard, setHiddenCard] = useState<number[]>([]);

  const navigate = useNavigate();

  const onMovieClick = (movieId: string) => {
    navigate(`/movie/${movieId}`);
    setHiddenCard((pre) => [...pre, Number(movieId)]);
  };
  const onSeriesClick = (seriesId: string) => {
    navigate(`/series/${seriesId}`);
    setHiddenCard((pre) => [...pre, Number(seriesId)]);
  };

  useEffect(() => {
    return () => {
      setHiddenCard([]);
    };
  }, []);

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
    if (window.innerWidth >= 1500) {
      return 7;
    } else if (window.innerWidth >= 1200) {
      return 6;
    } else if (window.innerWidth >= 800) {
      return 5;
    } else if (window.innerWidth >= 600) return 3;
    else {
      return 2.5;
    }
  };

  useEffect(() => {
    const carousalResize = () => {
      setIndex(screenReactionType());
    };

    window.addEventListener("resize", carousalResize);

    return () => window.removeEventListener("resize", carousalResize);
  }, []);

  const nextMove = () => {
    if (index < programIndex() - screenReactionType()! + 1) {
      inMoveCollectFunction();
      setIndex((pre) => pre + screenReactionType()!);
    }
  };

  const prevMove = () => {
    if (index > 0) {
      inMoveCollectFunction();
      setIndex((pre) => pre - screenReactionType()!);
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
                hiddenCard={hiddenCard.includes(m.id)}
                $index={index}
                onClick={() => onMovieClick(m.id.toString())}
                $cards={IMovie?.length}
                $reaction={screenReactionType()!}
              >
                <MoviesImgBox>
                  <CardImg src={getImagePath(m.poster_path)} alt={m.overview} />
                  <MoviesTitleName>{m.title}</MoviesTitleName>
                </MoviesImgBox>
              </Slide>
            ))}
          {ITvSerise &&
            ITvSerise?.map((m) => (
              <Slide
                hiddenCard={hiddenCard.includes(m.id)}
                key={m.id}
                $index={index}
                $cards={ITvSerise?.length}
                onClick={() => onSeriesClick(m.id.toString())}
                $reaction={screenReactionType()!}
              >
                <MoviesImgBox>
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

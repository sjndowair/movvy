import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getImagePath } from "../../../utils/image.util";
import { IMovie, IMovieListResponse } from "../../../types/movieList";
import { ITvSerise, ITvSeriseResponse } from "../../../types/movieList";
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
  HoverDirectionContainer,
} from "./style";
import { RightArrowButton, LeftArrowButton } from "../svg/index";
import { Console } from "console";
import { useNavigate } from "react-router-dom";

type TApiType = "movie" | "series";

interface ISlideProps {
  IMovie?: IMovie[];
  ITvSerise?: ITvSerise[];
  ApiType?: TApiType;
  title: string;
}

let moveCarculater: number;

const CardCarouselComponent = ({
  IMovie,
  ITvSerise,
  ApiType,
  title,
}: ISlideProps) => {
  console.log(IMovie);
  const [index, setIndex] = useState<number>(0);
  const [move, setMove] = useState<boolean>(false);
  const [carousalEvent, setCarousalEvent] = useState<boolean>(true);

  const navigation = useNavigate();
  const urlDestination = () => {
    navigation(`${ApiType}/${title}`);
    return;
  };

  const isArray = (item: any): item is any[] => Array.isArray(item);

  const programIndex = () => {
    if (isArray(IMovie) && IMovie.length) {
      moveCarculater = Math.floor(IMovie.length) - 1;
    } else if (isArray(ITvSerise) && ITvSerise.length) {
      moveCarculater = Math.floor(ITvSerise.length) - 1;
    } else {
      return -1;
    }

    return moveCarculater;
  };

  const moveState = () => setMove((pre) => !pre);

  const inMoveCollectFunction = () => {
    setCarousalEvent(true);
    moveState();
  };

  const nextMove = () => {
    inMoveCollectFunction();
    setIndex((pre) => (pre === programIndex() ? 0 : pre + 1));
  };

  const prevMove = () => {
    inMoveCollectFunction();
    setIndex((pre) => (pre === 0 ? programIndex() : pre - 1));
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
          {IMovie
            ? IMovie?.map((m, i) => (
                <Slide key={m.id}>
                  <MoviesImgBox>
                    <HoverDirectionContainer>
                      <span>{m.title}</span>
                      <span>지금 보러가기</span>
                    </HoverDirectionContainer>
                    <CardImg src={getImagePath(m.poster_path)} />
                    <MoviesTitleName>{m.title}</MoviesTitleName>
                  </MoviesImgBox>
                </Slide>
              ))
            : ITvSerise?.map((m, i) => (
                <Slide key={m.id}>
                  <MoviesImgBox>
                    <HoverDirectionContainer>
                      <span>{m.name}</span>
                      <span>지금 보러가기</span>
                    </HoverDirectionContainer>
                    <CardImg src={getImagePath(m.poster_path!)} />
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

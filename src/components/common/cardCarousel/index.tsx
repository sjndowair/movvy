// CardCarouselComponent.tsx
import { useEffect, useState } from "react";
import { getImagePath } from "../../../utils/image.util";
import { IMovie, IMovieListResponse } from "../../../types/movieList";
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
  SvgStyleSheet,
  ArrowButtonContainer,
  HoverDirectionContainer,
} from "./style";

interface CardCarouselProps {
  title: string;
  fetchMovies: () => Promise<IMovieListResponse>;
}

export const CardPrevArrow: any = () => {
  return (
    <SvgStyleSheet
      fill="rgb(255, 111, 15)"
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
    </SvgStyleSheet>
  );
};

export const CardNextArrow: any = () => {
  return (
    <SvgStyleSheet
      fill="rgb(255, 111, 15)"
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
    </SvgStyleSheet>
  );
};

const CardCarouselComponent = ({ title, fetchMovies }: CardCarouselProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4;

  const prevClickSlideEvent = () => {
    if (currentIndex > 0) {
      setCurrentIndex((pre) => pre - visibleCards);
    }
  };

  const nextClickSlideEvent = () => {
    if (currentIndex < movies.length - visibleCards) {
      setCurrentIndex((pre) => pre + visibleCards);
    }
  };

  useEffect(() => {
    fetchMovies().then((res) => {
      if (res.results.length > 0) {
        setMovies(res.results);
      } else {
        console.log("에러이니 res 다시확인");
      }
    });
  }, [fetchMovies]);

  if (movies.length === 0) {
    return <p>Now Loading...</p>;
  }

  return (
    <>
      <TitleEncaseContainer>
        <CardTitle>{title}</CardTitle>
        <ArrowButtonContainer>
          <PrevBtn onClick={prevClickSlideEvent}>
            <CardPrevArrow />
          </PrevBtn>
          <NextBtn onClick={nextClickSlideEvent}>
            <CardNextArrow />
          </NextBtn>
        </ArrowButtonContainer>
        <SlideContainer>
          <Slide currentIndex={currentIndex} totalCards={movies.length}>
            {movies.map((m, i) => (
              <>
                <MoviesImgBox key={i}>
                  <HoverDirectionContainer>
                    <span>{m.title}</span>
                    <span>지금 보러가기</span>
                  </HoverDirectionContainer>
                  <CardImg src={getImagePath(m.backdrop_path)} />
                  <MoviesTitleName>{m.title}</MoviesTitleName>
                </MoviesImgBox>
              </>
            ))}
          </Slide>
        </SlideContainer>
      </TitleEncaseContainer>
    </>
  );
};

export default CardCarouselComponent;

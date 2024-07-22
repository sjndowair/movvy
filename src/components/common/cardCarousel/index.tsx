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
  ArrowButtonContainer,
  HoverDirectionContainer,
} from "./style";
import { RightArrowButton, LeftArrowButton } from "../../Context/\bindex";

interface CardCarouselProps {
  title: string;
  fetchMovies: () => Promise<IMovieListResponse>;
}

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
    if (currentIndex < movies?.length - visibleCards) {
      setCurrentIndex((pre) => pre + visibleCards);
    }
  };

  useEffect(() => {
    fetchMovies().then((res) => {
      if (res?.results?.length > 0) {
        setMovies(res?.results);
      }
    });
  }, [fetchMovies]);

  if (!movies?.length) {
    return <p>Now Loading...</p>;
  }

  return (
    <>
      <TitleEncaseContainer>
        <CardTitle>{title}</CardTitle>
        <ArrowButtonContainer>
          <PrevBtn onClick={prevClickSlideEvent}>
            <LeftArrowButton />
          </PrevBtn>
          <NextBtn onClick={nextClickSlideEvent}>
            <RightArrowButton />
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

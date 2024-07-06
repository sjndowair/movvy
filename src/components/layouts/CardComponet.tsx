import React, { useCallback, useRef, useState } from "react";
import { cardData } from "../Context/cardCtx";
import { H2 } from "../styles/contain-style";
import {
  CardContainer,
  Button,
  Slide,
  SlideWrapper,
  Card,
  Prev,
  Coordinates,
  Next,
  More,
  Intro,
} from "../styles/card-style";
import { NextBtn, PrevBtn } from "../styles/contain-style";

interface CardComponetsProps {
  title: string;
}
const CardComponent: React.FC<CardComponetsProps> = ({ title }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const cardsPerSlide: number = 5;

  const nextSlide = useCallback(() => {
    setSlideIndex(
      (prevIndex) =>
        (prevIndex + 10) % Math.floor(cardData.length / cardsPerSlide)
    );
  }, [cardsPerSlide]);

  const prevSlide = useCallback(() => {
    setSlideIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.floor(cardData.length / cardsPerSlide)) %
        Math.floor(cardData.length / cardsPerSlide)
    );
  }, [cardsPerSlide]);

  return (
    <section>
      <Coordinates>
        <SlideWrapper>
          <Intro>
            <H2>{title}</H2>
            <More>더보기</More>
          </Intro>
          <CardContainer slideIndex={slideIndex}>
            {cardData.map((card, index) => (
              <Slide key={index}>
                {card.ImageContain.map((image, imgIndex) => (
                  <picture key={imgIndex}>
                    <source srcSet={image.webSrcSet} type="image/webp" />
                    <Card src={image.imgSrc} alt={image.alt} />
                  </picture>
                ))}
              </Slide>
            ))}
          </CardContainer>
        </SlideWrapper>
        <Prev onClick={prevSlide}></Prev>
        <Next onClick={nextSlide}></Next>
      </Coordinates>
    </section>
  );
};

export default CardComponent;

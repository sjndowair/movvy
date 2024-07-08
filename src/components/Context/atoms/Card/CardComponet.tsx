import React, { useCallback, useState, useEffect } from "react";
import { cardData } from "../../../../DummyData/cardData";
import { H2 } from "../Slider/contain-style";
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
} from "./card-style";

interface CardComponentProps {
  title: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const calculateCardsPerSlide = () => {
    if (window.innerWidth >= 768) {
      return 5;
    } else if (window.innerWidth >= 480) {
      return 3;
    } else {
      return 1;
    }
  };
  const [cardsPerSlide, setCardsPerSlide] = useState<number>(
    calculateCardsPerSlide()
  );

  useEffect(() => {
    function handleResize() {
      setCardsPerSlide(calculateCardsPerSlide());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalSlides: number = Math.ceil(cardData.length / cardsPerSlide);

  const prevSlide = useCallback(() => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setSlideIndex((prevIndex) => {
      if (prevIndex === totalSlides - 1) {
        return 0; // Reset to the 0th index
      } else {
        return prevIndex + 1;
      }
    });
  }, [totalSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section>
      <Coordinates>
        <SlideWrapper>
          <Intro>
            <H2>{title}</H2>
            <More>더보기</More>
          </Intro>
          <CardContainer
            className="card-container"
            slideIndex={slideIndex}
            totalSlides={totalSlides}
          >
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
        <Prev
          onClick={() => {
            prevSlide();
          }}
        ></Prev>
        <Next
          onClick={() => {
            nextSlide();
          }}
        ></Next>
      </Coordinates>
    </section>
  );
};

export default CardComponent;

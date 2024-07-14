import { FC, useCallback, useState, useEffect } from "react";
import {
  CardContainer,
  Slide,
  SlideWrapper,
  Card,
  Prev,
  Coordinates,
  Next,
  More,
  Intro,
  H2,
} from "./style";
import { cardData } from "../../../constants/temp-card.constant";

export const ChevronLeftIcon: any = (props: any) => {
  return (
    <svg
      dataSlot="icon"
      fill="none"
      strokeWidth={2.5}
      stroke="rgb(255, 111, 15)"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
};

export const ChevronRightIcon: any = (props: any) => {
  return (
    <svg
      dataSlot="icon"
      fill="none"
      strokeWidth={2.5}
      stroke="rgb(255, 111, 15)"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

interface ICardComponentProps {
  title: string;
}

const CardCarousel: FC<ICardComponentProps> = ({ title }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const calculateCardsPerSlide = useCallback(
    () => (window?.innerWidth >= 768 ? 5 : 3),
    []
  );

  const totalSlides: number = Math.ceil(
    cardData.length / calculateCardsPerSlide()
  );

  const prevSlide = useCallback(() => {
    setSlideIndex((curr) => (curr === 0 ? 0 : curr - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setSlideIndex((curr) => (curr === totalSlides - 1 ? 0 : curr + 1));
  }, [totalSlides]);

  useEffect(() => {
    window.addEventListener("resize", calculateCardsPerSlide);

    return () => {
      window.removeEventListener("resize", calculateCardsPerSlide);
    };
  }, [calculateCardsPerSlide]);

  return (
    <section>
      <Coordinates>
        <SlideWrapper>
          <Intro>
            <H2>{title}</H2>
            <More>더보기</More>
          </Intro>
          <CardContainer slideIndex={slideIndex} totalSlides={totalSlides}>
            {cardData.map((card, index) => (
              <Slide key={index}>
                <picture>
                  <source srcSet={card.webSrcSet} type="image/webp" />
                  <Card src={card.imgSrc} alt={card.alt} />
                </picture>
              </Slide>
            ))}
          </CardContainer>
          <Prev onClick={prevSlide}>
            <ChevronLeftIcon />
          </Prev>
          <Next onClick={nextSlide}>
            <ChevronRightIcon />
          </Next>
        </SlideWrapper>
      </Coordinates>
    </section>
  );
};

export default CardCarousel;

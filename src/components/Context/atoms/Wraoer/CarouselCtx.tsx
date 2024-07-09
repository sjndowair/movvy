import React, { useEffect, useRef, useState } from "react";
import { cardData } from "../../../../DummyData/cardData";
import { Background, ImgBox, SlideBtn } from "./Carousel"; // Ensure these styles are correctly imported

interface IUseInterval {
  (callback: () => void, interval: number): void;
}

const useInterval: IUseInterval = (callback, interval) => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };
    if (interval !== null) {
      let id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
  }, [interval]);
};

const Carousel: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const [slideInterval, setSlideInterval] = useState<number>(6000);
  const slideRef = useRef<HTMLDivElement>(null);

  const CARD_DATA: number = cardData.length;
  const prevSlide: (typeof cardData)[number] = cardData[CARD_DATA - 1];
  const nextSlide: (typeof cardData)[number] = cardData[0];

  const infinitySlide = [prevSlide, ...cardData, nextSlide];
  const SLIDE_NUM = infinitySlide.length;

  useInterval(() => setSlideIndex((prev) => prev + 1), slideInterval);

  const infiniteSlideHandler = (flytoIndex: number) => {
    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = "";
      }
      setSlideIndex(flytoIndex);
      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "all 500ms ease-in-out";
        }
      }, 100);
    }, 500);
  };

  useEffect(() => {
    if (slideIndex === SLIDE_NUM - 1) {
      infiniteSlideHandler(1);
    } else if (slideIndex === 0) {
      infiniteSlideHandler(CARD_DATA);
    }
  }, [slideIndex]);

  const intervalHandler = () => {
    if (slideIndex === SLIDE_NUM - 1) {
      setSlideInterval(500);
    } else {
      setSlideInterval(6000);
    }
  };

  const slideHandler = (direction: number) => {
    setSlideIndex((prev) => prev + direction);
  };

  const stopAutoSlide = () => {
    setSlideInterval(10000000);
  };

  return (
    <Background>
      <SlideBtn
        className="Left"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={intervalHandler}
        onClick={() => slideHandler(-1)}
      ></SlideBtn>
      <div
        ref={slideRef}
        style={{
          display: "flex",
          width: `${100 * SLIDE_NUM}vw`,
          transition: "all 500ms ease-in-out",
          transform: `translateX(${
            -1 * ((100 / infinitySlide.length) * slideIndex)
          }%)`,
        }}
      >
        {infinitySlide.map((card, index) => (
          <ImgBox key={index}>
            {card.ImageContain.map((image, imgIndex) => (
              <picture key={imgIndex}>
                <source srcSet={image.webSrcSet} type="image/webp" />
                <img src={image.imgSrc} alt={image.alt} />
              </picture>
            ))}
          </ImgBox>
        ))}
      </div>
      <SlideBtn
        className="Right"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={intervalHandler}
        onClick={() => slideHandler(1)}
      ></SlideBtn>
    </Background>
  );
};

export default Carousel;

import React, { useCallback } from "react";
import { useState } from "react";
import {
  Slider,
  Slides,
  Overlay,
  NextBtn,
  Picture,
  Img,
  PrevBtn,
} from "../styles/contain-style";
import { slideData } from "../Context/slideCtx";

const PictureArea = () => {
  const [slide, setSlide] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [currentX, setCurrentX] = useState<number>(0);

  const nextSlide = useCallback((): void => {
    setSlide((prev) => (prev + 1) % slideData.length);
  }, []);
  const prevSlide = useCallback((): void => {
    setSlide((next) => (next - 1 + slideData.length) % slideData.length);
  }, []);

  return (
    <Slider>
      <Slides style={{ transform: `translateX(${-slide * 100}%)` }}>
        {slideData.map((slideItem, index) => (
          <Overlay key={index}>
            <picture>
              <source srcSet={slideItem.webSrcSet} type="image/webp" />
              {slideItem.isBanner ? (
                <img src={slideItem.imgSrc} alt={slideItem.alt} />
              ) : (
                <img src={slideItem.imgSrc} alt={slideItem.alt} />
              )}
            </picture>
          </Overlay>
        ))}
      </Slides>
      <PrevBtn onClick={prevSlide}>전</PrevBtn>
      <NextBtn onClick={nextSlide}>후</NextBtn>
    </Slider>
  );
};

export default PictureArea;

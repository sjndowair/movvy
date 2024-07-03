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

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setCurrentX(e.clientX - startX);
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(false);
    if (currentX > 10) {
      prevSlide();
    } else if (currentX < -10) {
      nextSlide();
    }
    setCurrentX(0);
  };

  return (
    <Slider
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Slides slideIndex={slide} isDragging={isDragging} currentX={currentX}>
        {slideData.map((slideItem, index) => (
          <Overlay key={index}>
            <Picture>
              <source srcSet={slideItem.webSrcSet} type="image/webp" />
              <Img src={slideItem.imgSrc} alt={slideItem.alt} />
            </Picture>
          </Overlay>
        ))}
      </Slides>
      <PrevBtn onClick={prevSlide}>후</PrevBtn>
      <NextBtn onClick={nextSlide}>전</NextBtn>
    </Slider>
  );
};

export default PictureArea;

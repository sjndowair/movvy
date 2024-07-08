import React, { useState, useCallback } from "react";
import {
  Slider,
  Slides,
  Slide,
  NextBtn,
  Picture,
  Img,
  PrevBtn,
  PictureAreaContainer,
} from "./contain-style";
import { slideData } from "../../../../DummyData/slideData";

const PictureArea = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const nextSlide = useCallback(() => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slideData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length
    );
  }, []);

  return (
    <Slider>
      <Slides slideIndex={slideIndex}>
        {slideData.map((slideItem, index) => (
          <Slide key={index}>
            <PictureAreaContainer>
              {slideItem.images.map((image, imgIndex) => (
                <Picture key={imgIndex}>
                  <source srcSet={image.webpSrcSet} type="image/webp" />
                  <Img src={image.imgSrc} alt={image.alt} />
                </Picture>
              ))}
            </PictureAreaContainer>
          </Slide>
        ))}
      </Slides>
      <PrevBtn onClick={prevSlide}></PrevBtn>
      <NextBtn onClick={nextSlide}></NextBtn>
    </Slider>
  );
};

export default PictureArea;

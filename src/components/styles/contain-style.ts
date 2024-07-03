import styled from "styled-components";
import { slideData } from "../Context/slideCtx";

export const Slider = styled.div`
  position: absolute;
  height: auto;
  width: 100%;
  overflow: hidden;
`;

export const Slides = styled.div<{
  slideIndex: number;
  isDragging: boolean;
  currentX: number;
}>`
  display: flex;
  height: 100vw;
  width: ${slideData.length * 100}%;
  transition: ${({ isDragging }) =>
    isDragging ? "none" : "transform 0.5s ease-in-out"};
  transform: ${({ slideIndex, currentX, isDragging }) =>
    isDragging
      ? `translateX(calc(-${
          (slideIndex * 100) / slideData.length
        }% + ${currentX}px))`
      : `translateX(-${(slideIndex * 100) / slideData.length}%)`};
`;

export const Picture = styled.picture`
  width: 100%;
  height: auto;
`;

export const Overlay = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
  height: auto;
`;

export const NextBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0, 5);

  border: none;
  padding: 0.75rem;
  cursor: pointer;
  z-index: 2;
  left: 0.75rem;
  overflow: hidden;
`;
export const PrevBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0, 5);
  border: none;
  padding: 0.75rem;
  cursor: pointer;
  z-index: 2;
  right: 0.75rem;
  color: #000;
`;

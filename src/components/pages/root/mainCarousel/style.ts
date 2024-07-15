import styled from "styled-components";
import { mediaSize } from "../../../Theme/theme";

export const Body = styled.body`
  background-color: #222;
  height: auto;
`;

export const H2 = styled.h2`
  color: #fff;
  font-size: 2rem;
  text-indent: 2rem;
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #333;
  height: 43vw;
`;

export const Slides = styled.div<{ slideIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ slideIndex }) => `translateX(-${slideIndex * 100}%)`};
`;

export const Slide = styled.div`
  position: relative;
  flex: 0 0 100%;
`;

export const PictureAreaContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const Picture = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

export const Img = styled.img`
  width: 100%;
  height: 40vw;
  object-fit: cover;
`;

export const NextBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  padding: 0.75rem;
  cursor: pointer;
  z-index: 2;
  right: 0.75rem;

  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border-top: 3px solid rgb(255, 111, 15);
    border-right: 3px solid rgb(255, 111, 15);
    transform: rotate(45deg);
    transition: transform 0.3s ease;
    filter: drop-shadow(0 0 5px rgb(255, 111, 15));
  }

  &:hover::after {
    transform: rotate(45deg) scale(1.2);
  }
`;

export const PrevBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  background-color: transparent;
  border: none;
  padding: 0.75rem;
  cursor: pointer;
  z-index: 2;
  left: 0.75rem;

  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border-top: 3px solid rgb(255, 111, 15);
    border-left: 3px solid rgb(255, 111, 15);
    transform: rotate(-45deg);
    transition: transform 0.3s ease;
    filter: drop-shadow(0 0 5px rgb(255, 111, 15));
  }

  &:hover::before {
    transform: rotate(-45deg);
    scale: (1.2);
  }
`;

export const HeaderToggleMenu = styled.div`
  ${mediaSize.pc} {
    display: none;
  }
  ${mediaSize.tablet} {
    display: block;
    position: absolute;
    width: 100%;
    height: 1000vh;
    background-color: #222;
    color: #fff;
    z-index: 3;
  }
`;

export const TabletGnb = styled.ul`
  display: flex;
  flex-direction: column;
  height: inherit;
  font-size: 1.75rem;
  margin-top: 2rem;
  margin-left: 2rem;
  gap: 2.5rem;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TabletGnbList = styled.li`
  cursor: pointer;
  width: 100%;
  &:hover {
    color: rgb(255, 111, 15);
    transition: all 0.15s ease;
  }
`;

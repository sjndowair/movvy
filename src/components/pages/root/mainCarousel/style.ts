import styled from "styled-components";
import { keyframes } from "styled-components";
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

export const SlideContainer = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  height: 56.3vw;
`;

export const PrevSlide = keyframes`
from{
  transform: translateX(-100%);
}
to{
  transform: translateX(0);
}

`;

export const NextSlide = keyframes`
from{
  transform: translateX(100%);
}
to{
transform: translateX(0);
}
`;

export const PrevSlideButton = styled.button`
  width: 2rem;
  background-color: #000;
  height: 2rem;
`;

export const NextSlideButton = styled.button`
  width: 2rem;
  background-color: #000;
  height: 2rem;
`;

export const Slide = styled.div<{ slideDirection: boolean }>`
  position: absolute;
  width: 100%;
  height: auto;
  animation: ${(props) => (props.slideDirection ? NextSlide : PrevSlide)} 1s
    forwards;
`;
export const PositionValueContainer = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #000;
`;

export const ArrowInnerContainer = styled.div`
  display: flex;
  margin: auto;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  height: inherit;
`;

export const ArrowStyleContainer = styled.svg`
  box-shadow: rgba(60, 60, 60, 1) 0rem 0rem 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    fill: rgb(255, 111, 15);
    box-shadow: rgba(255, 111, 15, 0.5) 0rem 0rem 1rem;
  }
`;

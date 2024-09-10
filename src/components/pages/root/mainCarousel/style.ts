import styled from "styled-components";
import { keyframes } from "styled-components";
import { mediaSize } from "../../../Theme/theme";

export const H2 = styled.h2`
  color: #fff;
  font-size: 2rem;
  text-indent: 2rem;
`;

export const SlideContainer = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  height: 56.2vw;
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

interface ISlideProps {
  $slideDirection: boolean;
  $active: boolean;
}
export const Slide = styled.div<ISlideProps>`
  position: absolute;
  width: 100%;
  height: auto;
  display: ${(props) => (props.$active ? "block" : "none")};
  animation: ${(props) => (props.$slideDirection ? PrevSlide : NextSlide)} 1s
    forwards;
`;

export const ArrowInnerContainer = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  justify-content: space-between;
  padding-left: 3rem;
  padding-right: 3rem;
  height: 7vw;
`;

export const ArrowStyleContainer = styled.svg`
  box-shadow: rgba(60, 60, 60, 1) 0rem 0rem 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    fill: rgb(255, 111, 15);
    box-shadow: rgba(255, 111, 15, 0.5) 0rem 0rem 1rem;
  }
`;

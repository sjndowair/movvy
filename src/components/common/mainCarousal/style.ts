import styled from "styled-components";
import { keyframes } from "styled-components";
import {
  IBackgroundDimProps,
  ISlideProps,
} from "../../../types/mainCarusalList";
import { mediaQuery, mediaSize } from "../../theme/theme";

export const H2 = styled.h2`
  color: ${({ theme }) => theme.color.average};
  font-size: 2rem;
  text-indent: 2rem;
`;

export const SlideContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
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

export const Slide = styled.div<ISlideProps>`
  position: absolute;
  width: 100%;
  height: auto;
  display: ${(props) => (props.$active ? "block" : "none")};
  animation: ${(props) => (props.$slideDirection ? PrevSlide : NextSlide)} 1s
    forwards;
`;

export const ArrowStyleContainer = styled.svg`
  box-shadow: rgba(60, 60, 60, 1) 0rem 0rem 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    fill: rgb(255, 111, 15);
    box-shadow: rgba(255, 111, 15, 0.5) 0rem 0rem 1rem;
  }
`;

export const ArrowButtonWrapper = styled.button`
  svg {
    border-radius: 2rem;
    width: 3.25rem;
    fill: ${({ theme }) => theme.color.primary};
    height: 3.25rem;
  }
`;

export const ArrowInnerContainer = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  padding: 0 3rem;
  height: 5vh;

  ${mediaQuery(600)} {
    padding: 0 1rem;
  }
`;

interface IMaintitleProps {
  $mainImg: string;
}
export const MainTitle = styled.div`
  position: relative;
`;
export const MainTitleImg = styled.div<IMaintitleProps>`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.$mainImg}) 50% 20% no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 5rem;
  align-items: flex-start;
  flex-direction: column;

  ${mediaSize.tablet} {
    background-size: cover;
  }
`;

export const MainTitleName = styled.h5`
  color: ${({ theme }) => theme.color.average};
  font-weight: 700;
  font-size: 7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  z-index: 2;
  padding: 0 10rem;

  ${mediaSize.tablet} {
    font-size: 5rem;
    padding: 0 3rem;
  }
  ${mediaSize.mobile} {
    font-size: 3rem;
  }
`;

export const MainTitleOverView = styled.p`
  color: ${({ theme }) => theme.color.average};
  z-index: 2;
  font-weight: 600;
  font-size: 1.75rem;
  padding: 0 10rem;

  line-height: 1.8;
  ${mediaSize.tablet} {
    font-size: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    padding: 0 3rem;
  }
  ${mediaSize.mobile} {
    font: 2rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;
export const BackgroundDimEffectBox = styled.div<IBackgroundDimProps>`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: ${({ $isDark }) =>
    !$isDark
      ? "  rgba(0, 0, 0, 0.4)"
      : "  linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 240, 1))"};
`;

import styled from "styled-components";
import { mediaQuery } from "../../Theme/theme";

export const ArrowButtonContainer = styled.div`
  position: relative;
  height: 4rem;
`;

export const NextBtn = styled.button`
  width: 3rem;
  position: absolute;
  right: 2rem;
  height: 3rem;
`;

export const PrevBtn = styled.button`
  width: 3rem;
  position: absolute;
  left: 2rem;
  height: 3rem;
`;

export const SlideContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 1);
`;

interface ISlideProps {
  $index: number;
  $cards: number;
  $reaction: number;
  $hiddenCard: boolean;
}

export const Slide = styled.div<ISlideProps>`
  display: flex;
  opacity: ${(props) => (props.$hiddenCard ? 0 : 1)};
  position: relative;
  height: 55vh;
  justify-content: center;
  transition: all 0.4s ease;
  transform: translateX(-${(props) => props.$index * 100}%);
  min-width: calc(100% / ${(props) => props.$reaction});
  gap: 1.5rem;

  ${mediaQuery(500)} {
    height: 50vh;
  }
`;

export const MoviesImgBox = styled.div`
  position: relative;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  padding-top: 3rem;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
    z-index: 10;
    color: ${({ theme }) => theme.color.primary};
    box-shadow: ${({ $isDark }) =>
      !$isDark
        ? " 0 20px 20px rgba(0, 0, 0, 1), 0 25px 25px rgba(0, 0, 0, 0.7)"
        : " 0 20px 20px rgba(0, 0, 0, 0.2), 0 25px 25px rgba(0, 0, 0, 0.1)"};
  }
`;

export const CardImg = styled.img`
  width: 200px;
  max-height: 300px;
  min-height: 300px;
  height: 100%;

  ${mediaQuery(800)} {
    width: 200px;
  }
  ${mediaQuery(650)} {
    width: 180px;
  }
  ${mediaQuery(450)} {
    width: 140px;
    height: 100%;
    max-height: 250px;
    min-height: 250pxㄴ;
  }
`;

export const MoviesTitleName = styled.h5`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  font-weight: bold;
  font-size: 1.5rem;
  padding-top: 0.5rem;
  text-overflow: ellipsis;
`;

export const TitleEncaseContainer = styled.div`
  height: 100%;
`;

export const CardTitle = styled.h2`
  font-size: 1.75rem;
  margin-left: 2.75rem;
  margin-bottom: 2.75rem;
  font-weight: 700;
  text-transform: uppercase;
  font-style: italic;
  color: ${({ theme }) => theme.color.primary};
`;

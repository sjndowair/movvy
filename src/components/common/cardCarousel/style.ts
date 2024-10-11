import styled from "styled-components";
import { mediaSize } from "../../theme/theme";
import {
  IMoviesImgBoxProps,
  ISlideProps,
} from "../../../types/cardCarousalList";

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
  height: auto;
  padding-bottom: 5rem;
  overflow: hidden;
`;

export const Slide = styled.div<ISlideProps>`
  display: flex;
  opacity: ${(props) => (props.$hiddenCard ? 0 : 1)};
  position: relative;
  justify-content: center;
  transition: all 0.4s ease;
  transform: translateX(-${(props) => props.$index * 100}%);
  flex: 0 0 calc(100% / ${(props) => props.$reaction});
  width: 100%;
  padding: 0 2rem;
  ${mediaSize.tablet} {
    padding: 0 1rem;
  }
`;

export const MoviesImgBox = styled.div<IMoviesImgBoxProps>`
  position: relative;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  color: ${({ theme }) => theme.color.average};
  text-align: center;
  transition: all 0.5s ease;
  box-shadow: 0, 10px 10px rgba(0, 0, 0, 1), 0 10px 10px rgba(0, 0, 0, 0, 0.6);

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
  width: 100%;
  max-width: 220px;
  aspect-ratio: 12/18;
  height: auto;
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
  font-style: italic;
  color: ${({ theme }) => theme.color.primary};
`;

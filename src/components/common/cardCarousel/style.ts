import styled from "styled-components";

export const ArrowButtonContainer = styled.div`
  position: relative;
  height: 4rem;
  margin-bottom: 2rem;
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
`;

interface ISlideProps {
  currentIndex: number;
  totalCards: number;
}

export const Slide = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  transition: transform 0.5s ease;
`;
/* transform: ${({ currentIndex }) =>
    `translateX(-${(currentIndex * 100) / 4}%)`};
  width: ${({ totalCards }) => `calc(100% * ${Math.ceil(totalCards / 4)})`};
`; */

export const MoviesImgBox = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0.75rem;
  text-align: center;
`;

export const CardImg = styled.img`
  width: 200px;
  max-height: 300px;
  height: 100%;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

export const MoviesTitleName = styled.h5`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
  z-index: 10;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const TitleEncaseContainer = styled.div`
  margin-top: 5rem;
  height: 100%;
  background-color: #111;
`;

export const CardTitle = styled.h2`
  font-size: 1.75rem;
  margin-left: 2.75rem;
  margin-bottom: 2.75rem;

  color: ${({ theme }) => theme.color.primary};
`;

export const HoverDirectionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  opacity: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  transition: all 0.5s ease-in-out;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.text.xxl};
  font-weight: ${({ theme }) => theme.font.bold};
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

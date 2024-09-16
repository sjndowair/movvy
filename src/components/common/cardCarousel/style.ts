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
  overflow-x: hidden;
`;

interface ISlideProps {
  $index: number;
  $cards: number;
  $reaction: number;
  hiddenCard: boolean;
}

export const Slide = styled.div<ISlideProps>`
  display: flex;
  display: ${(props) => (props.hiddenCard ? "none" : "block")};
  position: relative;
  height: auto;
  justify-content: center;
  transition: transform 0.75s ease-in-out;
  transform: translateX(-${(props) => props.$index * 100}%);
  min-width: calc(100% / ${(props) => props.$reaction});
  gap: 1.5rem;
`;

export const MoviesImgBox = styled.div`
  position: relative;
  height: 330px;
  z-index: 1;
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
    z-index: 10;
    color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 25px 25px rgba(0, 0, 0, 1), 0 16px 17px rgba(0, 0, 0, 0.7);
  }
`;

export const CardImg = styled.img`
  width: 200px;
  max-height: 300px;
  height: 100%;
`;

export const MoviesTitleName = styled.h5`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  font-weight: bold;
  font-size: 1.5rem;
  padding-top: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TitleEncaseContainer = styled.div`
  padding-top: 5rem;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
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

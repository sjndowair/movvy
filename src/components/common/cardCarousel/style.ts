import styled from "styled-components";

interface ICardContainerProps {
  slideIndex: number;
  totalSlides: number;
}

export const CardContainer = styled.div<ICardContainerProps>`
  display: flex;
  margin-top: 3rem;
  transition: transform 0.5s ease-in-out;
  transform: ${({ slideIndex, totalSlides }) =>
    `translateX(-${slideIndex * (100 / Math.ceil(totalSlides / 1))}%)`};
  width: ${({ totalSlides }) => `${totalSlides * 100}%`};
`;

export const Coordinates = styled.div`
  background-color: #333;
`;

export const SlideWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Slide = styled.div`
  box-sizing: border-box;
  padding: 0 1.2rem;
  overflow: hidden;
  cursor: pointer;
`;

export const Card = styled.img`
  width: 100%;
  border-radius: 1.25rem;
  height: auto;
  object-fit: cover;
  transition: all 0.2s ease-in;
  overflow: hidden;

  &:hover {
    scale: 1.02;
  }
`;

export const Button = styled.button`
  color: #fff;
`;

export const Prev = styled.button`
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(50%);
  width: 50px;
  height: 50px;
`;

export const Next = styled.button`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(50%);

  width: 50px;
  height: 50px;
`;

export const Intro = styled.div`
  display: flex;
  margin-top: 3rem;
  margin-left: 3rem;
  width: 90%;
  font-size: 1.75rem;
  font-weight: ${({ theme }) => theme.font.bold};

  justify-content: space-between;
  align-items: center;
`;

export const More = styled.div`
  font-size: ${({ theme }) => theme.text.xl};
  color: #fff;
  cursor: pointer;
  transition: all 0.125s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const H2 = styled.h2`
  color: #fff;
`;

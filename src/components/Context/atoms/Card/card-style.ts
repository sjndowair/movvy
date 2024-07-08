import styled from "styled-components";
import { cardData } from "../../../../DummyData/cardData";

interface CardContainerProps {
  slideIndex: number;
  totalSlides: number; // totalSlides prop 추가
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  margin-top: 3rem;
  transition: transform 0.5s ease-in-out;
  transform: ${({ slideIndex }) =>
    `translateX(-${slideIndex * (100 / Math.ceil(cardData.length / 1))}%)`};
  width: ${({ totalSlides }) => `${totalSlides * 100}%`};
`;

export const Coordinates = styled.div`
  position: relative;
`;

export const SlideWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
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
  transform: translateY(-50%);
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border-top: 3px solid ${({ theme }) => theme.color.primary};
    border-left: 3px solid ${({ theme }) => theme.color.primary};
    transform: rotate(-45deg);
    transition: transform 0.3s ease;
    filter: drop-shadow(0 0 5px rgb(255, 111, 15));
  }
`;

export const Next = styled.button`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border-top: 3px solid ${({ theme }) => theme.color.primary};
    border-right: 3px solid ${({ theme }) => theme.color.primary};
    transform: rotate(45deg);
    transition: transform 0.3s ease;
    filter: drop-shadow(0 0 5px rgb(255, 111, 15));
  }
`;

export const Intro = styled.div`
  display: flex;
  margin-top: 3rem;
  color: #fff;
  justify-content: space-between;
  align-items: center;
`;

export const More = styled.div`
  font-size: ${({ theme }) => theme.text.xl};
`;

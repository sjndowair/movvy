import styled from "styled-components";
import { keyframes } from "styled-components";

export const Notice = styled.div`
  width: 100%;
  background: #111;
  color: #fff;
  height: 5rem;
  display: flex;
  align-items: center;
  border-top: solid 1px gray;
  border-bottom: solid 1px gray;
  margin-top: 3rem;
`;

export const WidthControlContainer = styled.div`
  width: 90%;
  gap: 2rem;
  align-items: center;
  display: flex;
  margin: auto;
  height: inherit;
  position: relative;
`;

export const NoticeTitleContainer = styled.div`
  font-size: ${({ theme }) => theme.text.xxl};
`;

interface INoticeProps {
  isActive: any;
  isDown: boolean;
}

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOutUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

const slideInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOutDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
`;

export const NoticeContantsIndex = styled.li<INoticeProps>`
  fill: rgba(50, 50, 50, 0.5);
  position: absolute;
  transition: all 0.5s ease;
  top: 42%;
  cursor: pointer;

  animation: ${({ isActive, isDown }) =>
      isActive
        ? isDown
          ? slideInDown
          : slideInUp
        : isDown
        ? slideOutDown
        : slideOutUp}
    0.5s forwards;

  &:hover {
    text-decoration: underline;
  }
`;

export const NoticeArrowContainer = styled.div`
  margin-right: 0.25rem;
  width: 7rem;
`;

export const NoticePrevBtnContainer = styled.button`
  width: 2.5rem;
  height: 2.5rem;
`;

export const NoticeNextBtnContainer = styled.button`
  width: 2.5rem;
  height: 2.5rem;
`;

export const SvgStyleSheetContainer = styled.svg`
  box-shadow: rgba(60, 60, 60, 1) 0rem 0rem 0.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    fill: rgb(255, 111, 15);
    box-shadow: rgba(255, 111, 15, 0.5) 0rem 0rem 1rem;
  }
`;

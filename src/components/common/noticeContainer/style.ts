import styled from "styled-components";
import { keyframes } from "styled-components";

export const Notice = styled.div`
  width: 100%;
  margin-top: 8rem;
  background: #111;
  color: #fff;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: solid 1px gray;
  border-bottom: solid 1px gray;
`;

export const WidthControlContainer = styled.div`
  width: 70%;
  gap: 2rem;
  align-items: center;
  justify-content: flex-start;
  display: flex;
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
    transform: translateY(10%);
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
    transform: translateY(-10%);
  }
`;

const slideInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
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
    transform: translateY(50%);
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
  display: flex;
  gap: 0.25rem;
`;

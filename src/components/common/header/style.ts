import styled from "styled-components";
import { mediaSize } from "../../Theme/theme";

interface IIsScrollEvent {
  handleScrollEvent: boolean;
}

export const Head = styled.header<IIsScrollEvent>`
  position: fixed;
  width: 100%;
  z-index: 3;
  color: ${(props) => props.theme.color.background};
  font-size: ${(props) => props.theme.text.xxl};
  height: 4.5rem;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    !props.handleScrollEvent ? "0" : "rgb(255, 111, 15) 0 0 15px 0.5px;"};
  background-image: ${(props) =>
    props.handleScrollEvent
      ? "#000"
      : "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)"};
  background-color: ${(props) =>
    props.handleScrollEvent
      ? "#000"
      : "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)"};
`;

export const HeadInnerContainer = styled.div`
  width: 90%;
  margin: auto;
  height: inherit;
  align-items: center;
  display: flex;

  justify-content: space-between;
`;

export const HeadLeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const H1 = styled.h1`
  text-transform: capitalize;
  font-weight: ${(props) => props.theme.font.bold};
  font-size: 2.25rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.primary};
  display: inline-block;
  ${mediaSize.tablet} {
    padding-left: 1.25rem;
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    scale: 1.125;
    filter: blur(0.5px);
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 1.75rem;
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${(props) => props.theme.text.md};

  ${mediaSize.tablet} {
    display: none;
  }
`;

export const ListIndex = styled.li`
  transition: all 0.225s ease;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const MyPage = styled.ul`
  display: flex;
  color: #fff;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  ${mediaSize.tablet} {
    display: none;
  }
`;

interface IIconRotateProps {
  iconClickRotate: boolean;
}

export const TabletToggleContainer = styled.div`
  display: none;
  cursor: pointer;

  ${mediaSize.tablet} {
    display: block;
    width: 50px;
    height: 50px;
    margin-right: 1.5rem;
  }
`;

export const RotateIconContainer = styled.div<IIconRotateProps>`
  transition: all 0.25s ease-in;
  transform: ${(props) =>
    props.iconClickRotate ? "rotate(180deg)" : "rotate(0deg)"};
`;

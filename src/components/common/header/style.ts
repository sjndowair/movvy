import styled from "styled-components";
import { mediaSize } from "../../Theme/theme";

interface IIsScrollEvent {
  handleScrollEvent: boolean;
}

export const HeadContainer = styled.header<IIsScrollEvent>`
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 1;
  align-items: center;
  color: ${(props) => props.theme.color.background};
  font-size: ${(props) => props.theme.text.xxl};
  height: 4.5rem;
  justify-content: space-around;
  gap: 25rem;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    !props.handleScrollEvent ? "0" : "rgb(255, 111, 15) 0 0 15px 0.5px;"};
  background: ${(props) =>
    props.handleScrollEvent
      ? "#000"
      : "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)"};
`;

export const HeadInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
  height: inherit;
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

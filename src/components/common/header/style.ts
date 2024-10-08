import styled from "styled-components";
import { mediaSize } from "../../Theme/theme";

interface IIsScrollEvent {
  $handleScrollEvent: boolean;
}

export const HeadContainer = styled.header<IIsScrollEvent>`
  position: fixed;
  display: flex;
  width: 100%;
  max-width: 100vw;
  z-index: 3;
  align-items: center;
  color: ${({ theme }) => theme.color.average};
  font-size: ${(props) => props.theme.text.xxl};
  height: auto;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  padding: 1.5rem;
  box-shadow: ${(props) =>
    !props.$handleScrollEvent ? "none" : "rgba(255, 111, 15, 1) 0 0 1rem "};
  background: ${(props) =>
    props.$handleScrollEvent && !props.$isDark
      ? "rgba(0,0,0,1)"
      : props.$isDark && !props.$handleScrollEvent
      ? "linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.1) 100%)"
      : !props.$isDark && !props.$handleScrollEvent
      ? "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)"
      : "rgba(255,255,255,1)"};
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
`;

export const ListIndex = styled.li`
  transition: all 0.225s ease;
  color: ${({ theme }) => theme.color.average};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.primary};
  }
`;

interface ISearchBoxProps {
  $searchEvent: boolean;
}

export const SearchBox = styled.div<ISearchBoxProps>`
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: 2rem;
  border: 1.5px solid transparent;
  border-color: ${(props) =>
    props.$searchEvent ? "rgb(255, 111, 15)" : "transparent"};
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.$searchEvent ? "transparent" : "transparent"};
  z-index: ${(props) => (props.$searchEvent ? 1 : 0)};
  mix-blend-mode: unset;

  input {
    background: none;
    border: none;
    width: 100%;
    outline: none;
    color: ${({ theme }) => theme.color.average};
  }

  svg {
    color: ${(props) =>
      props.$searchEvent ? "rgba(255, 111, 15, 1)" : "rgba(50, 50, 50, 0.8)"};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
`;

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: calc(max(8rem, 10vw));
  padding: 0 1rem;
`;

export const ErrorBox = styled.div`
  background-color: ${({ theme }) => theme.background.footer};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 500px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 2rem;
  border-radius: 2rem;
`;

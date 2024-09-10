import styled from "styled-components";
import { mediaSize } from "../../Theme/theme";

interface IIsScrollEvent {
  $handleScrollEvent: boolean;
}

export const HeadContainer = styled.header<IIsScrollEvent>`
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 3;
  align-items: center;
  color: ${(props) => props.theme.color.background};
  font-size: ${(props) => props.theme.text.xxl};
  height: 4.5rem;
  justify-content: space-around;
  gap: 25rem;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    !props.$handleScrollEvent ? "none" : "rgba(255, 111, 15, 1) 0 0 1rem "};
  background: ${(props) =>
    props.$handleScrollEvent
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
  color: rgba(255, 255, 255, 1);
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
  justify-content: center;
  gap: 2rem;

  align-items: center;
  border-radius: 2rem;
  padding: 0 5px;
  padding-top: 3px;
  border: ${(props) =>
    props.$searchEvent ? "rgb(255, 111, 15) 1.5px solid" : "none"};

  form {
    transition: 0.5s all ease;
  }

  input {
    background: none;
    border: none;

    outline: none;
    color: ${({ theme }) => theme.color.background};
  }
  svg {
    color: ${(props) =>
      props.$searchEvent ? "rgb(255, 111, 15)" : "rgba(50, 50, 50, 0.8)"};
  }
`;

export const ErrorBox = styled.div`
  background-color: #11111199;
  position: absolute;
  max-width: 500px;
  width: 100%;
  text-align: center;
  top: 5rem;
  left: 36%;
  right: 50%;
  transition: all 0.5s ease;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 2rem;
  border-radius: 2rem;
`;

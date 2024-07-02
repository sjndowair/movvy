import styled from "styled-components";

export const Head = styled.header`
  display: flex;
  color: ${(props) => props.theme.color.background};
  font-size: ${(props) => props.theme.text.xxl};
  justify-content: space-around;
  height: 4.5rem;
  background-color: #222;
  align-items: center;
`;

export const H1 = styled.h1`
  font-weight: ${(props) => props.theme.font.bold};
  font-size: 2rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 1.75rem;
  font-size: ${(props) => props.theme.text.xl};
  &:hover {
    cursor: pointer;
  }
`;

export const MyPage = styled.ul`
  display: flex;
  color: #fff;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.text.xxl};
`;

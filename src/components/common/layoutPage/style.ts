import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.body};
  height: 100%;
`;

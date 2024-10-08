import styled from "styled-components";

export const ThemeButtonWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 1rem;
  z-index: 1;
  bottom: 3rem;
  border-radius: 3rem;
  transition: all 0.2s ease;
`;

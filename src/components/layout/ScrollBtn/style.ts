import styled from "styled-components";

interface IScrollEvent {
  onScrollUp: boolean;
}

export const ScrollBTN = styled.button`
  width: 4rem;
  height: 4rem;
  position: fixed;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  transition: all 1s ease;
  bottom: 1rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.primary};
`;

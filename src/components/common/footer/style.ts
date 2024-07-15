import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #111;
  color: #fff;
  height: 13rem;
`;

export const FooterNavMarginBox = styled.div`
  padding-top: 2rem;
  padding-left: 2rem;
`;

export const FooterNavigation = styled.ul`
  display: flex;
  gap: 1.25rem;
  font-size: ${({ theme }) => theme.text.xl};
`;

export const FooterNavigationElement = styled.li`
  transition: all 0.2s ease;
  color: gray;
  cursor: pointer;
  &:hover {
    font-weight: ${({ theme }) => theme.font.bold};
    color: ${({ theme }) => theme.color.primary};
  }
`;

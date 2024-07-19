import styled from "styled-components";

interface IMainContainerProps {
  headerToggle: boolean;
}
export const MainContainer = styled.main<IMainContainerProps>`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
  height: 100%;
`;

export const HeaderContainer = styled.header``;

export const FooterContainer = styled.footer``;

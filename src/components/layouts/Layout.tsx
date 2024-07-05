import { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { Body } from "../styles/contain-style";
const MainContainer = styled.main``;

interface ILayout {
  children?: JSX.Element | string | number | ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header></Header>
      <Body>
        <MainContainer>{children}</MainContainer>
      </Body>
      <Footer></Footer>
    </>
  );
};
//로직 위주
export default Layout;

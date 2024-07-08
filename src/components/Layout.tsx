import { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Context/atoms/Header/Header";
import Footer from "./Context/atoms/Footer/Footer";
import { Body } from "./Context/atoms/Slider/contain-style";
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

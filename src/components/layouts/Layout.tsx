import { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
const MainContainer = styled.main``;

interface ILayout {
  children?: JSX.Element | string | number | ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header></Header>

      <MainContainer>{children}</MainContainer>
      <Footer></Footer>
    </>
  );
};
//로직 위주
export default Layout;

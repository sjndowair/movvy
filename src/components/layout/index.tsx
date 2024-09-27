import { ReactNode } from "react";
import { MainContainer } from "./style";
import Header from "../common/header";
import Footer from "../common/footer";

interface ILayout {
  children?: JSX.Element | string | number | ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>

      <Footer />
    </>
  );
};

export default Layout;

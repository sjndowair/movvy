import { ReactNode } from "react";
import { MainContainer } from "./style";
import Header from "../header";
import Footer from "../footer";
import ScrollButton from "../../layout/scrollBtn";
import ThemeButton from "../../layout/themeButton";

interface ILayout {
  children?: JSX.Element | string | number | ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <ScrollButton />
      <ThemeButton />
      <Footer />
    </>
  );
};

export default Layout;

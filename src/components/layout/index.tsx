import { ReactNode, useState } from "react";
import { MainContainer } from "./style";
import Header from "../common/header";
import Footer from "../common/footer";

interface ILayout {
  children?: JSX.Element | string | number | ReactNode;
  headerToggle: boolean;
  iconClickRotate: () => void;
}

const Layout = ({ children, headerToggle, iconClickRotate }: ILayout) => {
  return (
    <>
      <Header onToggleMenu={iconClickRotate}></Header>
      <MainContainer headerToggle={headerToggle}>{children}</MainContainer>
      <Footer></Footer>
    </>
  );
};

export default Layout;

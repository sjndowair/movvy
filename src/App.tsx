import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Layout from "./components/layouts/Layout";
import { darkTheme, lightTheme } from "./components/Theme/theme";
import { GlobalStyle } from "./components/Context/global-style";
import { useThemeMode } from "./components/Theme/themeCtx";
import PictureArea from "./components/Context/atoms/Slider/Picture";
import MainContainer from "./components/Context/atoms/Card/NameCtx";
import Carousel from "./components/Context/atoms/Wraoer/CarouselCtx";

function App() {
  const { isDark } = useThemeMode();

  return (
    <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Layout>
        <PictureArea />
        <MainContainer></MainContainer>
        <Carousel />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

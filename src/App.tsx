import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Layout from "./components/layouts/Layout";
import { darkTheme, lightTheme } from "./components/styles/theme";
import { GlobalStyle } from "./components/styles/global-style";
import { useThemeMode } from "./components/Context/themeCtx";
import PictureArea from "./components/layouts/Picture";
import MainContainer from "./components/layouts/NameCtx";

function App() {
  const { isDark } = useThemeMode();

  return (
    <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Layout>
        <PictureArea />
        <MainContainer></MainContainer>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

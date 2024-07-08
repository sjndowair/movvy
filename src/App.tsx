import { useTheme } from "styled-components";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Layout from "./components/layouts/Layout";
import { darkTheme, lightTheme } from "./components/styles/theme";
import { GlobalStyle } from "./components/styles/global-style";
import { ThemeModeProvider } from "./components/Context/themeCtx";

const Div = styled.div`
  color: blue;
`;

function App() {
  const { isDark } = useTheme();

  return (
    <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Layout>
        <Div className="App">hello world</Div>
      </Layout>
    </ThemeProvider>
  );
}

export default () => (
  <ThemeModeProvider>
    <App />
  </ThemeModeProvider>
);

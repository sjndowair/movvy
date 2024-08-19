import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Theme/theme";
import { GlobalStyle } from "./components/Theme/global-style";
import { useThemeMode } from "./contexts/themeCtx";
import Home from "./pages/root";
import SearchPage from "./pages/Searchpage";
import Series from "./pages/Series";
import { HashRouter, Routes, Route } from "react-router-dom";
import VideoPage from "./pages/VideoPage";

function App() {
  const { isDark } = useThemeMode();

  return (
    <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
      <GlobalStyle />

      <Routes>
        <Route path={"/"} element={<Home />}>
          <Route path={"/movie/:movieId"} element={<Home />} />
        </Route>
        <Route path={"/search"} element={<SearchPage />} />
        <Route path={"/series"} element={<Series />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

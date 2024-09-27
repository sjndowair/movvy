import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Theme/theme";
import { GlobalStyle } from "./components/Theme/global-style";
import { useThemeMode } from "./contexts/themeCtx";
import Home from "./pages/root/root";
import SearchPage from "./pages/search/Search";
import Series from "./pages/Series";
import { HashRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail/Detail";

function App() {
  const { isDark } = useThemeMode();

  return (
    <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
      <GlobalStyle />
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:movieId" element={<Home />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="search/:type/:id" element={<Detail />} />
          <Route path="series" element={<Series />} />
          <Route path="series/:seriesId" element={<Series />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

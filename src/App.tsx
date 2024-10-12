import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/theme/theme";
import { GlobalStyle } from "./components/theme/global-style";
import { useThemeMode } from "./contexts/themeCtx";
import Home from "./pages/root";
import SearchPage from "./pages/search";
import Series from "./pages/series";
import { HashRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail";
import { useEffect } from "react";

const THEME_KEY = "THIS_THEME_KEY";

function App() {
  const { isDark, toggleTheme } = useThemeMode();

  useEffect(() => {
    const isSavedTheme = localStorage.getItem(THEME_KEY);
    if (isSavedTheme === "dark") toggleTheme();
  }, [toggleTheme]);

  useEffect(() => {
    !isDark
      ? localStorage.setItem(THEME_KEY, "dark")
      : localStorage.setItem(THEME_KEY, "light");
  }, [isDark]);

  return (
    <ThemeProvider theme={isDark ? lightTheme : darkTheme}>
      <GlobalStyle />
      <HashRouter basename={process.env.PUBLIC_URL}>
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

import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { darkTheme, lightTheme } from "./components/Theme/theme";
import { GlobalStyle } from "./components/Theme/global-style";
import { useThemeMode } from "./contexts/themeCtx";
import Home from "./pages/root";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";

import SearchPage from "./pages/Searchpage";

function App() {
  const { isDark } = useThemeMode();

  return (
    <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ThisIsSearchPage" element={<SearchPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

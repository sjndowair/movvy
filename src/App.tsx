import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Theme/theme";
import { GlobalStyle } from "./components/Theme/global-style";
import { useThemeMode } from "./contexts/themeCtx";
import Home from "./pages/root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SubPage from "./pages/Subpage";
import { CardProvider } from "./contexts/movieCtx";
import SearchPage from "./pages/Searchpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/thisIsSubPage",
    element: <SubPage />,
  },
  {
    path: "/thisIsSearchPage",
    element: <SearchPage />,
  },
]);

function App() {
  const { isDark } = useThemeMode();

  return (
    <CardProvider>
      <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />;
      </ThemeProvider>
    </CardProvider>
  );
}

export default App;

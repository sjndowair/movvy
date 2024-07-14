import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Theme/theme";
import { GlobalStyle } from "./components/Theme/global-style";
import { useThemeMode } from "./contexts/themeCtx";
import Home from "./pages/root";
import Layout from "./components/layout";
import { useEffect, useState } from "react";
import { API_KEY } from "./constants/api.constant";

function App() {
  const { isDark } = useThemeMode();
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getNowPlayingMovieList = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      const result = await response.json();

      // console.log(result);
      setMovies(result);
    };

    getNowPlayingMovieList();
  }, []);

  useEffect(() => {
    // console.log(movies);
  }, [movies]);

  return (
    <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;

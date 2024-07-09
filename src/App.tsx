import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Theme/theme";
import { GlobalStyle } from "./components/Theme/global-style";
import { useThemeMode } from "./contexts/themeCtx";
import Home from "./pages/root";

function App() {
    const { isDark } = useThemeMode();

    return (
        <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Home />
        </ThemeProvider>
    );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeModeProvider } from "./components/Context/themeCtx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeModeProvider>
      <App />
    </ThemeModeProvider>
  </React.StrictMode>
);

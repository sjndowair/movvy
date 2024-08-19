import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeModeProvider } from "./contexts/themeCtx";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <React.StrictMode>
      <ThemeModeProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeModeProvider>
    </React.StrictMode>
  </QueryClientProvider>
);

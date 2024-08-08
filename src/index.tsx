import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
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
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            {process.env.NODE_ENV !== "production" && (
                <ReactQueryDevtools initialIsOpen={true} />
            )}
            <ThemeModeProvider>
                <HashRouter>
                    <App />
                </HashRouter>
            </ThemeModeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);

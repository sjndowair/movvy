//:DefaultTheme
import { DefaultTheme } from "styled-components";

// seveColor: "rgb(255,250,224)",

export const lightTheme: DefaultTheme = {
  background: {
    body: "rgba(255, 255, 240, 1)",
    primary: "rgba(255, 111, 15, 1)",
    footer: "#fff",
    detail: "rgba(255,255,255,0.3)",
    modal: "rgba(240,240,240,1)",
  },

  color: {
    average: "rgba(0,0,0,1)",
    primary: "rgba(255, 111, 15, 1)",
    footer: "rgba(128, 128, 128, 1)",
  },

  text: {
    sm: "0.75rem",
    md: "1rem",
    xl: "1.25rem",
    xxl: "1.5rem",
  },

  font: {
    light: "300",
    base: "500",
    bold: "900",
  },
};

export const darkTheme: DefaultTheme = {
  background: {
    body: "rgba(0,0,0,1)",
    primary: "rgba(255, 111, 15, 1)",
    footer: "rgba(17,17,17,1)",
    detail: "rgba(0,0,0,0.6)",
    modal: "rgba(50, 50, 50, 1)",
  },

  color: {
    average: "rgba(255,255,255, 1)",
    primary: "rgba(255, 111, 15, 1)",
    footer: "rgba(128, 128, 128, 1)",
  },

  text: {
    sm: "0.75rem",
    md: "1rem",
    xl: "1.25rem",
    xxl: "1.5rem",
  },

  font: {
    light: "300",
    base: "500",
    bold: "900",
  },
};

export const mediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const mediaSize = {
  custom: mediaQuery,
  pc: mediaQuery(1300),
  tablet: mediaQuery(768),
  mobile: mediaQuery(420),
};

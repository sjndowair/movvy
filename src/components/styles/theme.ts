//:DefaultTheme
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  color: {
    background: "#fff",
    color: "#333",
    primary: "rgb(255, 111, 15)",
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
  color: {
    background: "#333",
    color: "#fff",
    primary: "rgb(255, 111, 15)",
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

const mediaQuery = (maxWidth: number): string =>
  `media (max width: ${maxWidth}px)`;

export const mediaSize = {
  custom: mediaQuery,
  pc: mediaQuery(1300),
  tablet: mediaQuery(768),
  mobile: mediaQuery(420),
};

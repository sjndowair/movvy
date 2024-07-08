import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      background: "#fff" | "#333";
      color: "#fff" | "#333";
      primary: "rgb(255, 111, 15)";
    };
    font: {
      light: "300";
      base: "500";
      bold: "900";
    };
    text: {
      sm: "0.75rem";
      md: "1rem";
      xl: "1.25rem";
      xxl: "1.5rem";
    };
  }
}

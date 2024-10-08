import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: {
      body: "rgba(255, 255, 240, 1)" | "rgba(0,0,0,1)";
      primary: "rgba(255, 111, 15, 1)";
      footer: "rgba(17,17,17,1)" | "#fff";
      detail: "rgba(0,0,0,0.6)" | "rgba(255,255,255,0.3)";
      modal: "rgba(50, 50, 50, 1)" | "rgba(240,240,240,1)";
    };

    color: {
      average: "rgba(255,255,255, 1)" | "rgba(0,0,0,1)";
      primary: "rgba(255, 111, 15, 1)";
      footer: "rgba(128, 128, 128, 1)" | "rgba(255, 111, 15, 1)";
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

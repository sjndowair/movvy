export interface ISvgProperty {
  fill: {
    white: "rgba(255,255,255,1)";
    primary: "rgb(255, 111, 15)";
  };
  width: {
    sm: "1rem";
    md: "1.5rem";
    xl: "2rem";
    xxl: "3rem";
  };

  height: {
    sm: "1rem";
    md: "1.5rem";
    xl: "2rem";
    xxl: "3rem";
  };
}

export interface ISvgProps {
  fill?: string;
  size?: string;
  xmlns?: string;
  stroke?: string;
  strokeWidth?: string;
  viewBox?: string;
  boxShadow?: string;
}

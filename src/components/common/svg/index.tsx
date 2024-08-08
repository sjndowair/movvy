import { ScrollTopSvg } from "./style";
import { svgProperty } from "../../../constants/svg.constant";
import { useState } from "react";

interface ISvgProps {
  fill?: string;
  size?: string;
  xmlns?: string;
  stroke?: string;
  strokeWidth?: string;
  viewBox?: string;
  boxShadow?: string;
}

export const RightArrowButton = ({
  fill = "rgba(50, 50, 50, 0.8)",
  size = "30",
  xmlns = "http://www.w3.org/2000/svg",
  viewBox = "0 0 24 24",
  stroke = "none",
  strokeWidth = "1",
}: ISvgProps) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <svg
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      xmlns={xmlns}
      viewBox={viewBox}
      fill={hover ? "rgb(255, 111, 15)" : fill}
      width={size}
      height={size}
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={{
        transition: "all 0.5s ease",
        boxShadow: hover ? "rgba(255, 111, 15, 0.5) 0rem 0rem 1rem;" : fill,
      }}
    >
      <path
        fillRule="evenodd"
        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const LeftArrowButton = ({
  fill = "rgba(50, 50, 50, 0.8)",
  size = "30",
  xmlns = "http://www.w3.org/2000/svg",
  viewBox = "0 0 24 24",
  stroke = "none",
  strokeWidth = "1",
}: ISvgProps) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <svg
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      xmlns={xmlns}
      viewBox={viewBox}
      fill={hover ? "rgb(255, 111, 15)" : fill}
      width={size}
      height={size}
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={{
        transition: "all 0.5s ease",
        boxShadow: hover ? "rgba(255, 111, 15, 0.5) 0rem 0rem 1rem;" : fill,
      }}
    >
      <path
        fillRule="evenodd"
        d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const UpArrowButton = ({
  fill = "rgba(50, 50, 50, 0.8)",
  size = "30",
  xmlns = "http://www.w3.org/2000/svg",
  viewBox = "0 0 24 24",
  stroke = "none",
  strokeWidth = "1",
}: ISvgProps) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <svg
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      xmlns={xmlns}
      viewBox={viewBox}
      fill={hover ? "rgb(255, 111, 15)" : fill}
      width={size}
      height={size}
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={{
        transition: "all 0.5s ease",
        boxShadow: hover ? "rgba(255, 111, 15, 0.5) 0rem 0rem 1rem;" : fill,
      }}
    >
      <path
        fillRule="evenodd"
        d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const DownArrowButton = ({
  fill = "rgba(50, 50, 50, 0.8)",
  size = "30",
  xmlns = "http://www.w3.org/2000/svg",
  viewBox = "0 0 24 24",
  stroke = "none",
  strokeWidth = "1",
}: ISvgProps) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <svg
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      xmlns={xmlns}
      viewBox={viewBox}
      fill={hover ? "rgb(255, 111, 15)" : fill}
      width={size}
      height={size}
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={{
        transition: "all 0.5s ease",
        boxShadow: hover ? "rgba(255, 111, 15, 0.5) 0rem 0rem 1rem;" : fill,
      }}
    >
      <path
        fillRule="evenodd"
        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const Magnifiy = ({
  fill = "rgba(50, 50, 50, 0.8)",
  size = "24",
  xmlns = "http://www.w3.org/2000/svg",
  viewBox = "0 0 24 24",
  stroke = "none",
  strokeWidth = "1",
}: ISvgProps) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <svg
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      xmlns={xmlns}
      viewBox={viewBox}
      fill={hover ? "rgb(255, 111, 15)" : fill}
      width={size}
      height={size}
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={{
        transition: "all 0.5s ease",
        boxShadow: hover ? "rgba(255, 111, 15, 0.5) 0rem 0rem 1rem;" : fill,
      }}
    >
      <path
        fillRule="evenodd"
        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ArrowUpCircle = () => {
  const { fill, width, height } = svgProperty;
  return (
    <ScrollTopSvg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </ScrollTopSvg>
  );
};

export const Xcircle = ({
  fill = "rgba(255, 255, 255, 0.8)",
  size = "24",
  xmlns = "http://www.w3.org/2000/svg",
  viewBox = "0 0 24 24",
  stroke = "none",
  strokeWidth = "1",
}: ISvgProps) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <svg
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      xmlns={xmlns}
      viewBox={viewBox}
      fill={hover ? "rgb(255, 111, 15)" : fill}
      width={size}
      height={size}
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={{
        cursor: "pointer",
        float: "right",
        transition: "all 0.5s ease",
        boxShadow: hover ? "rgba(255, 111, 15, 0.5) 0rem 0rem 1rem;" : fill,
      }}
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

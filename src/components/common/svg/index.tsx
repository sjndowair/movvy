import { useState } from "react";

import { ISvgProps } from "../../../types/svg";

export const Back = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <svg
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      style={{ transition: "all 0.5s ease" }}
      strokeWidth={1}
      stroke={hover ? "rgb(255, 111, 15)" : "rgba(50, 50, 50, 1)"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
      />
    </svg>
  );
};

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
        boxShadow: "rgba(255, 111, 15, 0.5) 0rem 0rem 1rem",
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
        boxShadow: "rgba(255, 111, 15, 0.5) 0rem 0rem 1rem",
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
        boxShadow: hover ? "rgba(255, 111, 15, 0.5) 0rem 0rem 1rem" : fill,
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
        boxShadow: hover ? "rgba(255, 111, 15, 0.5) 0rem 0rem 1rem" : fill,
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
  fill = "rgba(255, 255, 255, 1)",
  size = "24",
  xmlns = "http://www.w3.org/2000/svg",
  viewBox = "0 0 24 24",
  stroke = "none",
  strokeWidth = "1",
}: ISvgProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  const onClick = () => {
    setClicked((pre) => !pre);
    setHover(true);
  };
  return (
    <svg
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      onClick={() => onClick()}
      xmlns={xmlns}
      viewBox={viewBox}
      fill={hover || clicked ? "rgb(255, 111, 15)" : fill}
      width={size}
      height={size}
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={{
        transition: "all 0.5s ease",
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

export const ArrowUpCircle = ({
  fill = "rgba(0, 0, 0, 0)",
  size = "50",
}: ISvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
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
        boxShadow: hover ? "rgba(255, 111, 15, 0.5) 0rem 0rem 1rem" : fill,
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

export const StarRate = ({ voteAverage, size = "24" }: any) => {
  const totalStar = () => 5;
  const totalRate = () => {
    return voteAverage / 2;
  };

  return (
    <div style={{ display: "flex" }}>
      {[...Array(totalStar())].map((_, i) => {
        const starTotalRate = totalRate();
        const essenceRate = Math.floor(starTotalRate);
        const pointRate = starTotalRate - essenceRate;

        let fillStar;

        if (i < Math.floor(starTotalRate)) {
          fillStar = "rgba(255, 111, 15, 1)";
        } else if (i === starTotalRate && pointRate >= 0.75) {
          fillStar = "url(#reverseHalfAndHalf)";
        } else if (i === starTotalRate && pointRate >= 0.5) {
          fillStar = "url(#half)";
        } else if (i === starTotalRate && pointRate >= 0.25) {
          fillStar = "url(#halfAndHalf)";
        } else {
          fillStar = "none";
        }
        return (
          <svg
            width={size}
            height={size}
            stroke="rgba(255, 111, 15, 1)"
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={fillStar}
          >
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="rgba(255, 111, 15, 1)"></stop>
                <stop offset="50%" stopColor="none"></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="halfAndHalf">
                <stop offset="30%" stopColor="rgba(255, 111, 15, 1)"></stop>
                <stop offset="70%" stopColor="none"></stop>
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="reverseHalfAndHalf">
                <stop offset="70%" stopColor="rgba(255, 111, 15, 1)"></stop>
                <stop offset="30%" stopColor="none"></stop>
              </linearGradient>
            </defs>
            <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
          </svg>
        );
      })}
    </div>
  );
};

export const IsThemeBright = ({ size = "30" }: ISvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgb(255, 111, 15)"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="rgba(0,0,0,1)"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
};

export const IsThemeDark = ({ size = "30" }: ISvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgb(255, 111, 15)"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="rgba(0,0,0,1)"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
};

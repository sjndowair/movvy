import styled from "styled-components";
import { ISvgProperty } from "../../../../../types/svg";

export const MagnifySvg = styled.svg<ISvgProperty>`
  fill: ${({ fill }) => fill.white};
  width: ${({ width }) => width.xl};
  height: ${({ height }) => height.xl};
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    fill: ${({ fill }) => fill.primary};
  }
`;

export const ArrowSvg = styled.svg<ISvgProperty>`
  fill: rgba(50, 50, 50, 0.5);
  width: ${({ width }) => width.xxl};
  height: ${({ height }) => height.xxl};
  box-shadow: rgba(60, 60, 60, 1) 0rem 0rem 0.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    fill: ${({ fill }) => fill.primary};
    box-shadow: rgba(255, 111, 15, 0.5) 0rem 0rem 1rem;
  }
`;

export const ScrollTopSvg = styled.svg<ISvgProperty>`
  fill: rgba(0, 0, 0, 1);
  stroke: ${({ theme }) => theme.color.primary};
  width: ${({ width }) => width.xxl};
  height: ${({ height }) => height.xxl};

  transition: all 0.3s ease-in-out;
  &:hover {
    fill: ${({ fill }) => fill.white};
    box-shadow: ${({ theme }) => theme.color.primary} 0rem 0rem 1rem;
  }
`;

export const XcircleSvg = styled.svg<ISvgProperty>`
  fill: rgba(0, 0, 0, 1);
  float: right;
  cursor: pointer;
  width: ${({ width }) => width.xxl};
  height: ${({ height }) => height.xxl};
  transition: all 0.2s ease;
  &:hover {
    fill: ${({ theme }) => theme.color.background};
  }
`;

import styled from "styled-components";
import { ISvgProperty } from "../../../../../types/svg";

export const Svg = styled.svg<ISvgProperty>`
  fill: ${({ fill }) => fill.white};
  width: ${({ width }) => width.xl};
  height: ${({ height }) => height.xl};
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    fill: ${({ fill }) => fill.primary};
  }
`;

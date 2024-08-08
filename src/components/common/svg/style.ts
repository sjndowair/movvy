import styled from "styled-components";
import { ISvgProperty } from "../../../types/svg";

export const ScrollTopSvg = styled.svg<ISvgProperty>`
  fill: rgba(0, 0, 0, 1);
  stroke: ${({ theme }) => theme.color.primary};
  width: ${({ width }) => width.xxl};
  height: ${({ height }) => height.xxl};

  transition: all 0.3s ease-in-out;
  &:hover {
    fill: ${({ fill }) => fill.white};
    box-shadow: rgba(255, 111, 15, 0.5) 0rem 0rem 1rem;
  }
`;

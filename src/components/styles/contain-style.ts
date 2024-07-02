import styled from "styled-components";

export const Slider = styled.div`
  position: absolute;
  height: auto;
  width: 100%;
`;

export const Slides = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const Overlay = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

export const NextBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0, 5);
  color: #fff;
  border: none;
  padding: 0.75rem;
  cursor: pointer;
  z-index: 2;
  left: 0.75rem;
`;
export const PrevBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0, 5);
  color: #fff;
  border: none;
  padding: 0.75rem;
  cursor: pointer;
  z-index: 2;
  right: 0.75rem;
  color: #000;
`;

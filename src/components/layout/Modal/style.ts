import styled from "styled-components";
import { MODAL_URL } from "../../../utils/modal.utill";

export const ModalBackgroundDeemContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const ModalInnerContainer = styled.div`
  background: url(${MODAL_URL}) center/cover no-repeat;
  width: 70%;
  height: 50vw;
  font-size: 5.5rem;
  font-weight: ${({ theme }) => theme.font.bold};
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  border-radius: 1rem;
  box-shadow: 0px 4px 9px 9px rgba(255, 111, 15, 0.5);
`;
export const H5 = styled.h5`
  position: absolute;
  bottom: 35%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: rgba(0, 0, 0, 1);
  left: 50%;
  width: 100%;
  text-shadow: 2px 2px rgba(255, 111, 15, 0.5);
  transform: translateX(-50%);
`;

export const Span = styled.span`
  font-size: 7rem;
`;

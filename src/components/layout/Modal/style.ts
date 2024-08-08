import styled from "styled-components";
import { MODAL_URL } from "../../../utils/modal.utill";
import { mediaSize } from "../../Theme/theme";

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
  width: 50%;
  height: 40vw;
  font-weight: ${({ theme }) => theme.font.bold};
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  border-radius: 1rem;
  box-shadow: 0px 4px 9px 9px rgba(255, 111, 15, 0.5);
  ${mediaSize.custom(700)} {
    font-size: 2.5rem;
    height: 50vw;
  }
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
  font-size: 5.5rem;
  text-shadow: 2px 2px rgba(255, 111, 15, 0.5);
  transform: translateX(-50%);
  ${mediaSize.custom(1000)} {
    font-size: 3.5rem;
  }
  ${mediaSize.custom(700)} {
    font-size: 2.5rem;
  }
`;

export const Span = styled.span`
  font-size: 7rem;
  ${mediaSize.custom(700)} {
    font-size: 3.5rem;
  }
`;

export const Div = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  gap: 0.5rem;
  bottom: -2rem;
  right: 0;
`;

export const ModalBTN = styled.button`
  color: rgba(255, 255, 255, 1);
`;

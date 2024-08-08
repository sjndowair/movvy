import { useEffect, useState } from "react";
import {
  H5,
  ModalBackgroundDeemContainer,
  ModalInnerContainer,
  Span,
  Div,
  ModalBTN,
  CheckBoxContainer,
} from "./style";
import { Xcircle } from "../../common/svg/index";

interface IModalProps {
  isOpenModal: boolean;
  isCheckedNotToday: boolean;
  setIsCheckedNotToday: React.Dispatch<React.SetStateAction<boolean>>;
  isCloseSetModal: () => void;
}

const ModalComponent = ({
  isOpenModal,
  isCheckedNotToday,
  setIsCheckedNotToday,
  isCloseSetModal,
}: IModalProps) => {
  return (
    <>
      {isOpenModal && (
        <ModalBackgroundDeemContainer>
          <ModalInnerContainer>
            <Div onClick={isCloseSetModal}>
              <Xcircle />
            </Div>
            <CheckBoxContainer>
              <label
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCheckedNotToday((pre) => !pre);
                }}
              >
                <input type="checkBox" checked={isCheckedNotToday} />
                <ModalBTN>오늘하루보지않기</ModalBTN>
              </label>
            </CheckBoxContainer>
            <H5>
              <Span>Movvy가?</Span>
              <span>오늘하루 무료라고!?</span>
            </H5>
          </ModalInnerContainer>
        </ModalBackgroundDeemContainer>
      )}
    </>
  );
};

export default ModalComponent;

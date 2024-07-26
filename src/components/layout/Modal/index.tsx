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
import { Xcircle } from "../../Context/\bindex";

const TIME_STORAGE = new Date().getDate().toString();

const ModalComponet = () => {
  const [modalCondition, setModalCondition] = useState<boolean>(true);
  const [checkToday, setCheckToday] = useState<boolean>(false);

  const checkOppositionEvent = () => {
    setCheckToday(!checkToday);
  };

  const closeModal = (): void => {
    setModalCondition(false);
  };

  const todayCloseModal = (): void => {
    if (checkToday) {
      localStorage.setItem("otherTime", TIME_STORAGE);
      closeModal();
    }
  };

  useEffect(() => {
    const GET_NOW_TIME = localStorage.getItem("otherTime");
    if (GET_NOW_TIME === TIME_STORAGE) {
      setModalCondition(false);
    }
  }, []);

  useEffect(() => {
    if (modalCondition) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [modalCondition]);

  return (
    <>
      {modalCondition && (
        <ModalBackgroundDeemContainer>
          <ModalInnerContainer>
            <Div onClick={closeModal}>
              <Xcircle />
            </Div>
            <CheckBoxContainer>
              <input
                type="checkBox"
                onChange={checkOppositionEvent}
                checked={checkToday}
              />

              <ModalBTN onClick={todayCloseModal}>오늘하루보지않기</ModalBTN>
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

export default ModalComponet;

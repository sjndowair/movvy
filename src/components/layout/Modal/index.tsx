import { useEffect, useState } from "react";
import {
  H5,
  ModalBackgroundDeemContainer,
  ModalInnerContainer,
  Span,
} from "./style";
import { Xcircle } from "../../Context/\bindex";

const ModalComponet = () => {
  const [modalCondition, setModalCondition] = useState<boolean>(true);

  const closeModal = (): void => {
    setModalCondition(false);
  };

  useEffect(() => {
    if (modalCondition) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "initial";
    }
    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [closeModal]);

  return (
    <>
      {modalCondition && (
        <ModalBackgroundDeemContainer>
          <ModalInnerContainer>
            <div onClick={closeModal}>
              <Xcircle></Xcircle>
            </div>
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

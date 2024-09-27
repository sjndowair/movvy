import styled from "styled-components";
import { mediaSize } from "../../components/Theme/theme";

export const SortBox = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
`;

export const TemporaryIframe = styled.iframe`
  position: absolute;
  z-index: 0;
`;

export const CardCollectionBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -10rem;
  width: 100%;
  height: auto;
`;

export const SubPageContainer = styled.div`
  background-color: rgba(0, 0, 0, 1);
  width: 100%;
  height: 100vw;
  color: rgba(255, 255, 255, 1);
`;

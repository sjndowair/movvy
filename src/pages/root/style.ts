import styled from "styled-components";
import { mediaSize } from "../../components/theme/theme"; // 안쓰는 import 제거

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
  width: 100%;
  height: auto;
`;

export const SubPageContainer = styled.div`
  background-color: ${({ theme }) => theme.background.body};
  width: 100%;
  height: 100vw;
  color: ${({ theme }) => theme.color.average};
`;

import styled from "styled-components";
import { mediaSize } from "../components/Theme/theme";

export const SortBox = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
`;

export const MainTitle = styled.div`
  position: relative;
  z-index: 2;
`;
export const MainTitleImg = styled.img`
  width: 100%;
  height: auto;
`;

export const BackgroundDimEffectBox = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 56.3vw;
  z-index: 2;
`;

export const MainTitleName = styled.h5`
  color: rgb(220, 220, 220);
  font-weight: 700;
  position: absolute;
  z-index: 2;
  top: 30%;
  left: 4rem;
  font-size: 7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  ${mediaSize.tablet} {
    font-size: 5rem;
  }
  ${mediaSize.mobile} {
    font-size: 3rem;
  }
`;
export const MainTitleOverView = styled.p`
  position: absolute;
  color: rgb(220, 220, 220);
  width: 80%;
  z-index: 2;
  font-weight: 600;
  font-size: 1.75rem;
  left: 4rem;
  bottom: 20%;
  line-height: 1.8;
  ${mediaSize.tablet} {
    font-size: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  ${mediaSize.mobile} {
    font: 0.75rem;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const TemporaryIframe = styled.iframe`
  position: absolute;
  z-index: 0;
`;

export const CardCollectionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

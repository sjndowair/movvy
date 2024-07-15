import styled from "styled-components";

export const SortBox = styled.div`
  display: flex;
`;

export const MoivesImgBox = styled.div`
  width: 300px;
  height: auto;
  position: relative;
`;

export const MainTitle = styled.div`
  position: relative;
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
`;
export const MainTitleOverView = styled.p`
  position: absolute;
  color: rgb(220, 220, 220);
  width: 90%;
  z-index: 2;
  font-weight: 600;
  font-size: 1.75rem;
  left: 4rem;
  bottom: 20%;
  line-height: 1.8;
`;

export const MoviesTitleName = styled.h5`
  position: absolute;
  font-size: 2.5rem;
  color: rgb(220, 220, 220);
  top: 50%;
`;

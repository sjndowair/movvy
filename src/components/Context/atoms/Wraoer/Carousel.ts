import styled from "styled-components";

export const Background = styled.div`
  max-width: 900px;
  width: 90%;
  height: 50vh;
  overflow: hidden;

  position: relative;
`;

export const SlideBtn = styled.button`
  z-index: 100;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgBox = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  img,
  picture {
    width: 20%;
    height: 100%;
    object-fit: cover;
  }
`;

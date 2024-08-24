import styled from "styled-components";

export const VideoDeemBackground = styled.div`
  width: 100%;
  position: fixed;
  height: auto;
  top: 0;
  left: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  height: 140vh;
  justify-content: center;

  align-items: first baseline;
`;

export const VideoWrapper = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #000;
  position: relative;
  z-index: 100;
  gap: 2rem;
  margin-top: 10rem;
  padding: 2rem;
`;

export const PlayerWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: none;
`;

export const PlayerIMG = styled.img`
  max-width: 500px;
  width: 100%;
`;

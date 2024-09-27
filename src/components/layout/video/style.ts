import styled from "styled-components";
import { mediaQuery } from "../../Theme/theme";
import { getImagePath } from "../../../utils/image.util";

export const VideoDeemBackground = styled.div`
  width: 100%;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: baseline;
`;

interface IIvideoWrapper {
  videoVisible: boolean;
}

export const VideoWrapper = styled.div<IIvideoWrapper>`
  opacity: ${(props) => (props.videoVisible ? 1 : 0)};
  border-radius: 0.5rem;
  display: flex;
  max-width: 800px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(50, 50, 50, 1);
  box-shadow: 0 70px 70px rgba(0, 0, 0, 1), 0 30px 30px rgba(0, 0, 0, 0.7);
  position: relative;
  z-index: 100;
  gap: 1.5rem;
  margin-top: 13rem;
  transition: all 1.5s ease;

  ${mediaQuery(860)} {
    max-width: 600px;

    ${mediaQuery(630)} {
      max-width: 400px;
    }

    ${mediaQuery(560)} {
      margin-top: 5rem;
    }
  }
`;

export const PlayerWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  height: 400px;
  background: none;
  ${mediaQuery(860)} {
    max-height: 400px;
    height: auto;
  }
`;

interface IPosterProps {
  $posterPath: any;
}

export const PlayerIMG = styled.img<IPosterProps>`
  max-width: 1000px;
  width: 100%;
  ${mediaQuery(560)} {
    content: url(${(props) => getImagePath(props.$posterPath)});
  }
`;

export const VideoInstructionBox = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0 1.25rem;
  max-width: 700px;
  width: 100%;
  flex-direction: column;
  p {
    font-size: 1.5rem;
    padding-bottom: 2rem;
    line-height: 2.5rem;
  }
`;

export const VideoTitle = styled.h5`
  font-size: 2rem;
  padding-top: 2rem;
  font-weight: ${({ theme }) => theme.font.bold};
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  ${mediaQuery(660)} {
    flex-direction: column;
  }
`;

export const GenresBox = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  transition: all 0.5s;
  flex-wrap: wrap;
  ${mediaQuery(660)} {
    margin-top: 1.5rem;
    gap: 0.75rem;
  }
`;

export const GenresEachBox = styled.div`
  border: 2px solid ${({ theme }) => theme.color.primary};
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 800;
`;

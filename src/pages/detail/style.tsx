import styled from "styled-components";
import { mediaQuery, mediaSize } from "../../components/theme/theme";

interface IDetailContainer {
  $background: string;
  isDark: boolean;
}

export const DetailContainer = styled.div<IDetailContainer>`
  background: url(${(props) => props.$background}) 50% 50% no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  width: 100%;
  padding: 20rem 2rem;
  justify-content: center;
  align-items: flex-start;
  gap: 10rem;
  height: auto;
  position: relative;
  transition: flex-direction 1s ease;
  z-index: 1;

  &:after {
    content: "";
    background-color: ${({ theme }) => theme.background.detail};
    position: absolute;
    width: 100%;
    max-width: 100vw;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  ${mediaSize.tablet} {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  ${mediaQuery(670)} {
    padding: 0 3rem;
  }
`;

export const LayoutContain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  position: relative;
  z-index: 2;
  max-width: 100vw;

  .react-player__preview {
    max-width: 95vw;
  }

  ${mediaSize.mobile} {
    max-width: 100vw;
    padding: 10rem 1rem 0;
    overflow: hidden;
  }
`;

export const Poster = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  margin-bottom: 10rem;
  position: relative;
  z-index: 2;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 1), 0 16px 17px rgba(0, 0, 0, 0.7);
`;

export const Title = styled.h5`
  font-size: 3rem;
  font-weight: 800;
  padding-top: 2rem;
`;

interface IOverViewProps {
  $isDark: boolean;
}

export const OverView = styled.div<IOverViewProps>`
  max-width: 600px;
  width: 100%;
  line-height: 2;
  font-weight: ${({ $isDark }) => (!$isDark ? "600" : "400")};
  font-size: 2rem;
`;

export const AlreadyBox = styled.div`
  font-size: 3rem;
  padding-top: 10rem;
  font-weight: 700;
  padding-bottom: 5rem;
`;

export const PlayerWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const BackArrowWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 5rem;
  background-color: ${({ theme }) => theme.background.footer};
  justify-content: center;
  align-items: center;
`;

export const BackArrow = styled.div`
  width: 30px;
  height: auto;
  cursor: pointer;
`;

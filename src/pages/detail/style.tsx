import styled from "styled-components";
import { mediaQuery } from "../../components/Theme/theme";

interface IDetailContainer {
  $background: string;
}

export const DetailContainer = styled.div<IDetailContainer>`
  background: url(${(props) => props.$background}) 50% 50% no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  width: 100%;
  padding-top: 7rem;
  justify-content: center;
  align-items: flex-start;
  gap: 10rem;
  height: auto;
  position: relative;
  transition: flex-direction 1s ease;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  ${mediaQuery(1300)} {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  ${mediaQuery(670)} {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  position: relative;
  z-index: 2;

  ${mediaQuery(670)} {
    max-width: 500px;
    overflow: hidden;
  }
`;

export const Poster = styled.img`
  max-width: 500px;
  width: 100%;
  height: 600px;
  margin-bottom: 5rem;
  position: relative;
  z-index: 2;

  box-shadow: 0 20px 20px rgba(0, 0, 0, 1), 0 16px 17px rgba(0, 0, 0, 0.7);
`;

export const Title = styled.h5`
  font-size: 3rem;
  font-weight: 800;
`;

export const OverView = styled.div`
  max-width: 600px;
  width: 100%;
  line-height: 2;
  font-size: 1.5rem;
`;

export const AlreadyBox = styled.div`
  font-size: 3rem;
  padding-top: 10rem;
  font-weight: 700;
  padding-bottom: 5rem;
`;

export const PlayerWrapper = styled.div`
  .ReactPlayer {
    ${mediaQuery(720)} {
    }
  }
`;

export const BackArrowWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 5rem;
  background-color: #111;
  justify-content: center;
  align-items: center;
`;

export const BackArrow = styled.div`
  width: 30px;
  height: auto;
  cursor: pointer;
`;

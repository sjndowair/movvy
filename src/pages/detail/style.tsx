import styled from "styled-components";

interface IDetailContainer {
  background: string;
}

export const DetailContainer = styled.div<IDetailContainer>`
  background: url(${(props) => props.background}) 50% 50% no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  width: 100%;
  height: 100vh;
  padding-top: 7rem;
  justify-content: center;
  align-items: flex-start;
  gap: 10rem;
  position: relative;
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
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

export const Poster = styled.img`
  max-width: 500px;
  width: 100%;
  max-height: 600px;
  height: 100%;
  position: relative;
  z-index: 2;
  box-shadow: 0 36px 36px rgba(0, 0, 0, 1), 0 16px 17px rgba(0, 0, 0, 0.7);
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

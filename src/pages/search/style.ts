import styled from "styled-components";
import { mediaQuery } from "../../components/Theme/theme";

export const ProgramBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding-top: 5rem;
  align-items: center;
  transition: all 0.5s;
`;

export const EachBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  font-size: ${({ theme }) => theme.text.md};

  transition: all 0.5s ease-out;
  &:hover {
    scale: 1.1;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const ProgramIMG = styled.img`
  width: 300px;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const NoDataMessage = styled.p`
  font-size: 3rem;
  width: 100%;
  text-align: center;
`;

export const SearchNoticeTitle = styled.h5`
  font-size: 3.2rem;
  font-weight: 700;
  font-style: italic;
  color: ${({ theme }) => theme.color.primary};
  padding-top: 10rem;
  width: 100%;
  max-width: 1300px;
  margin: auto;
  ${mediaQuery(1399)} {
    display: flex;
    justify-content: center;
  }
`;

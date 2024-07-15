import styled from "styled-components";

export const Notice = styled.div`
  background: #222;
  color: #fff;
  height: 5rem;
  display: flex;
  align-items: center;
  border-top: solid 1px gray;
  border-bottom: solid 1px gray;
  margin-top: 2rem;
`;

export const WidthControlContainer = styled.div`
  width: 90%;
  gap: 2rem;
  align-items: center;
  display: flex;
  margin: auto;
  height: inherit;
  position: relative;
`;

export const NoticeTitleContainer = styled.div`
  font-size: ${({ theme }) => theme.text.xxl};
`;

export const NoticeContantsIndex = styled.li`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const NoticeArrowContainer = styled.div`
  margin-right: 1.25rem;
`;

export const NoticePrevBtnContainer = styled.button`
  width: 2.5rem;
  height: 2.5rem;
`;

export const NoticeNextBtnContainer = styled.button`
  width: 2.5rem;
  height: 2.5rem;
`;

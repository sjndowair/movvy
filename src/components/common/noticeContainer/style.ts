import styled from "styled-components";

export const Notice = styled.div`
  background: #222;
  color: #fff;
  height: 5rem;
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

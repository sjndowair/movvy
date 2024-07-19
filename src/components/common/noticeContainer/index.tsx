import React from "react";
import { useEffect, useState } from "react";
import {
  Notice,
  NoticeContantsIndex,
  NoticeTitleContainer,
  WidthControlContainer,
  NoticeArrowContainer,
  NoticeNextBtnContainer,
  NoticePrevBtnContainer,
  SvgStyleSheetContainer,
} from "./style";

import { NOTICE_CONTENT_LIST } from "../../../constants/notice-content.constant";

export const NoticeChevronUpIcon = (props: any) => {
  return (
    <SvgStyleSheetContainer
      fill="rgba(50, 50, 50, 0.5)"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </SvgStyleSheetContainer>
  );
};

export const NoticeChevronDownIcon = (props: any) => {
  return (
    <SvgStyleSheetContainer
      fill="rgba(50, 50, 50, 0.5)"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </SvgStyleSheetContainer>
  );
};

const NoticeContainer = () => {
  const [noticeIndex, setNoticeIndex] = useState<number>(0);
  const [noticeState, setNoticeState] = useState({
    isActive: 0,
    isDown: false,
  });

  const clickPrevNoticeChangeEvent = () => {
    setNoticeState((pre) => ({
      isActive:
        pre.isActive === 0 ? NOTICE_CONTENT_LIST.length - 1 : pre.isActive - 1,
      isDown: false,
    }));
  };

  const clickNextNoticeChangeEvent = () => {
    setNoticeState((pre) => ({
      isActive:
        pre.isActive + 1 === NOTICE_CONTENT_LIST.length ? 0 : pre.isActive + 1,
      isDown: true,
    }));
  };

  console.log(noticeState.isActive);

  const prevNotice = () => {
    setNoticeIndex(
      (pre) =>
        (pre - 1 + NOTICE_CONTENT_LIST.length) % NOTICE_CONTENT_LIST.length
    );
  };

  const nextNotice = () => {
    setNoticeIndex((pre) => (pre + 1) % NOTICE_CONTENT_LIST.length);
  };

  useEffect(() => {
    const noticeInterval = setInterval(nextNotice, 5000);

    return () => clearInterval(noticeInterval);
  }, []);

  return (
    <Notice>
      <WidthControlContainer>
        <NoticeTitleContainer>공지사항</NoticeTitleContainer>
        <ul>
          {NOTICE_CONTENT_LIST.map((item, index) => (
            <NoticeContantsIndex
              key={index}
              isActive={index === noticeState.isActive}
              isDown={noticeState.isDown}
            >
              {item}
            </NoticeContantsIndex>
          ))}
        </ul>
      </WidthControlContainer>
      <NoticeArrowContainer>
        <NoticeNextBtnContainer onClick={clickPrevNoticeChangeEvent}>
          <NoticeChevronUpIcon />
        </NoticeNextBtnContainer>
        <NoticePrevBtnContainer onClick={clickNextNoticeChangeEvent}>
          <NoticeChevronDownIcon />
        </NoticePrevBtnContainer>
      </NoticeArrowContainer>
    </Notice>
  );
};

export default NoticeContainer;

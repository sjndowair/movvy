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
} from "./style";

import { NOTICE_CONTENT_LIST } from "../../../constants/notice-content.constant";

export const NoticeChevronUpIcon = (props: any) => {
  return (
    <svg
      dataSlot="icon"
      fill="none"
      strokeWidth={1.5}
      stroke="gray"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};

export const NoticeChevronDownIcon = (props: any) => {
  return (
    <svg
      dataSlot="icon"
      fill="none"
      strokeWidth={1.5}
      stroke="gray"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const NoticeContainer = () => {
  const [noticeIndex, setNoticeIndex] = useState<number>(0);

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
              style={{ display: index === noticeIndex ? "block" : "none" }}
            >
              {item}
            </NoticeContantsIndex>
          ))}
          ;
        </ul>
      </WidthControlContainer>
      <NoticeArrowContainer>
        <NoticeNextBtnContainer onClick={prevNotice}>
          <NoticeChevronUpIcon />
        </NoticeNextBtnContainer>
        <NoticePrevBtnContainer onClick={nextNotice}>
          <NoticeChevronDownIcon />
        </NoticePrevBtnContainer>
      </NoticeArrowContainer>
    </Notice>
  );
};

export default NoticeContainer;

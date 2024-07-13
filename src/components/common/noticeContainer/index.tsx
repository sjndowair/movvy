import React from "react";
import { useEffect, useState } from "react";

import {
  Notice,
  NoticeContantsIndex,
  NoticeTitleContainer,
  WidthControlContainer,
} from "./style";

import { NOTICE_CONTENT_LIST } from "../../../constants/notice-content-constant";

const NoticeContainer = () => {
  const [noticeIndex, setNoticeIndex] = useState<number>(0);

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
    </Notice>
  );
};

export default NoticeContainer;

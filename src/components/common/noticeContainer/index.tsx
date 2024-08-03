import React from "react";
import { useEffect, useState } from "react";
import {
  Notice,
  NoticeContantsIndex,
  NoticeTitleContainer,
  WidthControlContainer,
  NoticeArrowContainer,
} from "./style";
import { UpArrowButton, DownArrowButton } from "../svg/index";

import { NOTICE_CONTENT_LIST } from "../../../constants/notice-content.constant";

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

  useEffect(() => {
    const noticeInterval = setInterval(clickNextNoticeChangeEvent, 5000);

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
        <button onClick={clickPrevNoticeChangeEvent}>
          <UpArrowButton />
        </button>
        <button onClick={clickNextNoticeChangeEvent}>
          <DownArrowButton />
        </button>
      </NoticeArrowContainer>
    </Notice>
  );
};

export default NoticeContainer;

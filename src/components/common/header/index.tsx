import React, { useEffect } from "react";
import { useState } from "react";
import { GNB_MENUS_LIST } from "../../../constants/nav-menus.constant";
import {
  Head,
  List,
  H1,
  MyPage,
  TabletToggleContainer,
  RotateIconContainer,
  ListIndex,
  HeadLeftContainer,
  HeadInnerContainer,
} from "./style";

export const Magnifier = () => {
  return (
    <svg
      cursor="pointer"
      width="16"
      height="16"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.4508 8.90796C15.4508 12.4977 12.5396 15.408 8.94985 15.408C5.3611 15.408 2.45081 12.4977 2.45081 8.90796C2.45081 5.31825 5.3611 2.40796 8.94985 2.40796C12.5396 2.40796 15.4508 5.31825 15.4508 8.90796Z"
        stroke="#fff"
        stroke-width="2"
      ></path>
      <path
        d="M14.0474 13.6536L19.7904 19.2229"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
      ></path>
    </svg>
  );
};

export const GnbReduceToggleMenu = ({ iconClickRotate, ...props }: any) => {
  const strokeChangeEvent = iconClickRotate ? "rgb(255, 111, 15)" : "#fff";
  return (
    <svg
      dataSlot="icon"
      fill="none"
      strokeWidth={0.5}
      stroke={strokeChangeEvent}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

interface IGnbToggleProps {
  onToggleMenu: () => void;
}

const Header = ({ onToggleMenu }: IGnbToggleProps) => {
  const [rotateToggle, setRotateToggle] = useState<boolean>(false);
  const [scrollEvent, setScrollEvent] = useState<boolean>(false);

  const headScrollEvent = () => {
    setScrollEvent(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", headScrollEvent);
    return () => {
      window.addEventListener("scroll", headScrollEvent);
    };
  }, []);

  const iconClickRotate = (): void => {
    onToggleMenu();
    setRotateToggle(!rotateToggle);
  };

  return (
    <Head handleScrollEvent={scrollEvent}>
      <HeadInnerContainer>
        <HeadLeftContainer>
          <H1>movvy</H1>
          <nav>
            <List>
              {GNB_MENUS_LIST.map((item, idx) => (
                <ListIndex key={idx}>{item}</ListIndex>
              ))}
            </List>
          </nav>
        </HeadLeftContainer>
        <div>
          <MyPage>
            <li>
              <Magnifier />
            </li>
          </MyPage>
        </div>
        <TabletToggleContainer>
          <RotateIconContainer iconClickRotate={rotateToggle}>
            <GnbReduceToggleMenu
              iconClickRotate={rotateToggle}
              onClick={iconClickRotate}
            ></GnbReduceToggleMenu>
          </RotateIconContainer>
        </TabletToggleContainer>
      </HeadInnerContainer>
    </Head>
  );
};
//

export default Header;

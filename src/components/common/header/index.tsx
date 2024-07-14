import React from "react";
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
} from "./style";

const UserCircleIcon = (props: any) => {
  return (
    <svg
      width="25"
      height="25"
      cursor="pointer"
      dataSlot="icon"
      fill="none"
      strokeWidth={1.5}
      stroke="#fff"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};

export const Magnifier = () => {
  return (
    <svg
      cursor="pointer"
      data-v-d955b8b8=""
      width="22"
      height="22"
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
      strokeWidth={1}
      stroke={strokeChangeEvent}
      viewBox="0 0 22 22"
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
export const ChevronLeftIcon: any = (props: any) => {
  return (
    <svg
      dataSlot="icon"
      fill="none"
      strokeWidth={2.5}
      stroke="rgb(255, 111, 15)"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
};

export const ChevronRightIcon: any = (props: any) => {
  return (
    <svg
      dataSlot="icon"
      fill="none"
      strokeWidth={2.5}
      stroke="rgb(255, 111, 15)"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

interface IGnbToggleProps {
  onToggleMenu: () => void;
}

const Header = ({ onToggleMenu }: IGnbToggleProps) => {
  const [rotateToggle, setRotateToggle] = useState<boolean>(false);

  const iconClickRotate = (): void => {
    onToggleMenu();
    setRotateToggle(!rotateToggle);
  };

  return (
    <Head>
      <H1>movvy</H1>
      <nav>
        <List>
          {GNB_MENUS_LIST.map((item, idx) => (
            <ListIndex key={idx}>{item}</ListIndex>
          ))}
        </List>
      </nav>
      <div>
        <MyPage>
          <li>
            <Magnifier />
          </li>
          <li>
            <UserCircleIcon />
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
    </Head>
  );
};
//

export default Header;

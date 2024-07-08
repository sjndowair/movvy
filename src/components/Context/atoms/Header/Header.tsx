import styled from "styled-components";
import createGlobalStyle from "styled-components";
import { Head, List, H1, MyPage } from "./head-style";

const NAV_MENUS = [
  "드라마",
  "영화",
  "애니",
  "해외시리즈",
  "시사교양",
  "키즈",
  "영화플러스",
  "LIVE",
];

const Header = () => {
  return (
    <Head>
      <H1>movvy</H1>
      <nav>
        <List>
          {NAV_MENUS.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </List>
      </nav>
      <div>
        <MyPage>
          <li>
            <svg
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
                stroke="#A5A5A5"
                stroke-width="2"
              ></path>
              <path
                d="M14.0474 13.6536L19.7904 19.2229"
                stroke="#A5A5A5"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
            </svg>
          </li>
          <li>My</li>
        </MyPage>
      </div>
    </Head>
  );
};
//

export default Header;

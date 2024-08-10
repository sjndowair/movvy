import { useEffect, useCallback } from "react";
import { throttle } from "lodash";
import { useState } from "react";
import {
  HeadContainer,
  List,
  H1,
  ListIndex,
  HeadInnerContainer,
} from "./style";
import { Magnifiy } from "../svg/index";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrollEvent, setScrollEvent] = useState<boolean>(false);

  const handleScrollEvent = throttle(() => {
    setScrollEvent(window?.scrollY > 0);
  }, 33);

  useEffect(() => {
    window?.addEventListener("scroll", handleScrollEvent);
    return () => window?.removeEventListener("scroll", handleScrollEvent);
  }, [handleScrollEvent]);

  return (
    <HeadContainer handleScrollEvent={scrollEvent}>
      <HeadInnerContainer>
        <Link to={"/"}>
          <H1>movvy</H1>
        </Link>
        <nav>
          <List>
            <Link to={"/"}>
              <ListIndex>HOME</ListIndex>
            </Link>
            <Link to={"/SeriesPage"}>
              <ListIndex>SERIES</ListIndex>
            </Link>
          </List>
        </nav>
      </HeadInnerContainer>
      <Link to={"/thisIsSearchPage"}>
        <Magnifiy />
      </Link>
    </HeadContainer>
  );
};
//

export default Header;

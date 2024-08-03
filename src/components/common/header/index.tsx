import { useEffect } from "react";
import { useState } from "react";
import { GNB_MENUS_LIST } from "../../../constants/nav-menus.constant";
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

  const handleScrollEvent = () => {
    setScrollEvent(window?.scrollY > 0);
  };

  useEffect(() => {
    window?.addEventListener("scroll", handleScrollEvent);
    return () => window?.addEventListener("scroll", handleScrollEvent);
  }, []);

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
            <Link to={"/thisIsSubPage"}>
              <ListIndex>SERIESE</ListIndex>
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

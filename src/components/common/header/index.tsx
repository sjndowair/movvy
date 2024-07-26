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
import { Magnifiy } from "../../Context/index";
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
        <H1>movvy</H1>
        <nav>
          <List>
            <ListIndex>HOME</ListIndex>
            <Link to={"/thisIsTestPage"}>
              <ListIndex>MOVVY</ListIndex>
            </Link>
          </List>
        </nav>
      </HeadInnerContainer>
      <Magnifiy />
    </HeadContainer>
  );
};
//

export default Header;

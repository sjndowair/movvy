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

interface IGnbToggleProps {
  onToggleMenu: () => void;
}

const Header = ({ onToggleMenu }: IGnbToggleProps) => {
  const [rotateToggle, setRotateToggle] = useState<boolean>(false);
  const [scrollEvent, setScrollEvent] = useState<boolean>(false);

  const headScrollEvent = () => {
    setScrollEvent(window?.scrollY > 0);
    console.log("useEffect");
  };

  useEffect(() => {
    window?.addEventListener("scroll", headScrollEvent);
    return () => window?.addEventListener("scroll", headScrollEvent);
  }, []);

  return (
    <HeadContainer handleScrollEvent={scrollEvent}>
      <HeadInnerContainer>
        <H1>movvy</H1>
        <nav>
          <List>
            {GNB_MENUS_LIST.map((item, idx) => (
              <ListIndex key={idx}>{item}</ListIndex>
            ))}
          </List>
        </nav>
      </HeadInnerContainer>
      <Magnifiy />
    </HeadContainer>
  );
};
//

export default Header;

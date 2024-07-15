import {
  FooterContainer,
  FooterNavigation,
  FooterNavMarginBox,
  FooterNavigationElement,
} from "./style";

import { FOOTER_MENU_CONTAINER } from "../../../constants/footer-menus.constant";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNavMarginBox>
        <FooterNavigation>
          {FOOTER_MENU_CONTAINER.map((items, index) => (
            <FooterNavigationElement key={index}>
              {items}
            </FooterNavigationElement>
          ))}
        </FooterNavigation>
      </FooterNavMarginBox>
    </FooterContainer>
  );
};

export default Footer;

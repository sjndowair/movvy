//내부 스테이트
import { useState } from "react";
//캐러셀 임폴트용
import CardCarousel from "../components/common/cardCarousel";
import MainCarousel from "../components/pages/root/mainCarousel";
//레이아웃 임폴트
import Layout from "../components/layout";
import NoticeContainer from "../components/common/noticeContainer";
//더미데이터 가져오는거
import { CAROUSEL_TITLE_LIST } from "../constants/nav-menus.constant";
import { GNB_MENUS_LIST } from "../constants/nav-menus.constant";
//스타일드 컴포넌트
import {
  HeaderToggleMenu,
  TabletGnb,
  TabletGnbList,
} from "../components/pages/root/mainCarousel/style";
import { CardDisChargeContainer } from "../components/Theme/global-style";
const Home = () => {
  const [headerToggle, setHeaderToggle] = useState<boolean>(false);

  const handleToggleMenu = (): void => {
    setHeaderToggle((prev) => (prev = !prev));
  };

  return (
    <>
      <Layout headerToggle={headerToggle} iconClickRotate={handleToggleMenu}>
        {headerToggle ? (
          <HeaderToggleMenu>
            <TabletGnb>
              {GNB_MENUS_LIST.map((item, index) => (
                <TabletGnbList key={index}>{item}</TabletGnbList>
              ))}
            </TabletGnb>
          </HeaderToggleMenu>
        ) : null}
        <MainCarousel />
        <CardDisChargeContainer>
          {CAROUSEL_TITLE_LIST.map((title, index) => (
            <CardCarousel key={index} title={title} />
          ))}
        </CardDisChargeContainer>
        <NoticeContainer></NoticeContainer>
      </Layout>
    </>
  );
};

export default Home;

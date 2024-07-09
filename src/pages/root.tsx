import CardCarousel from "../components/common/cardCarousel";
import Layout from "../components/layout";
import MainCarousel from "../components/pages/root/mainCarousel";
import { CAROUSEL_TITLE_LIST } from "../constants/nav-menus.constant";

const Home = () => {
    return (
        <Layout>
            <MainCarousel />
            <div>
                {CAROUSEL_TITLE_LIST.map((title, index) => (
                    <CardCarousel key={index} title={title} />
                ))}
            </div>
        </Layout>
    );
};

export default Home;

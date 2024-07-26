import { SubPageContainer } from "./style";
import Home from "./root";
import Layout from "../components/layout";
import Header from "../components/common/header";
import CardCarouselComponent from "../components/common/cardCarousel";
CardCarouselComponent;
import { CardCarouselProps } from "../components/common/cardCarousel";

const SubPage = ({ title, fetchMovies }: CardCarouselProps) => {
  return (
    <>
      <Header></Header>;
      <CardCarouselComponent
        title={title}
        fetchMovies={fetchMovies}
      ></CardCarouselComponent>
    </>
  );
};

export default SubPage;

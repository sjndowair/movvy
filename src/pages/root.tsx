//내부 스테이트
import { useEffect, useState } from "react";
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
  MainTitleImg,
  MainTitleName,
  MoivesImgBox,
  MoviesTitleName,
  BackgroundDimEffectBox,
  MainTitleOverView,
  MainTitle,
  SortBox,
} from "./style";
import {
  HeaderToggleMenu,
  TabletGnb,
  TabletGnbList,
} from "../components/pages/root/mainCarousel/style";
import { CardDisChargeContainer } from "../components/Theme/global-style";
import {
  getNowPlayingMovieList,
  getTopRatedMovieList,
} from "../apis/movieList.api";
import { getImagePath } from "../utils/image.util";
import { IMovie } from "../types/movieList";
import { Link } from "react-router-dom";
import { getVideoByMovieId } from "../apis/videos.api";
import { IVideo } from "../types/videos";
import { getVideoPath } from "../utils/video.util";

const Home = () => {
  const [headerToggle, setHeaderToggle] = useState<boolean>(false);
  const [movies, setMovies] = useState<IMovie[]>();
  const [rateMovies, setRateMovies] = useState<IMovie[]>();
  const [tmpVideo, setTmpVideo] = useState<IVideo>();
  const [randomMovie, setRandomMovie] = useState<IMovie | null>(null);

  const handleToggleMenu = (): void => {
    setHeaderToggle((prev) => (prev = !prev));
  };

  useEffect(() => {
    getNowPlayingMovieList().then((res) => setMovies(res.results));
  }, []);

  useEffect(() => {
    getNowPlayingMovieList().then((res) => {
      setMovies(res.results);
      console.log(res);
      if (res.results.length > 0) {
        const randomMovieIndex = Math.floor(Math.random() * res.results.length);
        setRandomMovie(res.results[randomMovieIndex]);
      }
    });
  }, []);

  useEffect(() => {
    getTopRatedMovieList().then((res) => {
      setRateMovies(res.results);
      // console.log(res);
    });
  });

  useEffect(() => {
    if (movies?.length) {
      getVideoByMovieId(movies[0].id).then((res) =>
        setTmpVideo(res.results[0])
      );
    }
  }, [movies]);

  return (
    <>
      <Layout headerToggle={headerToggle} iconClickRotate={handleToggleMenu}>
        <Link to={"/thisIsTestPage"}>
          <button>클릭하면 임시페이지로 감 ㅋㅋ</button>
        </Link>

        {!tmpVideo ? (
          <p>Now Loading...</p>
        ) : (
          <iframe
            id="player"
            width="640"
            height="360"
            src={getVideoPath(tmpVideo.key)}
          />
        )}
        {randomMovie && (
          <MainTitle>
            <BackgroundDimEffectBox />
            <MainTitleImg
              src={getImagePath(randomMovie.backdrop_path)}
            ></MainTitleImg>
            <MainTitleName>{randomMovie.title}</MainTitleName>
            <MainTitleOverView>{randomMovie.overview}</MainTitleOverView>
          </MainTitle>
        )}
        <SortBox>
          {!movies?.length ? (
            <p>Now Loading...</p>
          ) : (
            movies.map((m, i) => (
              <MoivesImgBox>
                <div key={i}>
                  <img
                    width={"300px"}
                    height={"auto"}
                    src={getImagePath(m.backdrop_path)}
                  />
                  <MoviesTitleName
                    style={{ color: "white", fontSize: "3.5rem" }}
                  >
                    {m.title}
                  </MoviesTitleName>
                </div>
              </MoivesImgBox>
            ))
          )}
        </SortBox>
        <SortBox>
          {!movies?.length ? (
            <p>Now Loading...</p>
          ) : (
            rateMovies?.map((m, i) => (
              <MoivesImgBox>
                <div key={i}>
                  <img
                    width={"300px"}
                    height={"auto"}
                    src={getImagePath(m.backdrop_path)}
                  />
                  <MoviesTitleName
                    style={{ color: "white", fontSize: "3.5rem" }}
                  >
                    {m.title}
                  </MoviesTitleName>
                </div>
              </MoivesImgBox>
            ))
          )}
        </SortBox>
      </Layout>
    </>
  );
};

export default Home;

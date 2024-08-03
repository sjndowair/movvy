import { useEffect, useState } from "react";

import Layout from "../components/layout"; // 레이아웃 컴포넌트
import MainCarouselComponent from "../components/pages/root/mainCarousel"; // 메인 케러셀 컴포넌트
import CardCarouselComponent from "../components/common/cardCarousel"; // 카드 캐러셀 컴포넌트
import NoticeContainer from "../components/common/noticeContainer"; // 공지사항 컨테이너
import ScrollButton from "../components/layout/ScrollBtn";
import ModalComponent from "../components/layout/Modal";
import {
  getNowPlayingMovieList,
  getTopRatedMovieList,
  getPopularMovieList,
  getUpComingMovieList,
} from "../apis/movieList.api"; // 캐러셀 이미지 top and Now play 불러오기
import { getTvSeriesList } from "../apis/seriesList.api";
import { getImagePath } from "../utils/image.util"; // 이미지 링크
import { IMovie } from "../types/movieList"; // 무비 타입 정의
import { Link } from "react-router-dom"; //리액트 라우터 돔 불러오기

import { getVideoByMovieId } from "../apis/videos.api"; // 유튜브 링크 불러오기
import { IVideo } from "../types/videos"; // 비디오 타입 정의
import { getVideoPath } from "../utils/video.util"; // 비디오 리이크

import { CardCollectionBox } from "./style"; //스타일 컴포넌트

const LOCAL_STORAGE_NOT_TODAY_KEY = "LOCAL_STORAGE_NOT_TODAY_KEY";
const getTodayDate = () => {
  return new Date().toLocaleDateString("ko-kr", {
    dateStyle: "medium",
  });
};

const Home = () => {
  const [randomMovie, setRandomMovie] = useState<IMovie | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isCheckedNotToday, setIsCheckedNotToday] = useState<boolean>(false);

  const isCloseSetModal = () => {
    setIsOpenModal(false);
    if (isCheckedNotToday) {
      localStorage.setItem(LOCAL_STORAGE_NOT_TODAY_KEY, getTodayDate());
    }
  };

  useEffect(() => {
    const notTodayDate = localStorage.getItem(LOCAL_STORAGE_NOT_TODAY_KEY);
    if (!notTodayDate || notTodayDate !== getTodayDate()) {
      setIsOpenModal(true);
    }
  }, []);

  useEffect(() => {
    getNowPlayingMovieList().then((res) => {
      if (res.results.length > 0) {
        const randomMovieIndex = Math.floor(Math.random() * res.results.length);
        setRandomMovie(res.results[randomMovieIndex]);
      }
    });
  }, []);

  return (
    <Layout>
      <ModalComponent
        isOpenModal={isOpenModal}
        isCheckedNotToday={isCheckedNotToday}
        setIsCheckedNotToday={setIsCheckedNotToday}
        isCloseSetModal={isCloseSetModal}
      />
      <ScrollButton></ScrollButton>
      <MainCarouselComponent />
      <CardCollectionBox>
        <CardCarouselComponent
          title="Top Rated"
          fetchMovies={getTopRatedMovieList}
        />
        <CardCarouselComponent
          title="Popular"
          fetchMovies={getPopularMovieList}
        />
        <CardCarouselComponent
          title="Up Coming"
          fetchMovies={getUpComingMovieList}
        />
      </CardCollectionBox>
      <NoticeContainer />
    </Layout>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
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
import { IMovie, IMovieListResponse } from "../types/movieList"; // 무비 타입 정의

import { CardCollectionBox } from "./style"; //스타일 컴포넌트

const LOCAL_STORAGE_NOT_TODAY_KEY = "LOCAL_STORAGE_NOT_TODAY_KEY";

const getTodayDate = () => {
  return new Date().toLocaleDateString("ko-kr", {
    dateStyle: "medium",
  });
};

const Home = () => {
  const { data: nowPlaying, isLoading: isLoadingNowPlaying } =
    useQuery<IMovieListResponse>({
      queryKey: ["movie", "nowPlaying"],
      queryFn: getNowPlayingMovieList,
    });
  console.log(isLoadingNowPlaying);

  const { data: topRated, isLoading: isLoadingTopRated } =
    useQuery<IMovieListResponse>({
      queryKey: ["movie", "topRated"],
      queryFn: getTopRatedMovieList,
    });

  const { data: popular, isLoading: isLoadingPopular } =
    useQuery<IMovieListResponse>({
      queryKey: ["movie", "popular"],
      queryFn: getPopularMovieList,
    });

  const { data: upComing, isLoading: isLodingUpComing } =
    useQuery<IMovieListResponse>({
      queryKey: ["movie", "upComing"],
      queryFn: getUpComingMovieList,
    });

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
          IMovie={nowPlaying?.results.slice()}
          title="Top Rated"
          ApiType="movie"
        />
        <CardCarouselComponent
          IMovie={popular?.results.slice()}
          title="Popular"
          ApiType="movie"
        />
        <CardCarouselComponent
          IMovie={upComing?.results.slice()}
          title="Up Coming"
          ApiType="movie"
        />
        <CardCarouselComponent
          IMovie={topRated?.results.slice()}
          title="Top Lated"
          ApiType="movie"
        />
      </CardCollectionBox>
      <NoticeContainer />
    </Layout>
  );
};

export default Home;

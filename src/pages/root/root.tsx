import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Layout from "../../components/layout"; // 레이아웃 컴포넌트
import MainCarouselComponent from "../../components/pages/root/mainCarousel"; // 메인 케러셀 컴포넌트
import CardCarouselComponent from "../../components/common/cardCarousel"; // 카드 캐러셀 컴포넌트
import ScrollButton from "../../components/layout/ScrollBtn";
import ModalComponent from "../../components/layout/Modal";
import VideoPage from "../../components/layout/video/Video";
import {
  getNowPlayingMovieList,
  getTopRatedMovieList,
  getPopularMovieList,
  getUpComingMovieList,
} from "../../apis/movieList.api"; // 캐러셀 이미지 top and Now play 불러오기
import { IMovieListResponse } from "../../types/movieList"; // 무비 타입 정의
import { CardCollectionBox } from "./style"; //스타일 컴포넌트
import { useMatch } from "react-router-dom";

const LOCAL_STORAGE_NOT_TODAY_KEY = "LOCAL_STORAGE_NOT_TODAY_KEY";

//localstorage data save
const getTodayDate = () => {
  return new Date().toLocaleDateString("ko-kr", {
    dateStyle: "medium",
  });
};

const Home = () => {
  // tankstackQuery
  const { data: nowPlaying } = useQuery<IMovieListResponse>({
    queryKey: ["movie", "nowPlaying"],
    queryFn: getNowPlayingMovieList,
  });

  const { data: topRated } = useQuery<IMovieListResponse>({
    queryKey: ["movie", "topRated"],
    queryFn: getTopRatedMovieList,
  });

  const { data: popular } = useQuery<IMovieListResponse>({
    queryKey: ["movie", "popular"],
    queryFn: getPopularMovieList,
  });

  const { data: upComing } = useQuery<IMovieListResponse>({
    queryKey: ["movie", "upComing"],
    queryFn: getUpComingMovieList,
  });

  // modal state and scrollRock
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
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpenModal]);

  //react-router-dom
  const match = useMatch(`movie/:movieId`);

  const nowPlayingData = match?.params.movieId
    ? nowPlaying?.results.find(
        (i) => i.id?.toString() === match?.params.movieId
      )
    : null;

  const topRatedData = match?.params.movieId
    ? topRated?.results.find((i) => i.id?.toString() === match?.params.movieId)
    : null;

  const popularData = match?.params.movieId
    ? popular?.results.find((i) => i.id?.toString() === match?.params.movieId)
    : null;

  const upComingData = match?.params.movieId
    ? upComing?.results.find((i) => i.id?.toString() === match?.params.movieId)
    : null;

  useEffect(() => {
    if (match) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [match]);

  return (
    <Layout>
      <ModalComponent
        isOpenModal={isOpenModal}
        isCheckedNotToday={isCheckedNotToday}
        setIsCheckedNotToday={setIsCheckedNotToday}
        isCloseSetModal={isCloseSetModal}
      />

      <ScrollButton></ScrollButton>
      <MainCarouselComponent ApiType="movie" IMovie={nowPlaying?.results} />
      <CardCollectionBox>
        <CardCarouselComponent
          IMovie={nowPlaying?.results}
          title="NOW PLAYING"
          ApiType="movie"
          isMatch={match}
        />
        <CardCarouselComponent
          IMovie={popular?.results}
          title="POPULAR"
          ApiType="movie"
          isMatch={match}
        />
        <CardCarouselComponent
          IMovie={upComing?.results}
          title="UP COMING"
          ApiType="movie"
          isMatch={match}
        />
        <CardCarouselComponent
          IMovie={topRated?.results}
          title="TOP RATED"
          ApiType="movie"
          isMatch={match}
        />
      </CardCollectionBox>

      {match && (
        <VideoPage
          movieTotalData={
            nowPlayingData || topRatedData || popularData || upComingData
          }
          programId={match?.params?.movieId!}
          ApiType="movie"
        />
      )}
    </Layout>
  );
};

export default Home;

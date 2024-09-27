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
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { usePages } from "../../hooks/usePages";
import { movieListService } from "../../services/movieList.service";

const LOCAL_STORAGE_NOT_TODAY_KEY = "LOCAL_STORAGE_NOT_TODAY_KEY";

// 유틸 함수로 분리
//localstorage data save
const getTodayDate = () => {
    return new Date().toLocaleDateString("ko-kr", {
        dateStyle: "medium",
    });
};

const Home = () => {
    /**
     * 컴포넌트에서 나열할 때,
     * 1. 상태
     * 2. 훅
     * 3. API
     * 4. 단순 함수
     * 5. 생명 주기
     *
     * : 코드 작성 방법 통일 및 가독성 이슈 방지
     */

    /**
     * API 서비스 단으로 분리할 것
     * : 유지보수와 의존성의 문제.
     *    유지보수할 코드를 줄이는 것이 중요하기 때문에.
     */

    // tankstackQuery
    // const { data: nowPlaying } = useQuery<IMovieListResponse>({
    //     queryKey: ["movie", "nowPlaying"],
    //     queryFn: getNowPlayingMovieList,
    // });

    // const { data: topRated } = useQuery<IMovieListResponse>({
    //     queryKey: ["movie", "topRated"],
    //     queryFn: getTopRatedMovieList,
    // });

    // const { data: popular } = useQuery<IMovieListResponse>({
    //     queryKey: ["movie", "popular"],
    //     queryFn: getPopularMovieList,
    // });

    // const { data: upComing } = useQuery<IMovieListResponse>({
    //     queryKey: ["movie", "upComing"],
    //     queryFn: getUpComingMovieList,
    // });

    const { data: nowPlaying } = movieListService.useNowPlayingMovieList();
    const { data: topRated } = movieListService.useTopRatedMovieList();
    const { data: popular } = movieListService.usePopularMovieList();
    const { data: upComing } = movieListService.useUpcomingMovieList();

    // modal state and scrollRock
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [isCheckedNotToday, setIsCheckedNotToday] = useState<boolean>(false);
    const [hiddenCard, setHiddenCard] = useState<number[]>([]);
    const [isVideoOpacity, setIsVideoOpacity] = useState<boolean>(false);

    const removeHiddenCard = (programId: number) => {
        setHiddenCard((pre) => pre.filter((id) => id !== programId));
    };

    const { getItem, setItem } = useLocalStorage<string>(
        LOCAL_STORAGE_NOT_TODAY_KEY
    );

    const isCloseSetModal = () => {
        setIsOpenModal(false);

        if (isCheckedNotToday) {
            // localStorage.setItem(LOCAL_STORAGE_NOT_TODAY_KEY, getTodayDate());
            setItem(getTodayDate());
        }
    };

    useEffect(() => {
        // const notTodayDate = localStorage.getItem(LOCAL_STORAGE_NOT_TODAY_KEY);
        const notTodayDate = getItem();
        if (!notTodayDate || notTodayDate !== getTodayDate()) {
            setIsOpenModal(true);
        }
    }, []);

    useEffect(() => {
        if (isOpenModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset"; // initial
        }
    }, [isOpenModal]);

    //react-router-dom
    const match = useMatch(`movie/:movieId`);

    const { useMovieDetailPage } = usePages();

    /**
     * 변수명 잘 지을 것
     * parsed ~~~
     * converted ~~~
     */

    /**
     * 공통 부분 추상화/함수화
     * const getParsedData = (ogData: IMovie[]) => {
     *  if (match?.params.movieId) {
     *      return ogData.find((i) => i.id?.toString() === match?.params.movieId);
     *  }
     *  return ogData;
     * }
     */

    const nowPlayingData = useMovieDetailPage().isMovieIdPage
        ? nowPlaying?.results.find(
              (i) => i.id?.toString() === match?.params.movieId
          )
        : null;

    const topRatedData = match?.params.movieId
        ? topRated?.results.find(
              (i) => i.id?.toString() === match?.params.movieId
          )
        : null;

    const popularData = match?.params.movieId
        ? popular?.results.find(
              (i) => i.id?.toString() === match?.params.movieId
          )
        : null;

    const upComingData = match?.params.movieId
        ? upComing?.results.find(
              (i) => i.id?.toString() === match?.params.movieId
          )
        : null;

    useEffect(() => {
        if (match) {
            setIsVideoOpacity(true); //
            document.body.style.overflow = "hidden";
        } else {
            setIsVideoOpacity(false);
            setTimeout(() => {
                document.body.style.overflow = "initial"; // initial
            }, 300);
        }
    }, [match]);

    console.log(isVideoOpacity); // 콘솔 제거

    return (
        <Layout>
            <ModalComponent
                isOpenModal={isOpenModal}
                isCheckedNotToday={isCheckedNotToday}
                setIsCheckedNotToday={setIsCheckedNotToday}
                isCloseSetModal={isCloseSetModal}
            />

            {/* 페이지 단에서 앱 단으로 옮겨야 전역에서 보고 사용 가능 */}
            <ScrollButton></ScrollButton>
            <MainCarouselComponent IMovie={nowPlaying?.results} />
            <CardCollectionBox>
                <CardCarouselComponent
                    IMovie={nowPlaying?.results}
                    title="NOW PLAYING"
                    hiddenCard={hiddenCard}
                    setHiddenCard={setHiddenCard}
                />
                <CardCarouselComponent
                    IMovie={popular?.results}
                    title="POPULAR"
                    hiddenCard={hiddenCard}
                    setHiddenCard={setHiddenCard}
                />
                <CardCarouselComponent
                    IMovie={upComing?.results}
                    title="UP COMING"
                    hiddenCard={hiddenCard}
                    setHiddenCard={setHiddenCard}
                />
                <CardCarouselComponent
                    IMovie={topRated?.results}
                    title="TOP RATED"
                    hiddenCard={hiddenCard}
                    setHiddenCard={setHiddenCard}
                />
            </CardCollectionBox>

            {match && (
                <VideoPage
                    videoVisible={isVideoOpacity}
                    movieTotalData={
                        nowPlayingData ||
                        topRatedData ||
                        popularData ||
                        upComingData
                    }
                    programId={match?.params?.movieId!}
                    removeHiddenCard={removeHiddenCard}
                />
            )}
        </Layout>
    );
};

export default Home;

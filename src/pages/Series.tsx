import { useQuery } from "@tanstack/react-query";
import Layout from "../components/layout";
import ScrollButton from "../components/layout/ScrollBtn";
import MainCarouselComponent from "../components/pages/root/mainCarousel";
import CardCarouselComponent from "../components/common/cardCarousel";
import { CardCollectionBox } from "./root/style";
import {
    getAiringTodaySeriesList,
    getOnTheAirSeriesList,
    getPopularSeriesList,
    getTopRatedSeriesList,
} from "../apis/seriesList.api";
import { ITvSeriseResponse } from "../types/movieList";
import { useMatch } from "react-router-dom";
import VideoPage from "../components/layout/video/Video";
import { useEffect, useState } from "react";

const Series = () => {
    const [hiddenCard, setHiddenCard] = useState<number[]>([]);
    const [isVideoOpacity, setIsVideoOpactiy] = useState<boolean>(false);

    const removeHiddenCard = (programId: number) => {
        setHiddenCard((pre) => pre.filter((id) => id !== programId));
    };

    const seriesMatch = useMatch(`/series/:seriesId`);

    const { data: airingToday } = useQuery<ITvSeriseResponse>({
        queryKey: ["series", "airingToday"],
        queryFn: getAiringTodaySeriesList,
    });

    const { data: onTheAir } = useQuery<ITvSeriseResponse>({
        queryKey: ["series", "onTheAir"],
        queryFn: getOnTheAirSeriesList,
    });

    const { data: popular } = useQuery<ITvSeriseResponse>({
        queryKey: ["series", "popular"],
        queryFn: getPopularSeriesList,
    });

    const { data: topRated } = useQuery<ITvSeriseResponse>({
        queryKey: ["series", "topRated"],
        queryFn: getTopRatedSeriesList,
    });

    const airingTodayData = seriesMatch?.params.seriesId
        ? airingToday?.results.find(
              (it) => it.id.toString() === seriesMatch?.params.seriesId
          )
        : null;

    const onTheAirData = seriesMatch?.params.seriesId
        ? onTheAir?.results.find(
              (it) => it.id.toString() === seriesMatch?.params.seriesId
          )
        : null;

    const topRatedData = seriesMatch?.params.seriesId
        ? topRated?.results.find(
              (it) => it.id.toString() === seriesMatch?.params.seriesId
          )
        : null;

    const popularData = seriesMatch?.params.seriesId
        ? popular?.results.find(
              (it) => it.id.toString() === seriesMatch?.params.seriesId
          )
        : null;

    useEffect(() => {
        if (seriesMatch) {
            setIsVideoOpactiy(true);
            document.body.style.overflow = "hidden";
        } else {
            setIsVideoOpactiy(false);
            setTimeout(() => {
                document.body.style.overflow = "unset";
            }, 300);
        }
    }, [seriesMatch]);

    return (
        <>
            <Layout>
                <ScrollButton></ScrollButton>
                <MainCarouselComponent ITvSeries={topRated?.results} />
                <CardCollectionBox>
                    <CardCarouselComponent
                        ITvSerise={onTheAir?.results}
                        title="On the air"
                        hiddenCard={hiddenCard}
                        setHiddenCard={setHiddenCard}
                    />
                    <CardCarouselComponent
                        ITvSerise={popular?.results}
                        title="Popular"
                        hiddenCard={hiddenCard}
                        setHiddenCard={setHiddenCard}
                    />
                    <CardCarouselComponent
                        ITvSerise={airingToday?.results}
                        title="Airing today"
                        hiddenCard={hiddenCard}
                        setHiddenCard={setHiddenCard}
                    />
                    <CardCarouselComponent
                        ITvSerise={topRated?.results}
                        title="Top Rated"
                        hiddenCard={hiddenCard}
                        setHiddenCard={setHiddenCard}
                    />
                </CardCollectionBox>
                {seriesMatch && (
                    <VideoPage
                        videoVisible={isVideoOpacity}
                        seriesTotalData={
                            topRatedData ||
                            airingTodayData ||
                            onTheAirData ||
                            popularData
                        }
                        removeHiddenCard={removeHiddenCard}
                        programId={seriesMatch?.params.seriesId!}
                    />
                )}
            </Layout>
        </>
    );
};

export default Series;

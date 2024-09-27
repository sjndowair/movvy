import { useCallback, useEffect, useMemo, useState } from "react";
import { getImagePath } from "../../../../utils/image.util";
import { IMovie, ITvSerise } from "../../../../types/movieList";
import { useNavigate } from "react-router-dom";

import {
    ArrowInnerContainer,
    Slide,
    SlideContainer,
    MainTitle,
    MainTitleImg,
    MainTitleName,
    MainTitleOverView,
    ArrowButtonWrapper,
    BackgroundDimEffectBox,
} from "./style";
import { LeftArrowButton, RightArrowButton } from "../../../common/svg/index";

interface IMainCarousalProps {
    IMovie?: IMovie[];
    ITvSeries?: ITvSerise[];
}

const MainCarouselComponent = ({ IMovie, ITvSeries }: IMainCarousalProps) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [slideDirection, setSlideDirection] = useState<boolean>(false);

    const getItemCount = useCallback(
        () => IMovie?.length || ITvSeries?.length || 0,
        [IMovie, ITvSeries]
    );

    const prevClickSlideEvent = useCallback(() => {
        setCurrentIndex((pre) => (!pre ? getItemCount() - 1 : pre - 1));
    }, [getItemCount]);

    const nextClickSlideEvent = useCallback(() => {
        setCurrentIndex((pre) => (pre === getItemCount() - 1 ? 0 : pre + 1));
    }, [getItemCount]);

    useEffect(() => {
        const mainCarouselInterval = setInterval(() => {
            setSlideDirection(false);
            nextClickSlideEvent();
        }, 10000);

        return () => clearInterval(mainCarouselInterval);
    }, [nextClickSlideEvent]);

    const onClickItem = ({
        movieId,
        seriesId,
    }: {
        movieId?: string;
        seriesId?: string;
    }) => {
        if (movieId) {
            navigate(`/movie/${movieId}`);
            return;
        }

        if (seriesId) {
            navigate(`/series/${seriesId}`);
            return;
        }
    };

    return (
        <>
            <SlideContainer>
                {IMovie &&
                    IMovie?.map((m, i) => (
                        <Slide
                            key={m.id}
                            $slideDirection={slideDirection}
                            $active={currentIndex === i}
                            onClick={() =>
                                onClickItem({ movieId: m?.id?.toString() })
                            }
                        >
                            <MainTitle>
                                <BackgroundDimEffectBox />
                                <MainTitleImg
                                    $mainImg={getImagePath(m.backdrop_path)}
                                >
                                    <MainTitleName>{m.title}</MainTitleName>
                                    <MainTitleOverView>
                                        {m.overview}
                                    </MainTitleOverView>
                                </MainTitleImg>
                            </MainTitle>
                        </Slide>
                    ))}
                {ITvSeries &&
                    ITvSeries.map((m, i) => (
                        <Slide
                            $slideDirection={slideDirection}
                            key={m?.id}
                            $active={currentIndex === i}
                            onClick={() =>
                                onClickItem({ seriesId: m?.id?.toString() })
                            }
                        >
                            <MainTitle>
                                <BackgroundDimEffectBox />
                                <MainTitleImg
                                    $mainImg={getImagePath(m.backdrop_path)}
                                >
                                    <MainTitleName>{m.name}</MainTitleName>
                                    <MainTitleOverView>
                                        {m.overview}
                                    </MainTitleOverView>
                                </MainTitleImg>
                            </MainTitle>
                        </Slide>
                    ))}
            </SlideContainer>
            <ArrowInnerContainer>
                <ArrowButtonWrapper onClick={prevClickSlideEvent}>
                    <LeftArrowButton />
                </ArrowButtonWrapper>
                <ArrowButtonWrapper onClick={nextClickSlideEvent}>
                    <RightArrowButton />
                </ArrowButtonWrapper>
            </ArrowInnerContainer>
        </>
    );
};

export default MainCarouselComponent;

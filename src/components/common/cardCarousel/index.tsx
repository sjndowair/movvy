import { FC, useCallback, useState, useEffect } from "react";
import {
    CardContainer,
    Slide,
    SlideWrapper,
    Card,
    Prev,
    Coordinates,
    Next,
    More,
    Intro,
} from "./style";
import { cardData } from "../../../constants/temp-card.constant";

interface ICardComponentProps {
    title: string;
}

const CardCarousel: FC<ICardComponentProps> = ({ title }) => {
    const [slideIndex, setSlideIndex] = useState<number>(0);

    const calculateCardsPerSlide = useCallback(
        () => (window?.innerWidth >= 768 ? 5 : 3),
        []
    );

    const totalSlides: number = Math.ceil(
        cardData.length / calculateCardsPerSlide()
    );

    const prevSlide = useCallback(() => {
        setSlideIndex((curr) => (curr === 0 ? 0 : curr - 1));
    }, []);

    const nextSlide = useCallback(() => {
        setSlideIndex((curr) => (curr === totalSlides - 1 ? 0 : curr + 1));
    }, [totalSlides]);

    useEffect(() => {
        window.addEventListener("resize", calculateCardsPerSlide);

        return () => {
            window.removeEventListener("resize", calculateCardsPerSlide);
        };
    }, [calculateCardsPerSlide]);

    return (
        <section>
            <Coordinates>
                <SlideWrapper>
                    <Intro>
                        <h2>{title}</h2>
                        <More>더보기</More>
                    </Intro>
                    <CardContainer
                        className="card-container"
                        slideIndex={slideIndex}
                        totalSlides={totalSlides}
                    >
                        {cardData.map((card, index) => (
                            <Slide key={index}>
                                <picture>
                                    <source
                                        srcSet={card.webSrcSet}
                                        type="image/webp"
                                    />
                                    <Card src={card.imgSrc} alt={card.alt} />
                                </picture>
                            </Slide>
                        ))}
                    </CardContainer>
                </SlideWrapper>
                <Prev onClick={prevSlide} />
                <Next onClick={nextSlide} />
            </Coordinates>
        </section>
    );
};

export default CardCarousel;

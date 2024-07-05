import React, { useCallback, useState } from "react";
import { cardData } from "../Context/cardCtx";
import { H2, PrevBtn } from "../styles/contain-style";
import { CardContainer, BoardCard, Button } from "../styles/card-style";

const CardComponent = () => {
  const [cardIndex, setCardIndex] = useState<number>(0);

  const nextCard = useCallback(() => {
    setCardIndex((nextIndex) => (nextIndex + 1) % cardData.length);
  }, []);

  const prevCard = useCallback(() => {
    setCardIndex((prevIndex) => (prevIndex - 1) % cardData.length);
  }, []);

  return (
    <section>
      <div>
        <H2>믿고 보는 웨이브 에디터 추천작</H2>
        <CardContainer>
          {cardData.map((cardIndex, index) => (
            <div key={index}>
              <div>
                {cardIndex.ImageContain.map((image, imgIndex) => (
                  <picture key={imgIndex}>
                    <source srcSet={image.webSrcSet} />
                    <BoardCard src={image.imgSrc} alt={image.alt} />
                  </picture>
                ))}
              </div>
              <div />
            </div>
          ))}
        </CardContainer>
        <Button onClick={prevCard}>전</Button>
        <Button onClick={nextCard}>후</Button>
      </div>
    </section>
  );
};

export default CardComponent;

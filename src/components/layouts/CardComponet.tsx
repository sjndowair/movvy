import React, { useCallback, useState } from "react";
import { cardData } from "../Context/cardCtx";
import { H2 } from "../styles/contain-style";

const CardComponent = () => {
  const [cardIndex, setCardIndex] = useState<number>(0);

  const nextCard = useCallback(() => {
    setCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  }, []);

  return (
    <section>
      <div>
        <H2>믿고 보는 웨이브 에디터 추천작</H2>
      </div>
    </section>
  );
};

export default CardComponent;

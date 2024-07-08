import React from "react";
import { NAME_CONTAIN } from "../../../../DummyData/cardData";
import CardComponent from "./CardComponet";

const MainContainer: React.FC = () => {
  return (
    <div>
      {NAME_CONTAIN.map((title, index) => (
        <CardComponent key={index} title={title} />
      ))}
    </div>
  );
};

export default MainContainer;

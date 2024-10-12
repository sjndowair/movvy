import { useState, useEffect } from "react";
import { ScrollBTN } from "./style";
import { ArrowUpCircle } from "../../common/svg/index";

// 카멜케이스
const isScrollUpEvent = () => {
  window?.scrollTo({ top: 0, behavior: "smooth" });
};

const ScrollButton = () => {
  const [onClickButton, setOnClickButton] = useState(false);

  const isScrollTopEvent = () => {
    setOnClickButton(window?.scrollY > 0);
  };

  useEffect(() => {
    window?.addEventListener("scroll", isScrollTopEvent);
    return () => {
      window?.removeEventListener("scroll", isScrollTopEvent);
    };
  }, []);

  if (!onClickButton) return null;

  return (
    <ScrollBTN onClick={isScrollUpEvent}>
      <ArrowUpCircle />
    </ScrollBTN>
  );
};
export default ScrollButton;

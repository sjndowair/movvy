import { useState, useEffect } from "react";
import { ScrollBTN } from "./style";
import { ArrowUpCircle } from "../../common/svg/index";

const ScrollUpEvent = () => {
  window?.scrollTo({ top: 0, behavior: "smooth" });
};

const ScrollButton = () => {
  const [buttonPresenceCheck, setButonPresenceCheck] = useState(false);

  const scrollTop = () => {
    setButonPresenceCheck(window?.scrollY > 0);
  };
  useEffect(() => {
    window?.addEventListener("scroll", scrollTop);
    return () => {
      window?.removeEventListener("scroll", scrollTop);
    };
  }, []);

  if (!buttonPresenceCheck) return null;
  return (
    <ScrollBTN onClick={ScrollUpEvent}>
      <ArrowUpCircle />
    </ScrollBTN>
  );
};
export default ScrollButton;

import { ReactHTMLElement, useEffect, useRef } from "react";
import { throttle } from "lodash";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  HeadContainer,
  List,
  H1,
  ListIndex,
  HeadInnerContainer,
  SearchBox,
  ErrorBox,
} from "./style";
import { Magnifiy } from "../svg/index";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrollEvent, setScrollEvent] = useState<boolean>(false);
  const [searchEvent, setSearchEvent] = useState<boolean>(false);
  const inputFocusRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  interface ISubmitProps {
    keyword: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitProps>();

  const handleScrollEvent = throttle(() => {
    setScrollEvent(window?.scrollY > 0);
  }, 33);

  useEffect(() => {
    window?.addEventListener("scroll", handleScrollEvent);
    return () => window?.removeEventListener("scroll", handleScrollEvent);
  }, [handleScrollEvent]);

  const onClickMagnifiy = () => {
    setSearchEvent((pre) => !pre);
    setTimeout(() => {
      if (inputFocusRef.current) {
        inputFocusRef.current.focus();
      }
    }, 100);
  };

  const onSubmitSearch = (data: ISubmitProps) => {
    navigate(`/search?query=${data.keyword}`);
  };

  return (
    <HeadContainer $handleScrollEvent={scrollEvent}>
      <HeadInnerContainer>
        <Link to={"/"}>
          <H1>movvy</H1>
        </Link>
        <nav>
          <List>
            <Link to={"/"}>
              <ListIndex>HOME</ListIndex>
            </Link>
            <Link to={"/series"}>
              <ListIndex>SERIES</ListIndex>
            </Link>
          </List>
        </nav>
      </HeadInnerContainer>
      <SearchBox $searchEvent={searchEvent}>
        <p onClick={onClickMagnifiy}>
          <Magnifiy />
        </p>
        {searchEvent && (
          <form onSubmit={handleSubmit(onSubmitSearch)}>
            <input
              placeholder="검색어를 입력하세요"
              {...register("keyword", {
                required: true,
                minLength: 2,
              })}
              type="text"
              onClick={(e) => e.stopPropagation()}
              ref={inputFocusRef}
            />
            {errors.keyword && (
              <ErrorBox>검색어는 최소 2글자 이상입니다</ErrorBox>
            )}
          </form>
        )}
      </SearchBox>
    </HeadContainer>
  );
};
//

export default Header;

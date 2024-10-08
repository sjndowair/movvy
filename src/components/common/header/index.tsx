import { useCallback, useEffect } from "react";
import { throttle } from "lodash";
import { useNavigate } from "react-router-dom";
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
  IconContainer,
  SearchInput,
  SearchForm,
} from "./style";
import { Magnifiy } from "../svg/index";
import { Link } from "react-router-dom";
import { useThemeMode } from "../../../contexts/themeCtx";

interface ISubmitProps {
  keyword: string;
}

const Header = () => {
  const [scrollEvent, setScrollEvent] = useState<boolean>(false);
  const [searchEvent, setSearchEvent] = useState<boolean>(false);
  const { isDark } = useThemeMode();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<ISubmitProps>();

  const onClickSearchEvent = useCallback(() => {
    setSearchEvent((prev) => !prev);
    if (!searchEvent) {
      setTimeout(() => {
        setFocus("keyword");
      }, 100);
    }
  }, []);

  const isScrollEvent = throttle(() => {
    setScrollEvent(window?.scrollY > 0);
    setSearchEvent(false);
  }, 33);

  useEffect(() => {
    window?.addEventListener("scroll", isScrollEvent);
    return () => window?.removeEventListener("scroll", isScrollEvent);
  }, [isScrollEvent]);

  const onSubmitSearch = (data: ISubmitProps) => {
    navigate(`/search?query=${data.keyword}`);
  };

  return (
    <HeadContainer $isDark={isDark} $handleScrollEvent={scrollEvent}>
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
        <IconContainer onClick={onClickSearchEvent}>
          <Magnifiy fill="rgba(255, 111, 15, 1)" size="20px" />
        </IconContainer>
        {searchEvent && (
          <SearchForm onSubmit={handleSubmit(onSubmitSearch)}>
            <SearchInput
              placeholder="검색어를 입력하세요"
              {...register("keyword", {
                required: true,
                minLength: 1,
              })}
              type="text"
            />
            {errors.keyword && (
              <ErrorBox>검색어는 최소 2글자 이상입니다</ErrorBox>
            )}
          </SearchForm>
        )}
      </SearchBox>
    </HeadContainer>
  );
};
//

export default Header;

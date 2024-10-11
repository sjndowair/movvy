import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { ISearchResponce } from "../../types/searchList";
import { getSearchList } from "../../apis/searchList.api";
import { getImagePath } from "../../utils/image.util";
import Layout from "../../components/common/layoutPage";
import {
  ProgramBox,
  EachBox,
  ProgramIMG,
  NoDataMessage,
  SearchNoticeTitle,
  BackSvgWrapper,
  SvgStyleContain,
} from "./style";
import { Back } from "../../components/common/svg/\bindex";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParamas = new URLSearchParams(location.search).get("query");

  const { data } = useQuery<ISearchResponce>({
    queryKey: ["search", `${searchParamas}`],
    queryFn: () => getSearchList(searchParamas!),
  });

  const onClickSearch = (data: string, id: number) => {
    navigate(`/search/${data}/${id}`);
  };

  const onClickNavigate = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <SearchNoticeTitle>
        검색된 영상: {data?.results.length}개
      </SearchNoticeTitle>
      <ProgramBox>
        {data?.results.length ? (
          data.results.map((it) => (
            <EachBox
              key={it.id}
              onClick={() => onClickSearch(it.media_type!, it.id)}
            >
              {getImagePath(it.poster_path) ? (
                <ProgramIMG
                  src={getImagePath(it.poster_path)}
                  alt={it.overview}
                />
              ) : (
                <ProgramIMG
                  src={getImagePath(it.backdrop_path)}
                  alt={it.overview}
                />
              )}
              <h5>{it?.title || it.name}</h5>
            </EachBox>
          ))
        ) : (
          <NoDataMessage>검색된 영화, 시리즈가 없습니다.</NoDataMessage>
        )}
      </ProgramBox>
      <BackSvgWrapper>
        <SvgStyleContain onClick={onClickNavigate}>
          <Back />
        </SvgStyleContain>
      </BackSvgWrapper>
    </Layout>
  );
};

export default SearchPage;

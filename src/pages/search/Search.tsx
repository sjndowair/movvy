import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { ISearchResponce } from "../../types/searchList";
import { getSearchList } from "../../apis/searchList.api";
import { getImagePath } from "../../utils/image.util";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import {
  ProgramBox,
  EachBox,
  ProgramIMG,
  NoDataMessage,
  SearchNoticeTitle,
} from "./style";
import { Back } from "../../components/common/svg/\bindex";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParamas = new URLSearchParams(location.search).get("query");

  const { data, isLoading, error } = useQuery<ISearchResponce>({
    queryKey: ["search", `${searchParamas}`],
    queryFn: () => getSearchList(searchParamas!),
  });

  const handleClickSearch = (data: string, id: number) => {
    navigate(`/search/${data}/${id}`);
  };

  const onClickNavigate = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <SearchNoticeTitle>이런걸 찾으셨나요?</SearchNoticeTitle>
      <ProgramBox>
        {data?.results.length ? (
          data.results.map((it) => (
            <EachBox
              key={it.id}
              onClick={() => handleClickSearch(it.media_type!, it.id)}
            >
              {getImagePath(it.poster_path) ? (
                <ProgramIMG
                  style={{ width: "300px", height: "300px" }}
                  src={getImagePath(it.poster_path)}
                  alt={it.overview}
                />
              ) : (
                <ProgramIMG
                  src={getImagePath(it.backdrop_path)}
                  alt={it.overview}
                />
              )}
              {it.title ? <h5>{it.title}</h5> : <h5>{it.name}</h5>}
            </EachBox>
          ))
        ) : (
          <NoDataMessage>검색된 영화, 시리즈가 없습니다.</NoDataMessage>
        )}
        {isLoading && <div>is Loading...</div>}
        {error && <div>error api 확인</div>}
      </ProgramBox>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "30px",
            height: "auto",
            cursor: "pointer",
            paddingTop: "5rem",
          }}
          onClick={onClickNavigate}
        >
          <Back />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SearchPage;

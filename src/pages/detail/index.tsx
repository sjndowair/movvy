import { getDetailList } from "../../apis/getDetailList.api";
import { IDetailListResponse } from "../../types/detailList";
import { IVideosResponse } from "../../types/videos";
import { getVideoPath } from "../../utils/video.util";
import { getVideoByMovieId } from "../../apis/videos.api";
import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router-dom";
import { getImagePath } from "../../utils/image.util";
import { genres } from "../../utils/genres.utill";
import ReactPlayer from "react-player";
import Layout from "../../components/common/layoutPage";
import { GenresEachBox } from "../../components/layout/video/style";
import {
  DetailContainer,
  LayoutContain,
  Poster,
  BackArrow,
  BackArrowWrapper,
  Title,
  PlayerWrapper,
  OverView,
  AlreadyBox,
} from "./style";
import { Back } from "../../components/common/svg/\bindex";
import { useNavigate } from "react-router-dom";
import { StarRate } from "../../components/common/svg/\bindex";
import { usePages } from "../../hooks/usePages";
import { useTheme } from "styled-components";

const Detail = () => {
  const { useSearchDetailPage } = usePages();
  const { isDark } = useTheme();
  const { match } = useSearchDetailPage();

  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  const matchType = match?.params.type || "";
  const matchId = match?.params.id;
  const { data } = useQuery<IDetailListResponse>({
    queryKey: ["search", `${matchId}`],
    queryFn: () => getDetailList(matchType, matchId!),
  });

  const { data: videoData } = useQuery<IVideosResponse>({
    queryKey: [matchType, matchId],
    queryFn: () => {
      if (matchType === "movie") {
        return getVideoByMovieId("movie", matchId!);
      } else if (matchType === "series") {
        return getVideoByMovieId("series", matchId!);
      }
      return Promise.reject("Invalid matchType");
    },
  });

  const clickDetail = getVideoPath(videoData?.results[0]?.key);

  return (
    <>
      {data && (
        <>
          {
            <Layout>
              <DetailContainer
                isDark={isDark}
                $background={getImagePath(data?.backdrop_path || "")}
              >
                <Poster
                  src={getImagePath(data?.poster_path)}
                  alt={data?.overview}
                />
                <LayoutContain>
                  {clickDetail ? (
                    <PlayerWrapper>
                      <ReactPlayer
                        url={clickDetail}
                        volume={0.1}
                        playing={true}
                        controls={false}
                        light={true}
                      />
                    </PlayerWrapper>
                  ) : (
                    <AlreadyBox>
                      {data?.title || data?.name} 영상이 준비중입니다.....
                    </AlreadyBox>
                  )}
                  <Title>{data.name ? data?.name : data?.title}</Title>
                  <StarRate voteAverage={data?.vote_average} />
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    {data.genres.map((e, i) => (
                      <GenresEachBox key={i}>{genres[e.id]}</GenresEachBox>
                    ))}
                  </div>
                  <OverView>{data.overview}</OverView>
                </LayoutContain>
              </DetailContainer>

              <BackArrowWrapper>
                <BackArrow onClick={() => onClickBack()}>
                  <Back />
                </BackArrow>
              </BackArrowWrapper>
            </Layout>
          }
        </>
      )}
    </>
  );
};

export default Detail;

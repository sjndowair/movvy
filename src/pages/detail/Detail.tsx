import { useState } from "react";
import { getDetailList } from "../../apis/getDetailList.api";
import { IDetailListResponse } from "../../types/detailList";
import { IVideosResponse } from "../../types/videos";
import { getVideoPath } from "../../utils/video.util";
import { getVideoByMovieId } from "../../apis/videos.api";
import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router-dom";
import { getImagePath } from "../../utils/image.util";
import ReactPlayer from "react-player";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import { DetailContainer, Layout, Poster, Title, OverView } from "./style";
import { Back } from "../../components/common/svg/\bindex";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const match = useMatch("search/:type/:id");
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  const matchType = match?.params.type!;
  const matchId = match?.params.id;
  const { data, isLoading, error } = useQuery<IDetailListResponse>({
    queryKey: ["search", `${matchId}`],
    queryFn: () => getDetailList(matchType, matchId!),
  });

  console.log("data", data);

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
        <div>
          {
            <>
              <Header />

              <DetailContainer
                background={getImagePath(data?.backdrop_path || "")}
              >
                <Poster
                  src={getImagePath(data?.poster_path)}
                  alt={data?.overview}
                />
                <Layout>
                  {clickDetail ? (
                    <ReactPlayer
                      url={clickDetail}
                      volume={0.1}
                      playing={true}
                      controls={false}
                      light={true}
                      style={{
                        boxShadow:
                          "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
                      }}
                    />
                  ) : (
                    <img src={data?.poster_path} alt={data?.overview} />
                  )}
                  <Title>{data.name ? data?.name : data?.title}</Title>

                  <OverView>{data.overview}</OverView>
                </Layout>
              </DetailContainer>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  height: "auto",
                  justifyContent: "center",
                }}
              >
                <div
                  onClick={() => onClickBack()}
                  style={{
                    width: "30px",
                    height: "auto",
                    cursor: "pointer",
                    paddingTop: "2rem",
                  }}
                >
                  <Back />
                </div>
              </div>
              <Footer />
            </>
          }
        </div>
      )}
      {isLoading && <div> isLoading</div>}
      {error && <div>error</div>}
    </>
  );
};

export default Detail;

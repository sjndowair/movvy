import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getImagePath } from "../../../utils/image.util";
import { getVideoPath } from "../../../utils/video.util";
import { getVideoByMovieId } from "../../../apis/videos.api";
import { ITvSerise, IMovie } from "../../../types/movieList";
import { IVideosResponse } from "../../../types/videos";
import ReactPlayer from "react-player";
import { genres } from "../../../utils/genres.utill";
import { StarRate } from "../../common/svg/\bindex";
import {
  VideoWrapper,
  PlayerWrapper,
  VideoDeemBackground,
  GenresBox,
  GenresEachBox,
  PlayerIMG,
  VideoTitle,
  FlexBox,
  VideoInstructionBox,
} from "./style";
import { useEffect } from "react";

interface IVideoPageProps {
  programId: string;
  movieTotalData?: IMovie | null;
  seriesTotalData?: ITvSerise | null;
  videoVisible: boolean;
  removeHiddenCard: (programId: number) => void;
}

const VideoPage = ({
  movieTotalData,
  programId,
  videoVisible,
  seriesTotalData,
  removeHiddenCard,
}: IVideoPageProps) => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<IVideosResponse>({
    queryKey: (() => {
      if (movieTotalData) {
        return ["movie", `${programId}`];
      } else if (seriesTotalData) {
        return ["series", `${programId}`];
      } else {
        return ["movie" || "series" || "person", `${programId}`];
      }
    })(),

    queryFn: () => {
      if (movieTotalData) {
        return getVideoByMovieId("movie", programId);
      } else if (seriesTotalData) {
        return getVideoByMovieId("tv", programId);
      } else {
        throw new Error("prgram id data 의 provider를 확인 해야됩니다.");
      }
    },
  });

  const clickVideo = data?.results?.[0]?.key
    ? getVideoPath(data?.results?.[0]?.key)
    : null;

  const clickNavigate = () => {
    removeHiddenCard(Number(programId));
    return navigate(-1);
  };

  useEffect(() => {
    const escNavigate = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clickNavigate();
      }
    };
    window?.addEventListener("keydown", escNavigate);
    return () => {
      window?.removeEventListener("keydown", escNavigate);
    };
  }, [navigate]);

  return (
    <div>
      {movieTotalData && (
        <VideoDeemBackground onClick={clickNavigate}>
          <VideoWrapper
            videoVisible={videoVisible}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {clickVideo ? (
              <PlayerWrapper>
                <ReactPlayer
                  url={clickVideo}
                  volume={0.1}
                  playing={true}
                  controls={false}
                  light={true}
                  width="100%"
                  height="400px"
                />
              </PlayerWrapper>
            ) : (
              <PlayerWrapper>
                <PlayerIMG
                  src={getImagePath(movieTotalData?.backdrop_path)}
                  alt={movieTotalData?.overview}
                  $posterPath={movieTotalData?.poster_path}
                />
              </PlayerWrapper>
            )}

            <VideoInstructionBox>
              <VideoTitle>{movieTotalData?.title}</VideoTitle>
              <FlexBox>
                <StarRate voteAverage={movieTotalData?.vote_average} />
                <GenresBox>
                  {movieTotalData?.genre_ids.map((e, i) => (
                    <GenresEachBox key={i}>{genres[e]}</GenresEachBox>
                  ))}
                </GenresBox>
              </FlexBox>
              <p style={{ overflow: "scroll" }}>{movieTotalData?.overview}</p>
            </VideoInstructionBox>
          </VideoWrapper>
        </VideoDeemBackground>
      )}

      {seriesTotalData && (
        <VideoDeemBackground onClick={clickNavigate}>
          <VideoWrapper
            videoVisible={videoVisible}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {clickVideo ? (
              <PlayerWrapper>
                <ReactPlayer
                  url={clickVideo}
                  volume={0.1}
                  playing={true}
                  controls={false}
                  light={true}
                  background={false}
                  width="100%"
                  height="400px"
                />
              </PlayerWrapper>
            ) : (
              <PlayerWrapper>
                <PlayerIMG
                  src={getImagePath(seriesTotalData?.backdrop_path)}
                  alt={seriesTotalData?.overview}
                  $posterPath={seriesTotalData?.poster_path}
                />
              </PlayerWrapper>
            )}
            <VideoInstructionBox>
              <VideoTitle>{seriesTotalData?.name}</VideoTitle>
              <FlexBox>
                <StarRate voteAverage={seriesTotalData?.vote_average} />
                <GenresBox>
                  {seriesTotalData?.genre_ids.map((e, i) => (
                    <GenresEachBox key={i}>{genres[e]}</GenresEachBox>
                  ))}
                </GenresBox>
              </FlexBox>
              <p style={{ overflow: "scroll" }}>{seriesTotalData?.overview}</p>
            </VideoInstructionBox>
          </VideoWrapper>
        </VideoDeemBackground>
      )}
      {isLoading && <div>지금은 로딩중....</div>}
    </div>
  );
};

export default VideoPage;

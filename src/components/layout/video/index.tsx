import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getImagePath } from "../../../utils/image.util";
import { getVideoPath } from "../../../utils/video.util";
import { getVideoByMovieId } from "../../../apis/videos.api";
import { IVideosResponse } from "../../../types/videos";
import { IVideoPageProps } from "../../../types/videoPageList";
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
import ReactDOM from "react-dom";
import { useThemeMode } from "../../../contexts/themeCtx";

const isModal = document.getElementById("portal-root");

const VideoPage = ({
  movieTotalData,
  programId,
  $videoVisible,
  seriesTotalData,
  removeHiddenCard,
}: IVideoPageProps) => {
  const { isDark } = useThemeMode();
  const navigate = useNavigate();

  const { data } = useQuery<IVideosResponse>({
    queryKey: (() => {
      if (movieTotalData) return ["movie", `${programId}`];
      if (seriesTotalData) return ["series", `${programId}`];
      else return ["movie" || "series" || "person", `${programId}`];
    })(),

    queryFn: () => {
      if (movieTotalData) return getVideoByMovieId("movie", programId);
      if (seriesTotalData) return getVideoByMovieId("tv", programId);
      else {
        throw new Error("prgram id data 의 provider를 확인 해야됩니다.");
      }
    },
  });

  const onClickNavigate = () => {
    removeHiddenCard(Number(programId));
    return navigate(-1);
  };

  const isOpenVideo = data?.results?.[0]?.key
    ? getVideoPath(data.results[0].key)
    : null;

  useEffect(() => {
    const isEscapeEvent = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClickNavigate();
      }
    };
    window?.addEventListener("keydown", isEscapeEvent);
    return () => {
      window?.removeEventListener("keydown", isEscapeEvent);
    };
  }, [navigate]);

  return ReactDOM.createPortal(
    <>
      {movieTotalData && (
        <VideoDeemBackground onClick={onClickNavigate}>
          <VideoWrapper
            $isDark={isDark}
            $videoVisible={$videoVisible}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {isOpenVideo ? (
              <PlayerWrapper>
                <ReactPlayer
                  url={isOpenVideo}
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
        <VideoDeemBackground onClick={onClickNavigate}>
          <VideoWrapper
            $isDark={isDark}
            $videoVisible={$videoVisible}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {isOpenVideo ? (
              <PlayerWrapper>
                <ReactPlayer
                  url={isOpenVideo}
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
    </>,
    isModal!
  );
};

export default VideoPage;

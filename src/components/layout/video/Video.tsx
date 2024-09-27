import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getImagePath } from "../../../utils/image.util";
import { getVideoPath } from "../../../utils/video.util";
import { getVideoByMovieId } from "../../../apis/videos.api";
import { ITvSerise, IMovie } from "../../../types/movieList";
import { IVideosResponse, IVideo } from "../../../types/videos";
import ReactPlayer from "react-player";
import {
  VideoWrapper,
  PlayerWrapper,
  VideoDeemBackground,
  PlayerIMG,
} from "./style";

interface IVideoPageProps {
  programId: string;
  movieTotalData?: IMovie | null;
  seriesTotalData?: ITvSerise | null;
  ApiType: string;
}

const VideoPage = ({
  movieTotalData,
  programId,
  seriesTotalData,
  ApiType,
}: IVideoPageProps) => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery<IVideosResponse>({
    queryKey: (() => {
      if (movieTotalData) {
        return ["movie", `${programId}`];
      } else if (seriesTotalData) {
        return ["series", `${programId}`];
      } else {
        throw new Error("key check");
      }
    })(),

    queryFn: () => {
      if (movieTotalData) {
        return getVideoByMovieId("movie", programId);
      } else if (seriesTotalData) {
        return getVideoByMovieId("tv", programId);
      } else {
        throw new Error("promise check");
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
                  style={{
                    backgroundPosition: "center, center",
                    backgroundSize: "cover",
                  }}
                />
              </PlayerWrapper>
            ) : (
              <PlayerWrapper>
                <PlayerIMG
                  src={getImagePath(movieTotalData?.backdrop_path)}
                  alt={movieTotalData?.overview}
                />
              </PlayerWrapper>
            )}

            <div>
              <h5>{movieTotalData?.title}</h5>
              <div>
                <div>{movieTotalData?.vote_average! * 10} / 100</div>
              </div>
              <p>{movieTotalData?.overview}</p>
            </div>
          </VideoWrapper>
        </VideoDeemBackground>
      ) : (
        <div>is Loading...</div>
      )}

      {seriesTotalData ? (
        <VideoDeemBackground onClick={clickNavigate}>
          <VideoWrapper
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
                  style={{
                    backgroundPosition: "center, center",
                    backgroundSize: "cover",
                  }}
                />
              </PlayerWrapper>
            ) : (
              <PlayerWrapper>
                <PlayerIMG
                  src={getImagePath(seriesTotalData?.backdrop_path)}
                  alt={seriesTotalData?.overview}
                />
              </PlayerWrapper>
            )}

            <div>
              <h5>{seriesTotalData?.name}</h5>
              <div>
                <div>{seriesTotalData?.vote_average! * 10} / 100</div>
              </div>
              <p>{seriesTotalData?.overview}</p>
            </div>
          </VideoWrapper>
        </VideoDeemBackground>
      ) : (
        <div>is Loading</div>
      )}
    </div>
  );
};

export default VideoPage;

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
        return getVideoByMovieId("series", programId);
      } else {
        throw new Error("promise check");
      }
    },
  });

  console.log(seriesTotalData);
  console.log(movieTotalData);

  if (isLoading) return <div>is Loading...</div>;

  if (error) return <div>오류입니다 확인 바랍니다</div>;

  const clickVideo = getVideoPath(data?.results[0]?.key);

  const clickNavigate = () => {
    return navigate(-1);
  };

  const escNavigate = (e: any) => {
    if (e.key === "Escape") {
      clickNavigate();
    }
  };

  return (
    <div tabIndex={0} onKeyDown={(e) => escNavigate(e)}>
      {isLoading && <div> is Loading</div>}
      {error && <div> this is error</div>}
      {movieTotalData ? (
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

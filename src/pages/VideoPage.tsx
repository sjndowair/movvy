import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getImagePath } from "../utils/image.util";
import { getVideoPath } from "../utils/video.util";
import { getVideoByMovieId } from "../apis/videos.api";
import { ITvSerise, IMovie } from "../types/movieList";
import { IVideosResponse, IVideo } from "../types/videos";
import ReactPlayer from "react-player";

interface IVideoPageProps {
  programId: string;
  movieTotalData?: IMovie;
}

const VideoPage = ({ movieTotalData, programId }: IVideoPageProps) => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery<IVideosResponse>({
    queryKey: movieTotalData
      ? ["movie", `${programId}`]
      : ["series", `${programId}`],
    queryFn: () =>
      movieTotalData
        ? getVideoByMovieId(programId)
        : getVideoByMovieId(programId),
  });

  if (isLoading) return <div>is Loading...</div>;

  if (error) return <div>오류입니다 확인 바랍니다</div>;

  const clickVideo = getVideoPath(data?.results[0]?.key);

  const clickNavigate = () => {
    return navigate(-1);
  };

  return (
    <div>
      {movieTotalData ? (
        <>
          <ReactPlayer
            url={clickVideo}
            width="1300px"
            volume={0.1}
            playing={true}
            controls={false}
            light={true}
          />
          <div onClick={clickNavigate}>클릭 버튼</div>
          <div>
            <img
              src={getImagePath(
                movieTotalData.backdrop_path || movieTotalData.poster_path
              )}
              alt={movieTotalData.overview}
            />
            <h5>{movieTotalData?.title}</h5>
            <div>
              <div>{movieTotalData?.vote_average! * 10} / 100</div>
            </div>
            <p>{movieTotalData?.overview}</p>
          </div>
        </>
      ) : (
        <div>페이지로드필요</div>
      )}
    </div>
  );
};

export default VideoPage;

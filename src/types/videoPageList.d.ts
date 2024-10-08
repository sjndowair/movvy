import { ITvSerise, IMovie } from "./movieList";

export interface IVideoPageProps {
  programId: string;
  movieTotalData?: IMovie | null;
  seriesTotalData?: ITvSerise | null;
  $videoVisible: boolean;
  removeHiddenCard: (programId: number) => void;
}

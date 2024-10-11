export interface IDetailListResponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  created_by?: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
  }[];
  episode_run_time?: number[];
  first_air_date?: string;
  budget?: number;
  genres: { id: number; name: string }[];
  name?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  id: number;
  original_language: string;
  original_title: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  release_date?: string;
  revenue?: string;
  runtime?: string;
  title?: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  overview: string;
}

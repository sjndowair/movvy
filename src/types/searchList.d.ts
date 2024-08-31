export interface ISearchResponce {
  page: number;
  keyword: string;
  results: ISearchProps[];
  totalpage: number;
  total_results: number;
}

export interface ISearchProps {
  media_type?: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  name: string;
  original_language: string;
  onriginal_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

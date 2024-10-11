export interface IMainCarousalProps {
  IMovie?: IMovie[];
  ITvSeries?: ITvSerise[];
}
export interface ISlideProps {
  $slideDirection: boolean;
  $active: boolean;
}
export interface IOnClickProprs {
  movieId?: string;
  seriesId?: string;
}

export interface IBackgroundDimProps {
  $isDark: boolean;
}

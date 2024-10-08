export interface ICardCarousalProps {
  IMovie?: IMovie[];
  ITvSerise?: ITvSerise[];
  title?: string;
  hiddenCard: number[];
  setHiddenCard: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface IOnClickProprs {
  movieId?: string;
  seriesId?: string;
}

export interface ISlideProps {
  $index: number;
  $cards: number;
  $reaction: number;
  $hiddenCard: boolean;
}

export interface IMoviesImgBoxProps {
  $isDark: boolean;
}

import { IMovie, ITvSerise } from "../types/movieList";

export class MovieSeriesListItemClass {
    backdropPath: string;
    genreIds: number[];
    id: number;
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate: string;
    title: string;
    voteAverage: number;
    voteCount: number;
    kind: "movie" | "series";

    constructor({ movie, series }: { movie?: IMovie; series?: ITvSerise }) {
        this.id = movie?.id || series?.id || -1;
        this.backdropPath = movie?.backdrop_path || series?.backdrop_path || "";
        this.genreIds = movie?.genre_ids || series?.genre_ids || [];
        this.overview = movie?.overview || series?.overview || "";
        this.popularity = movie?.popularity || series?.popularity || 0;
        this.posterPath = movie?.poster_path || series?.poster_path || "";
        this.releaseDate = movie?.release_date || series?.first_air_date || "";
        this.title = movie?.title || series?.name || "";
        this.voteAverage = movie?.vote_average || series?.vote_average || 0;
        this.voteCount = movie?.vote_count || series?.vote_count || 0;
        this.kind = movie ? "movie" : "series";
    }

    getKind() {
        return this.kind;
    }
}

export interface IMovie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

export interface EntireResponse {
  movies: IMovie[];
  actualPage: number;
  totalOfPages: number;
}

export interface FavoritesMovies {
  imdbID: string;
}

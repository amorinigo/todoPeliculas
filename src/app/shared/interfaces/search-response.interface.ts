export interface SearchResponse {
  page:          number;
  results:       Film[];
  total_pages:   number;
  total_results: number;
}

export interface Film {
  adult?:            boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title?:   string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date?:     Date;
  title?:            string;
  video?:            boolean;
  vote_average:      number;
  vote_count:        number;


  first_air_date?:   Date;
  original_name?:    string;
  media_type?:        MediaType;
  name?:             string;
  origin_country?:   string[];
}

export enum MediaType {
  Movie = "movie",
  Tv = "tv",
}

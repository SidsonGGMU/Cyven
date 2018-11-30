export interface PersonQuery {
  language?: string; // default "en-US"
}

export interface PersonResponse {
  birthday?: string;
  known_for_department?: string;
  deathday?: string;
  id?: number;
  name?: string;
  also_known_as?: string[];
  gender?: number; // 0, 1, 2, default 0
  biography?: string;
  popularity?: number;
  place_of_birth?: string;
  profile_path?: string;
  adult?: boolean;
  imdb_id?: string;
  homepage?: string;
}

export interface Cast {
  character?: string;
  credit_id?: string;
  poster_path?: string;
  id: number;
  video?: boolean;
  vote_count?: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  original_language?: string;
  original_title?: string;
  popularity?: number;
  title?: string;
  vote_average?: number;
  overview?: string;
  release_date?: string;
}

export interface Crew {
  id: number;
  department: string;
  original_language: string;
  original_title: string;
  job: string;
  overview: string;
  vote_count: number;
  video: boolean;
  release_date: string;
  vote_average: number;
  title: string;
  popularity: number;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  poster_path: string;
  credit_id: string;
}

export interface CastResponse {
  cast: Cast[];
  crew: Crew[];
  id: number;
}

export interface PersonDetails {
  actor : PersonResponse;
  known_for?: CastResponse;
}
import { List } from "./List";
import { MovieResponse } from "../tmdb-data/Movie";
/**
 * IMPORTANT: We need to point out the fact that there's
 * no database system in the app so we had to issue a mockup!
 */
export const LISTS_DATA: List[] = [
  {
    name: 'Ma superliste 1',
    movies: []
  },
  {
    name: 'Ma superliste 2',
    movies: []
  },
  {
    name: 'Ma superliste 3',
    movies: []
  }
];

export const MOVIE: MovieResponse = {
  "adult": false,
  "backdrop_path": "/7c9UVPPiTPltouxRVY6N9uugaVA.jpg",
  "belongs_to_collection": null,
  "budget": 55000000,
  "genres": [
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10749,
      "name": "Romance"
    }
  ],
  "homepage": null,
  "id": 13,
  "imdb_id": "tt0109830",
  "original_language": "en",
  "original_title": "Forrest Gump",
  "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
  "popularity": 27.306,
  "poster_path": "/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
  "production_companies": [
    {
      "id": 4,
      "logo_path": "/fycMZt242LVjagMByZOLUGbCvv3.png",
      "name": "Paramount",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "1994-07-06",
  "revenue": 677945399,
  "runtime": 142,
  "spoken_languages": [
    {
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "Life is like a box of chocolates...you never know what you're gonna get.",
  "title": "Forrest Gump",
  "video": false,
  "vote_average": 8.4,
  "vote_count": 12334
}
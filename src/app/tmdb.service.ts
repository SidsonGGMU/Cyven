import {Injectable} from '@angular/core';
import {MovieQuery, MovieResponse, MovieDetails, Recommandations, Genre} from './tmdb-data/Movie';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {PersonQuery, PersonResponse, CastResponse, PersonDetails} from './tmdb-data/Person';
import {SearchMovieQuery, SearchMovieResponse} from './tmdb-data/searchMovie';
import {SearchPeopleQuery, SearchPeopleResponse} from './tmdb-data/SearchPeople';
import {TVQuery, TVResponse} from './tmdb-data/TV';
import {SearchTVQuery, SearchTVResponse} from './tmdb-data/SearchTV';
import {CreditsResponse} from './tmdb-data/Credits';
import {TrendingQuery, TrendingResponse} from './tmdb-data/TrendingSearch';

const tmdbApi = 'https://api.themoviedb.org/3';
type HTTP_METHOD = 'GET' | 'POST' | 'DELETE' | 'PUT';

function AlxToObjectString(data: Object): { [key: string]: string } {
  const res = {};
  for (const k in data) {
    const v = data[k];
    res[k] = typeof v === 'string' ? v : JSON.stringify(v);
  }
  return res;
}

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private api_key: string;
  public logo = '../../assets/tmdb.png';

  private async get<T>(url: string, data: Object): Promise<HttpResponse<T>> {
    return this._http.get<T>(url, {
      observe: 'response',
      params: {...AlxToObjectString(data), api_key: this.api_key}
    }).toPromise();
  }


  constructor(private _http: HttpClient) {
  }

  init(key: string): this {
    this.api_key = key;
    return this;
  }

  // _______________________________________________________________________________________________________________________________________
  // Movies ________________________________________________________________________________________________________________________________
  // _______________________________________________________________________________________________________________________________________

  async getTrendingMedia(query: TrendingQuery): Promise<TrendingResponse> {
    const url = `${tmdbApi}/trending/${query.media_type}/${query.time_window}`;
    const res = await this.get<TrendingResponse>(url, {});
    return res.body;
  }

  async searchMovie(query: SearchMovieQuery): Promise<SearchMovieResponse> {
    const url = `${tmdbApi}/search/movie`;
    const res = await this.get<SearchMovieResponse>(url, query);
    return res.body;
  }

  async getMovie(id: number, options?: MovieQuery): Promise<MovieResponse> {
    const url = `${tmdbApi}/movie/${id}`;
    const res = await this.get<MovieResponse>(url, options);
    return res.body;
  }

  async getGenres(): Promise<Genre> {
    const url = `${tmdbApi}/genre/movie/list`;
    const res = await this.get<Genre>(url, []);
    return res.body;
  }

  async getCrewFromMovie(id: number, options?: MovieQuery): Promise<CreditsResponse> {
    const url = `${tmdbApi}/movie/${id}/credits`;
    const res = await this.get<CreditsResponse>(url, options);
    return res.body;
  }

  async getRecommandations(id: number, options?: MovieQuery): Promise<Recommandations> {
    const url = `${tmdbApi}/movie/${id}/recommendations`;
    const res = await this.get<Recommandations>(url, options);
    return res.body;
  }

  async getMovieDetails(id: number, options?: MovieQuery): Promise<MovieDetails> {
    const P1 = this.getMovie(id);
    const P2 = this.getCrewFromMovie(id);
    const P3 = this.getRecommandations(id);
    const P = Promise.all([P1, P2, P3]);
    const [movie, crew, recommendations] = await P;
    return {movie, crew, recommendations};
  }

  async searchMovieDetails(query: SearchMovieQuery): Promise<any> {
    const searchedMovies = await this.searchMovie(query);
    const Pcredits = searchedMovies.results.map(resp => this.getCrewFromMovie(resp.id));
    const credits = await Promise.all(Pcredits);
    return {searchedMovies, credits};
  }

  // _______________________________________________________________________________________________________________________________________
  // Person / People _______________________________________________________________________________________________________________________
  // _______________________________________________________________________________________________________________________________________
  async getPerson(id: number, options?: PersonQuery): Promise<PersonResponse> {
    const url = `${tmdbApi}/person/${id}`;
    const res = await this.get<PersonResponse>(url, options);
    return res.body;
  }

  async getPersonCast(id: number, options?: PersonQuery): Promise<CastResponse> {
    const url = `${tmdbApi}/person/${id}/movie_credits`;
    const res = await this.get<CastResponse>(url, options);
    return res.body;
  }

  async getPersonDetails(id: number, options?: PersonQuery): Promise<PersonDetails> {
    const P1 = this.getPerson(id);
    const P2 = this.getPersonCast(id);
    const P = Promise.all([P1, P2]);
    const [actor, known_for] = await P;
    return {actor, known_for};
  }

  async searchPerson(query: SearchPeopleQuery): Promise<SearchPeopleResponse> {
    const url = `${tmdbApi}/search/person`;
    const res = await this.get<SearchPeopleResponse>(url, query);
    return res.body;
  }

  // _______________________________________________________________________________________________________________________________________
  // TV ____________________________________________________________________________________________________________________________________
  // _______________________________________________________________________________________________________________________________________
  async getTV(id: number, options?: TVQuery): Promise<TVResponse> {
    const url = `${tmdbApi}/tv/${id}`;
    const res = await this.get<TVResponse>(url, options);
    return res.body;
  }

  async searchTV(query: SearchTVQuery): Promise<SearchTVResponse> {
    const url = `${tmdbApi}/search/tv`;
    const res = await this.get<SearchTVResponse>(url, query);
    return res.body;
  }

  getPath(path: string): string {
    return (path === null ? this.logo : `https://image.tmdb.org/t/p/w500${path}`);
  }

}

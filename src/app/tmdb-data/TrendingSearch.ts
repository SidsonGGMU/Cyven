export interface TrendingQuery {
    media_type: 'all' | 'tv' | 'person' | 'movie';
    time_window: 'day' | 'week';
  }
  
  export interface TrendingResponse {
    page?: number;
    results?: TrendingResult[];
    total_pages?: number;
    total_results?: number;
  }
  
  // Trending report is here to interface only a member of TrendingResponse
  export interface TrendingResult {
    poster_path?: string;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    id?: number;
    original_title?: string;
    original_name?: string;
    original_language?: string;
    title?: string;
    backdrop_path?: string;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average?: number;
  }
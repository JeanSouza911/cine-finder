interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  tagline?: string;
  budget?: number;
  revenue?: number;
  runtime?: number;
  release_date?: string;
  overview?: string;
}

interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

const API_BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

const fetchFromTmdb = async <T>(endpoint: string): Promise<T> => {
  const url = `${API_BASE_URL}${endpoint}?api_key=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Erro ao buscar dados do TMDB: ${response.statusText}`);
  }
  return response.json();
};

export const getPopularMovies = async (): Promise<PaginatedResponse<Movie>> => {
  return fetchFromTmdb<PaginatedResponse<Movie>>("movie/popular");
};

export const searchMovies = async (query: string): Promise<PaginatedResponse<Movie>> => {
  return fetchFromTmdb<PaginatedResponse<Movie>>(`search/movie?query=${query}`);
};

export const getMovieDetails = async (id: number): Promise<Movie> => {
  return fetchFromTmdb<Movie>(`movie/${id}`);
};

export const getMovieImageUrl = (path: string, size: "w500" | "original" = "w500"): string => {
  return `${IMAGE_BASE_URL}${size}${path}`;
};

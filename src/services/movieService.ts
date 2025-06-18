import axios from "axios";
import type { Movie } from "../../src/types/movie.ts";

interface TMDBResponse {
  results: Movie[];
}

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<TMDBResponse>(BASE_URL, {
    params: { query },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response.data.results;
};

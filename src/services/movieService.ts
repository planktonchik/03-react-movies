import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieHttpResponse {
  results: Movie[];
}

const URL = "https://api.themoviedb.org/3/search/movie";
const token = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  console.log("Token:", token);
  const response = await axios.get<MovieHttpResponse>(URL, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGU2N2U3N2IyYWQzN2VlOTY0ZjBmOGQ1OGQ1MmFiOCIsIm5iZiI6MTc1MDI1MDQ4My45MjksInN1YiI6IjY4NTJiM2YzZjlmYTA4ZjA5MmJiZGJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2bc3gUkSt7QYbk1OCNS5djsJTAo2wug5FcO9T-79NuE",
    },
  });
  return response.data.results;
};

export const imgURL = "https://image.tmdb.org/t/p/w500";

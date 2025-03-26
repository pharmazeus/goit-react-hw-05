import { fetchTrendMovies } from "../fetchServices";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList/MoviesList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadTrending = async () => {
      try {
        const results = await fetchTrendMovies();
        setMovies(results);
      } catch (error) {
        setError(error.message || "There is problem,please reload...");
      } finally {
        setIsLoading(false);
      }
    };

    loadTrending();
  }, []);
  console.log("Fetched movies:", movies);

  return (
    <div>
      <h1>Trending movies</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {!isLoading && !error && movies.length > 0 && (
        <MoviesList movies={movies} />
      )}
    </div>
  );
}

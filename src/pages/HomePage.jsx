import { fetchTrendMovies } from "../fetchServices";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import styles from "./page_styles/HomePage.module.css";

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
        setError(error.message || "There is problem, please reload...");
      } finally {
        setIsLoading(false);
      }
    };

    loadTrending();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Trending movies</h1>
      {isLoading && <p className={styles.message}>Loading...</p>}
      {error && <p className={styles.message}>Error: {error}</p>}
      {!isLoading && !error && movies.length > 0 && (
        <MoviesList movies={movies} />
      )}
    </div>
  );
}

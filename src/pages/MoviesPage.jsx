import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesList from "../components/MoviesList/MoviesList";
import { fetchMoviesByQuery } from "../fetchServices";
import styles from "./page_styles/MoviesPage.module.css";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const query = searchParams.get("query") ?? "";

  const handleSearch = (queryValue) => {
    if (!queryValue.trim()) return;
    setSearchParams({ query: queryValue.trim() });
  };

  useEffect(() => {
    if (!query.trim()) return;

    async function getMovies() {
      try {
        setLoading(true);
        const data = await fetchMoviesByQuery(query);
        setMovies(data);
        setError(data.length === 0 ? "No results found." : "");
      } catch (err) {
        setError("Something went wrong. Try again.");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [query]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Find your movie</h1>
      <SearchForm onSubmit={handleSearch} defaultValue={query} />

      {loading && <p className={styles.message}>Loading...</p>}
      {error && <p className={styles.message}>{error}</p>}
      {!loading && !error && movies.length > 0 && (
        <MoviesList movies={movies} />
      )}
    </div>
  );
}

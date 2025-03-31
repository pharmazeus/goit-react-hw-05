import { useEffect, useState, useRef } from "react";
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { fetchMovieById } from "../fetchServices";
import { getImageUrl } from "../utils/getImageUrl";
import styles from "./page_styles/MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const backLinkRef = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    async function getDetails() {
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }

    getDetails();
  }, [movieId]);

  if (error) return <p>Something went wrong 😢</p>;
  if (!movie) return <p>Loading movie...</p>;

  return (
    <div className={styles.container}>
      <button
        className={styles.goBackBtn}
        onClick={() => navigate(backLinkRef.current)}
      >
        Go back
      </button>

      <div className={styles.detailsWrapper}>
        <img
          className={styles.poster}
          src={getImageUrl(movie.poster_path, "w342")}
          alt={movie.title}
        />
        <div className={styles.content}>
          <h3 className={styles.title}>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h3>
          <p className={styles.score}>
            User Score: {Math.round(movie.vote_average * 10)}%
          </p>

          <div className={styles.section}>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
          </div>

          <div className={`${styles.section} ${styles.genres}`}>
            <h4>Genres</h4>
            {movie.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
        </div>
      </div>

      <ul className={styles.additionalLinks}>
        <li>
          <Link className={styles.link} to="casts">
            Cast
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="reviews">
            Review
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

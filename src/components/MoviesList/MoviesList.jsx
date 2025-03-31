import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";
import { getImageUrl } from "../../utils/getImageUrl";

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li className={styles.item} key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={styles.link}
          >
            <img
              className={styles.poster}
              src={getImageUrl(movie.poster_path, "w185")}
              alt={movie.title}
            />
            <h4 className={styles.title}>{movie.title}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
}

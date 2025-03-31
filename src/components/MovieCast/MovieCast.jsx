import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../fetchServices";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../../utils/getImageUrl";
import styles from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [casts, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.castList}>
        {casts.map((cast) => (
          <li key={cast.id} className={styles.castItem}>
            <img
              className={styles.avatar}
              src={
                cast.profile_path
                  ? getImageUrl(cast.profile_path, "w185")
                  : "https://via.placeholder.com/185x278?text=No+Image"
              }
              alt={cast.name}
              loading="lazy"
            />
            <p className={styles.name}>{cast.name}</p>
            <p className={styles.character}>as {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

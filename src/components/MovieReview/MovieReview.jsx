import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReview } from "../../fetchServices";
import styles from "./MovieReview.module.css";

export default function MovieReview() {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    async function getMovieReview() {
      const data = await fetchMovieReview(movieId);
      setReview(data);
    }
    getMovieReview();
  }, [movieId]);

  return (
    <div className={styles.wrapper}>
      {review.length > 0 ? (
        <ul className={styles.reviewList}>
          {review.map((review) => (
            <li key={review.id} className={styles.reviewItem}>
              <h4 className={styles.author}>{review.author}</h4>
              <p className={styles.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>
          We don't have any reviews for this movie.
        </p>
      )}
    </div>
  );
}

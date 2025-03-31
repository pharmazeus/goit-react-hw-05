import { Link } from "react-router-dom";
import styles from "./page_styles/NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link className={styles.homeLink} to="/">
        Back to Home
      </Link>
    </div>
  );
}

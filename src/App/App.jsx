import { Routes, Route } from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import MoviesPage from "../pages/MoviesPage";
// import NotFoundPage from "../pages/NotFoundPage";
import Navigation from "../components/Navigation/Navigation";
// import MovieDetailsPage from "../pages/MovieDetailsPage";
// import MovieReview from "../components/MovieReview/MovieReview";
// import MovieCast from "../components/MovieCast/MovieCast";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const MovieReview = lazy(() => import("../components/MovieReview/MovieReview"));
const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"));

export default function App() {
  return (
    <div className="container">
      <Navigation />
      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="casts" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

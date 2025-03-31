import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTI1MWVmMmY1Mzk2ODkzMTI3ZGZhNzRlYTUzOGUwYSIsIm5iZiI6MTc0Mjk1MzU1NS4xNDUsInN1YiI6IjY3ZTM1YzUzZDcwYzYxNTkwMzc2MDAwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xoPZ0GF8bPrt5EjkbOoX_EMx3jU4oPY0pwoEFCWmYMA",
  },
};

export const fetchTrendMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day";

  try {
    const response = await axios.get(url, options);

    return response.data.results;
  } catch (error) {
    console.error("Failed to fetch trending movies:", error);
    throw error;
  }
};

export const fetchMovieById = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  try {
    const response = await axios.get(url, options);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReview = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  try {
    const response = await axios.get(url, options);

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  try {
    const response = await axios.get(url, options);

    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMoviesByQuery = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
    query
  )}&include_adult=false&language=en-US&page=1`;
  try {
    const response = await axios.get(url, options);

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

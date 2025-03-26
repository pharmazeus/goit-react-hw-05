import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTI1MWVmMmY1Mzk2ODkzMTI3ZGZhNzRlYTUzOGUwYSIsIm5iZiI6MTc0Mjk1MzU1NS4xNDUsInN1YiI6IjY3ZTM1YzUzZDcwYzYxNTkwMzc2MDAwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xoPZ0GF8bPrt5EjkbOoX_EMx3jU4oPY0pwoEFCWmYMA",
  },
};

export const fetchMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

  const response = await axios.get(url, options);
  console.log(response.data);
  return response.data.results;
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

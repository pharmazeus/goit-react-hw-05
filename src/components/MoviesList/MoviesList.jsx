export default function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </li>
        );
      })}
    </ul>
  );
}

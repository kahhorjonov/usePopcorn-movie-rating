import { Movie as MovieType } from '../types/movieType';
import Movie from './Movie';

const MovieList = ({ movies }: { movies: MovieType[] }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => <Movie movie={movie} key={movie.imdbID} />)}
    </ul>
  );
};

export default MovieList;

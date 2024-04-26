import { Movie as MovieType } from '../types/movieType';

const Results = ({ movies }: { movies: MovieType[] }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

export default Results;

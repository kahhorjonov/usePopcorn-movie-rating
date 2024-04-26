import { WatchedMovie as WatchedMovieType } from '../types/movieType';
import WatchedMovie from './WatchedMovie';

const WatchedMovieList = ({ watched }: { watched: WatchedMovieType[] }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchedMovieList;

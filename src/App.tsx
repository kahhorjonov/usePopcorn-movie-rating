// import { useState } from 'react';
// import Box from './components/Box';
// import Logo from './components/Logo';
// import Main from './components/Main';
// import MovieList from './components/MovieList';
// import Navbar from './components/Navbar';
// import Results from './components/Results';
// import Search from './components/Search';
// import WatchedMovieList from './components/WatchedMovieList';
// import WatchedSummary from './components/WatchedSummary';
// import { tempMovieData, tempWatchedData } from './constants/tempMoviesData';
import StarRating from './components/StarRating';

function App() {
  // const [movies, setMovies] = useState(tempMovieData);
  // const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <StarRating
        maxRating={5}
        color="#fcc419"
        size={48}
        messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      />
      <StarRating
        maxRating={5}
        color="red"
        size={36}
        messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
        defaultRating={3}
      />
      {/* <Navbar>
        <Logo />
        <Search />
        <Results movies={movies} />
      </Navbar>

      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main> */}
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import Navigation from './components/Navigation/Navigation';
// import Home from './pages/Home/Home';
// import MoviesPage from './pages/MoviesPage/MoviesPage';
// import NotFound from './pages/NotFound/NotFound';
// import MovieDetails from './pages/MovieDetails/MovieDetails';
// import MovieReviews from './components/MovieReviews/MovieReviews';
// import MovieCast from './components/MovieCast/MovieCast';


const Home = lazy(() => import('./pages/Home/Home'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));

const App = () => {
  return (
      <div>
      <Navigation />
      <Suspense fallback={ <h2>Loading by suspense</h2> } >
                  <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />}/>
        </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

    </div>
  )
}


export default App;


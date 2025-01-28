<<<<<<< Updated upstream
// import React, { useEffect, useState } from 'react'
// import MovieList from '../../components/MovieList/MovieList'
// import { fetchMovie } from '../../services/api';

// const HomePage = () => {

//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const getAllMovies = async () => {
//       setIsLoading(true);
//       setError(null)
//       try {
//         const data = await fetchMovie();
//         setMovies(data.results); 
//       } catch (error) {
//         setError(error)
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     getAllMovies();
//   }, []);

//     return (
//       <div>
//         <h2>Trending today</h2>
//         {isLoading && <p>Loading</p>}
//         {error && <p>404</p>}
//         {movies.length > 0 && <MovieList movies={movies} /> }
//       </div>

//   )
// }

// export default HomePage

import { NavLink } from "react-router-dom"
import css from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div>
      <div className={css.hero}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.textHero}>You can find everything you want in our catalog</p>
        <NavLink to='/catalog' className={css.btnViewNow}>View Now</NavLink>
      </div>
    </div>
  )
}
=======
import React, { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList'
import { fetchMovie } from '../../services/api';

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getAllMovies = async () => {
      setIsLoading(true);
      setError(null)
      try {
        const data = await fetchMovie();
        setMovies(data.results); 
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false);
      }
    };
    getAllMovies();
  }, []);

    return (
      <div>
        <h2>Trending today</h2>
        {isLoading && <p>Loading</p>}
        {error && <p>404</p>}
        {movies.length > 0 && <MovieList movies={movies} /> }
      </div>

  )
}

>>>>>>> Stashed changes
export default HomePage
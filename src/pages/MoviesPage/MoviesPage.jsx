import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { fetchSearch } from '../../services/api';
import SearchMovie from '../../components/SearchMovie/SearchMovie'
import MovieList from '../../components/MovieList/MovieList';


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams()

  const handeChangeQuery = newQuery => {
    setSearchParams({query: newQuery})
  }

  const searchQuery = searchParams.get("query")

  useEffect(() => {
    if (!searchQuery) return
        const getDeta = async () => {
          const data = await fetchSearch(searchQuery);
          setMovies(data.results)
        };

        getDeta();
    }, [searchQuery]);

  return (
    <div>
      <SearchMovie handeChangeQuery={handeChangeQuery} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  )
}

export default MoviesPage


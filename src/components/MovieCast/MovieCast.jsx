import React, { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';

const MovieCast = () => {
    const { movieId } = useParams();
    const [castMovie, setcastMovie] = useState([]);

    useEffect(() => {
        const getCast = async () => {
            const data = await fetchMovieCast(movieId);
          setcastMovie(data);
        };

        getCast();
    }, [movieId]);

    const baseUrl = "https://image.tmdb.org/t/p/w500/";
  
 if (castMovie.length === 0) {
    return <p>There are no info about cast</p>;
  } else {
    return (
      <>
        <ul className={css.list}>
          {castMovie.map(({ id, name, profile_path, character }) => {
              return (
                <li key={id} className={css.itemPhoto}>
                  <img
                    src={profile_path ? baseUrl + profile_path : null}
                    alt={name}
                    className={css.photo}
                  />
                 <p className="text">{name}</p>
                  <p>Character: {character}</p>  

                </li>
              );
            
          })}
        </ul>
      </>
    );
  }
};


export default MovieCast;

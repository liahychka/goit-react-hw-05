import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import css from './MovieReviews.module.css';

const Reviews = () => {
    
    const { movieId } = useParams();
    const [reviewsMovie, setreviewsMovie] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            const data = await fetchMovieReviews(movieId);
            setreviewsMovie(data);
        };

        getReviews();
    }, [movieId]);

    if (reviewsMovie.length === 0) {
        return <p>There are no reviews yet</p>;
    } else {
        return (
            <div>
                <ul className={css.list}>
                    {reviewsMovie.map(({ id, author, content }) => {
                        if (author) {
                            return (
                                <li key={id} className={css.item}>
                                    <h2>{author}</h2>
                                    <p className="text"> {content}</p>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        )
    }
}

    export default Reviews;
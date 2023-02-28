import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from '../../services/api';
import style from './Reviews.module.css';

const Reviews = () => {
  const [filmReviews, setFilmReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await fetchReview(id);
        setFilmReviews(results);
      } catch (error) {}
    };
    fetchReviews();
  }, [id]);

  return filmReviews.length > 0 ? (
    <ul className={style.list}>
      {filmReviews.map(film => {
        return (
          <li className={style.item} key={film.id}>
            <p className={style.name}>Author: {film.author}</p>
            <p className={style.text}>{film.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    'We have not reviews for this film'
  );
};

Reviews.defaultProps = {
  filmReviews: [],
};

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string,
  content: PropTypes.string,
};

export default Reviews;

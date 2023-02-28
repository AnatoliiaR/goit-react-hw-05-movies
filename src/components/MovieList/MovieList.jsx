import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import style from './MovieList.module.css';

const MovieList = ({ results }) => {
  console.log(results);
  const location = useLocation();
  const elements = results.map(({ id, title, overview }) => (
    <li key={id}>
      <Link
        className={style.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {title}
      </Link>
    </li>
  ));

  return <ul className={style.list}>{elements}</ul>;
};

export default MovieList;

MovieList.defaultProps = {
  results: [],
};

MovieList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
};

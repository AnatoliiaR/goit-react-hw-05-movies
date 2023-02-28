import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredit } from '../../services/api';
import style from './Cast.module.css';
import user from '../../images/user.png';

const Cast = () => {
  const [filmCast, setFilmCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const { cast } = await fetchCredit(id);
        setFilmCast(cast);
      } catch (error) {}
    };
    fetchCredits();
  }, [id]);

  return (
    <ul className={style.list}>
      {filmCast.map(film => {
        return (
          <li className={style.item} key={film.id}>
            <img
              className={style.img}
              src={
                film.profile_path
                  ? `https://image.tmdb.org/t/p/w200${film.profile_path}`
                  : user
              }
              alt={film.name}
            />
            <div>
              <p className={style.p}>
                Name: <span className={style.name}>{film.name}</span>
              </p>

              <p className={style.p}>
                Character: <span className={style.name}>{film.character}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

Cast.defaultProps = {
  filmCast: [],
};

export default Cast;

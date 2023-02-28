import { useState, useEffect } from 'react';
import {
  NavLink,
  useParams,
  useLocation,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import { fetchById } from '../../services/api';
import style from './MovieDetails.module.css';

const MovieDetails = () => {
  const [film, setFilm] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from || '/';
  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await fetchById(id);
        setFilm(result);
      } catch (error) {}
    };
    fetchMovie();
  }, [id]);

  return (
    <>
      <button className={style.button} onClick={goBack}>
        Go back
      </button>
      <h1 className={style.title}>{film?.title}</h1>
      <div className={style.info}>
        <div>
          <img
            className={style.img}
            src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
            alt={film?.title}
          />
        </div>
        <div>
          <table className={style.tleft}>
            <tbody>
              <tr>
                <td className={style.td}>
                  <p>User Score: </p>
                </td>
                <td>
                  <span>{Math.round(film?.vote_average * 10)}%</span>
                </td>
              </tr>

              <tr>
                <td className={style.td}>
                  <p>Genres:</p>
                </td>
                <td>
                  <p>{film?.genres.map(genre => genre.name).join(', ')}</p>
                </td>
              </tr>
              <tr>
                <td className={style.td}>
                  <p>Overview:</p>
                </td>
                <td>
                  <p>{film?.overview}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className={style.subtitle}>Additional information</h3>

        <ul className={style.list}>
          <li>
            <NavLink className={style.link} to="cast" state={{ from }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={style.link} to="reviews" state={{ from }}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;

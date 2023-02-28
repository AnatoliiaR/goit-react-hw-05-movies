import { NavLink } from 'react-router-dom';
import style from './navbar.module.css';
import items from './items';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id} className={style.li}>
      <NavLink className={style.alink} to={link} data-item={text}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={style.menu}>{elements}</ul>;
};

export default Navbar;

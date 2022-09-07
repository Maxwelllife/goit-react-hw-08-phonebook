import s from './NavBarAuth.module.css';
import { NavLink } from 'react-router-dom';
import { navItems } from './NavBarItems';

const getClassName = ({ isActive }) => {
  return isActive ? s.active : s.link;
};

const NavBarAuth = () => {
  const elements = navItems.map(({ id, to, text }) => (
    <li className={s.menu__item} key={id}>
      <NavLink to={to} className={getClassName}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={s.navList}>{elements}</ul>;
};

export default NavBarAuth;

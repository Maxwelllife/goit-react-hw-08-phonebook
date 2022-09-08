import { menuItems } from './HeaderMenuItems';
import s from './HeaderMenu.module.css';
import { NavLink } from 'react-router-dom';

const getLinkClassName = props => {
  const { isActive } = props;
  return isActive ? s.activeLink : s.link;
};

const HeaderMenu = ({ isAuth }) => {
  const selectedItems = isAuth
    ? menuItems
    : menuItems.filter(item => !item.private);
  const elements = selectedItems.map(({ id, to, text }) => (
    <li className={s.menu__item} key={id}>
      <NavLink to={to} className={getLinkClassName}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={s.navList}>{elements}</ul>;
};

export default HeaderMenu;

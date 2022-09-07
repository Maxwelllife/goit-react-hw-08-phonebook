import Logo from './Logo/Logo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import NavBarAuth from './NavBarAuth/NavBarAuth';

import PropTypes from 'prop-types';

import s from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={s.app}>
        <Logo />
        <HeaderMenu />
        <NavBarAuth />
      </header>
    </>
  );
};

Header.propTypes = {
  isActive: PropTypes.bool,
};

export default Header;

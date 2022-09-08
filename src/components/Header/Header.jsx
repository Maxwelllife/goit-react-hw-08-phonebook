import Logo from './Logo/Logo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import NavBarAuth from './NavBarAuth/NavBarAuth';
import UserMenu from './UserMenu/UserMenu';

import PropTypes from 'prop-types';

import s from './Header.module.css';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selector';

const Header = () => {
  const isAuth = useSelector(getToken);

  return (
    <>
      <header className={s.app}>
        <Logo />
        <HeaderMenu isAuth={isAuth} />
        {isAuth ? <UserMenu /> : <NavBarAuth />}
      </header>
    </>
  );
};

Header.propTypes = {
  isActive: PropTypes.bool,
};

export default Header;

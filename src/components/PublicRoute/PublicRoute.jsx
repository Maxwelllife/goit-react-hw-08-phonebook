import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selector';

const PublicRoute = () => {
  const isToken = useSelector(getToken);
  return <>{isToken ? <Navigate to="/contacts" /> : <Outlet />}</>;
};

export default PublicRoute;

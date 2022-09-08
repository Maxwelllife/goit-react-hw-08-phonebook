import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selector';

const PrivateRoute = () => {
  const isToken = useSelector(getToken);
  return <>{isToken ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;

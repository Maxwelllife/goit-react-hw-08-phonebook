import 'modern-normalize/modern-normalize.css';
import s from './app.module.css';
import PagesRoutes from '../PagesRoutes/PagesRoutes';
import Header from './Header/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentUser } from '../redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className={s.wrap}>
      <Header />
      <PagesRoutes />
      <ToastContainer
        autoClose={2000}
        hideProgressBar
        position="top-center"
        theme="colored"
        transition={Zoom}
      />
    </div>
  );
};
export default App;

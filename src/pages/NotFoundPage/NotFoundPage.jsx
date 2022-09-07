import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <main>
      <Link className={s.link} to="/">
        Go to home page
      </Link>
    </main>
  );
};

export default NotFoundPage;

import LoginForm from 'components/LoginForm/LoginForm';
import { login } from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selector';

// все данные с формы прилетают в onSubmitClick -> onLogin -> data-> dispatch выполняет операцию signup
const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };
  const isAuth = useSelector(getToken);
  return (
    <main>
      {!isAuth ? (
        <LoginForm onSubmitClick={onLogin} />
      ) : (
        <h2>Now you can use Phonebook</h2>
      )}
    </main>
  );
};

export default LoginPage;

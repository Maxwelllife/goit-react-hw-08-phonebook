import LoginForm from 'components/LoginForm/LoginForm';
import { login } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

// все данные с формы прилетают в onSubmitClick -> onLogin -> data-> dispatch выполняет операцию signup
const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };
  return (
    <main>
      <LoginForm onSubmitClick={onLogin} />
    </main>
  );
};

export default LoginPage;

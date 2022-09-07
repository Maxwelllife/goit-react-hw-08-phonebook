import RegisterForm from 'components/RegisterForm/RegisterForm';
import { signup } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

// все данные с формы прилетают в onSubmitClick -> onRegister -> data-> dispatch выполняет операцию signup
const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(signup(data));
  };
  return (
    <main>
      <RegisterForm onSubmitClick={onRegister} />
    </main>
  );
};

export default RegisterPage;

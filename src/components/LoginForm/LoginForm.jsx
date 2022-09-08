import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selector';
import * as Yup from 'yup';
import s from './LoginForm.module.css';

const LoginForm = ({ onSubmitClick }) => {
  const isAuth = useSelector(getToken);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Required'),

        password: Yup.string()
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
            'Must numbers, english small and large letters'
          )
          .min(8, 'Email must be 8 characters or more')
          .required('Required'),
        // .typeError('you must specify a number')
      })}
      // values это наш стейт formika
      onSubmit={(values, props) => {
        const { resetForm } = props;
        onSubmitClick({ ...values });
        resetForm();
      }}
    >
      {props => {
        const { values, handleChange, handleSubmit, errors } = props;
        return (
          <Form className={s.form} onSubmit={handleSubmit}>
            <div className={s.block}>
              <Field
                name="email"
                type="email"
                value={values.email}
                className={s.input}
                onChange={handleChange}
              />
              <label htmlFor="email" className={s.label}>
                Email
              </label>
              <ErrorMessage name="email">
                {msg => <div className={s.error}>{msg}</div>}
              </ErrorMessage>
            </div>

            <div className={s.block}>
              <Field
                name="password"
                type="password"
                value={values.password}
                className={s.input}
                onChange={handleChange}
              />
              <label htmlFor="password" className={s.label}>
                Password
              </label>
              <ErrorMessage name="password">
                {msg => <div className={s.error}>{msg}</div>}
              </ErrorMessage>
            </div>

            <button
              type="submit"
              className={s.btn}
              disabled={errors.name || errors.number}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;

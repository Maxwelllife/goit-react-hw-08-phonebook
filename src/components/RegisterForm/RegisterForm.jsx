import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './RegisterForm.module.css';

const RegisterForm = ({ onSubmitClick }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            'Must be only charaters and space'
          )
          .min(2, 'Must be 2 characters or more')
          .required('Required'),
        email: Yup.string()
          //   .matches(/^[0-9]+$/gi, 'Must be only numbers')
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
            'Must be only numbers, latina symbols'
          )
          .min(8, 'Email must be 8 characters or more')
          .required('Required'),
        // .typeError('you must specify a number')
      })}
      // values это наш стейт formika
      onSubmit={(values, props) => {
        const { resetForm } = props;
        console.log('props: ', props);
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
                name="name"
                type="text"
                value={values.name}
                className={s.input}
                onChange={handleChange}
              />
              <label htmlFor="name" className={s.label}>
                Name
              </label>
              <ErrorMessage name="name" component="div" className={s.error} />
            </div>
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

  return <div>RegisterForm</div>;
};

export default RegisterForm;

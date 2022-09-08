import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactsForm.module.css';
import PropTypes from 'prop-types';

const ContactsForm = ({ catchSubmitInfo }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            'Should have letters, apostrophe, dash, spaces'
          )
          .min(2, 'Your name less then 2 symbols? Are you kidding?')
          .required('Required'),
        number: Yup.string()
          .min(7, 'Must be 7 digits or more')
          .required('Required'),
        // на случай когда не строка в число будет типом - проверка на типы
        // .typeError('you must specify a number'),
      })}
      // values это наш стейт formika
      onSubmit={(values, props) => {
        const { resetForm } = props;
        console.log('props: ', props);
        catchSubmitInfo({ ...values });
        resetForm();
      }}
    >
      {props => {
        const { values, handleChange, handleSubmit, errors } = props;
        console.log('errors: ', errors);
        return (
          <Form onSubmit={handleSubmit} className={s.form}>
            <label className={s.label}>
              Name
              <Field
                className={s.inputName}
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />{' '}
              <ErrorMessage name="name" component="div" className={s.error} />
            </label>

            <label className={s.label}>
              Number
              <Field
                className={s.inputNumber}
                type="tel"
                name="number"
                value={values.number}
                onChange={handleChange}
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
              <ErrorMessage name="number" component="div" className={s.error} />
            </label>

            <button
              className={s.button}
              type="submit"
              disabled={errors.name || errors.number}
            >
              Add contact
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

ContactsForm.propTypes = {
  catchSubmitInfo: PropTypes.func.isRequired,
};

export default ContactsForm;

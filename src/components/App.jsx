import 'modern-normalize/modern-normalize.css';
import s from './app.module.css';
import { useEffect } from 'react';
import SectionTitle from './Section/SectionTitle';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, removeContact, addContact } from 'redux/operations';
import { filterContact } from '../redux/slice';

const App = () => {
  const { items, filter, loading } = useSelector(store => {
    return store.phonebook;
  });

  const filterValue = filter.toLowerCase();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = data => {
    return dispatch(addContact(data));
  };

  const onRemoveContact = id => dispatch(removeContact(id));

  const onfilterContact = e => dispatch(filterContact(e.target.value));

  const getVisibleContacts = () => {
    return items.filter(item => item.name.toLowerCase().includes(filterValue));
  };

  return (
    <div className={s.wrap}>
      <SectionTitle title="Phonebook">
        {loading && <p>...Loading</p>}
        <ContactsForm catchSubmitInfo={onAddContact} />
      </SectionTitle>
      <SectionTitle title="Contacts">
        <Filter filterValue={filterValue} onFilter={onfilterContact} />
        {items.length ? (
          <ContactList
            items={getVisibleContacts()}
            onDeleteContact={onRemoveContact}
          />
        ) : (
          <p>Your phonebook is empty</p>
        )}
      </SectionTitle>
    </div>
  );
};
export default App;

import { useEffect } from 'react';
import { Section, ContactsForm, ContactList, Filter } from 'components';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  removeContact,
  addContact,
} from 'redux/contacts/contacts-operations';
import { filterContact } from '../../redux/contacts/contacts-slice';
import { getContacts } from '../../redux/contacts/contacts-selector';

const ContactsPage = () => {
  const { items, filter, loading } = useSelector(getContacts);

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
    const normalized = filter.toLowerCase().trim();
    return items.filter(item => item.name.toLowerCase().includes(normalized));
  };

  return (
    <>
      <Section title="Phonebook">
        {loading && <p>...Loading</p>}
        <ContactsForm catchSubmitInfo={onAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter filterValue={filter} onFilter={onfilterContact} />
        {items ? (
          <ContactList
            items={getVisibleContacts()}
            onDeleteContact={onRemoveContact}
          />
        ) : (
          <p>Your phonebook is empty</p>
        )}
      </Section>
    </>
  );
};

export default ContactsPage;

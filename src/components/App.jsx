import styled from '@emotion/styled';
import Phonebook from './Phonebook';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';
import Filter from './Filter';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';



export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts === null) {
      return [];
    }
    return savedContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts === []) {
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ( name, number) => {
    const checkedContact = contactCheck(name);
    if (checkedContact !== undefined) {
      return toast.error(`${name} is already in the contact list`);
    }
    setContacts(prevContacts => [...prevContacts, { id: nanoid(), name, number }]);
    toast.success('You have added a new contact');
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
    toast.error('You have deleted a contact');
  };

  function contactCheck(value) {
    return contacts.find(
      contact => contact.name.toLowerCase() === value.toLowerCase()
    );
  }
        return (
          <Container>
            <Phonebook onSubmit={addContact} />
            <h2>Contacts</h2>
            <Filter onChange={setFilter} />
            <ContactList
              visibleFilter={filteredContacts()}
              onDeleteContact={deleteContact}
            />
            <Toaster
              toastOptions={{
                success: {
                  style: {
                    background: 'green',
                    color: 'white',
                  },
                },
                error: {
                  style: {
                    background: 'red',
                    color: 'white',
                  },
                },
              }}
            />
          </Container>
        );
}

/////////////////////////////// STYLE /////////////////////////

const Container = styled.div`
  padding: 50px;
  border: 1px solid;
  width: 400px;
`;

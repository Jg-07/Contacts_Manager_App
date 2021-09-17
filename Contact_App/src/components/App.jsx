import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 } from 'uuid';
import Header from './Header';
import AddContacts from './AddContacts';
import ContactList from './ContactList';

function App() {

  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_DATA = 'contacts';

  useEffect(() => {
    const retriveLoacalData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA));
    if (retriveLoacalData) setContacts(retriveLoacalData);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_DATA, JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: v4(), ...contact }]);
  }

  const delContactHandler = (id) => {
    const newContactList = contacts.filter((contacts) => {
      return (contacts.id !== id)
    });
    setContacts(newContactList);
  }

  return (
    <div className="App">
      <Header />
      <AddContacts addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} removeContact={delContactHandler} />
    </div>
  )
}

export default App

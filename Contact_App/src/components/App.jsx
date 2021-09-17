import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import AddContacts from './AddContacts';
import ContactList from './ContactList';

function App() {

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }

  // const delContactHandler = (id) => {
  //   const newContactList = contacts.filter((contacts) => {
  //     return (contacts.id !== id)
  //   });
  //   setContacts(newContactList);
  // }

  return (
    <div className="App">
      <Header />
      <AddContacts addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App

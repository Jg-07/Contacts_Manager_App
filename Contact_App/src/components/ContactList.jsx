import React from "react";
import './App.css';
import './ContactCard';
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const renderContacts = props.contacts.map((contacts) => {
        return (
            <ContactCard contacts={contacts} />
        )
    })

    return (
        <div class='contactList'>
            {renderContacts}
        </div>
    )
}

export default ContactList
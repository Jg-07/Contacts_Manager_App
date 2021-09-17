import React from "react";
import './App.css';
import contacts from '../images/contacts.png';
import bin from '../images/trash.png';

const ContactCard = (props) => {
    const { id, name, email } = props.contacts;
    return (
        <div class='card'>
            <div class='data'>
                <img src={contacts} alt="" />
                <div class='detial'>
                    <h3>{name}</h3>
                    <small>{email}</small>
                </div>
            </div>
            <img src={bin} alt="" />
        </div>
    )
}

export default ContactCard
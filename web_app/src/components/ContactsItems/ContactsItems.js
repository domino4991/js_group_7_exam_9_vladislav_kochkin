import React from 'react';
import './ContactsItems.css';
import ContactItem from "./ContactItem/ContactItem";
import {useDispatch} from "react-redux";
import {showModal} from "../../store/actions/contactsActions";

const ContactsItems = props => {
    const dispatch = useDispatch();
    return (
        <div className="Contacts-items">
            {Object.keys(props.contacts).map(item => <ContactItem
                key={item}
                name={props.contacts[item].name}
                photo={props.contacts[item].photo}
                id={item}
                clicked={() => dispatch(showModal(item))}
            />)}
        </div>
    );
};

export default ContactsItems;
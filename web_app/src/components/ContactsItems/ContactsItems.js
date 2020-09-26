import React from 'react';
import './ContactsItems.css';
import ContactItem from "./ContactItem/ContactItem";
import {useDispatch} from "react-redux";
import {showModalHandler} from "../../store/actions/contactsActions";
import {redirectToHomePage} from "../../store/actions/formActions";

const ContactsItems = props => {
    const dispatch = useDispatch();

    const onClickContactItemHandler = id => {
        dispatch(showModalHandler(id))
        dispatch(redirectToHomePage());
    }
    return (
        <div className="Contacts-items">
            {Object.keys(props.contacts).map(item => <ContactItem
                key={item}
                name={props.contacts[item].name}
                photo={props.contacts[item].photo}
                id={item}
                clicked={() => onClickContactItemHandler(item)}
            />)}
        </div>
    );
};

export default ContactsItems;
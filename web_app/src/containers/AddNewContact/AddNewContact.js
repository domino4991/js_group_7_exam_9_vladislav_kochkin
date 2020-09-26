import React from 'react';
import './AddNewContact.css';
import Form from "../../components/UI/Form";
import {useDispatch, useSelector} from "react-redux";

const AddNewContact = () => {
    const {
        name,
        phone,
        photo,
        email
    } = useSelector(state => state.form);
    const dispatch = useDispatch();


    return (
        <section className='New-contact'>
            <h2 className="Title">Add new contact</h2>
            <Form
                name={name}
                photo={photo}
                email={email}
                phone={phone}
            />
        </section>
    );
};

export default AddNewContact;
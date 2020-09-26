import React from 'react';
import './AddNewContact.css';
import Form from "../../components/UI/Form/Form";
import {useDispatch, useSelector} from "react-redux";
import {changedFieldForm, sendNewContact} from "../../store/actions/formActions";

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
                changed={e => dispatch(changedFieldForm(e))}
                submited={e => dispatch(sendNewContact(e, name, phone, email, photo))}
            />
        </section>
    );
};

export default AddNewContact;
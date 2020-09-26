import React, {useEffect} from 'react';
import './AddNewContact.css';
import Form from "../../components/UI/Form/Form";
import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {changedFieldForm, clearValue, redirectToHomePage, sendNewContact} from "../../store/actions/formActions";

const AddNewContact = () => {
    const {
        name,
        phone,
        photo,
        email,
        sendInfo
    } = useSelector(state => state.form);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearValue());
    }, [dispatch]);

    const onSubmitNewContactHandler = (e, name, phone, email, photo) => {
        dispatch(sendNewContact(e, name, phone, email, photo));
        dispatch(redirectToHomePage());
    };

    if(sendInfo) {
        return <Redirect to='/' />
    }

    return (
        <section className='New-contact'>
            <h2 className="Title">Add new contact</h2>
            <Form
                name={name}
                photo={photo}
                email={email}
                phone={phone}
                changed={e => dispatch(changedFieldForm(e))}
                submited={e => onSubmitNewContactHandler(e, name, phone, email, photo)}
            />
        </section>
    );
};

export default AddNewContact;
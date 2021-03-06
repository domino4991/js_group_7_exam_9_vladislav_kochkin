import React, {useEffect} from 'react';
import './EditPage.css';
import Form from "../../components/UI/Form/Form";
import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {changedFieldForm, getEditContact, redirectToHomePage, sendEditContact} from "../../store/actions/formActions";
import {Sugar} from "react-preloaders";

const EditPage = props => {
    const {
        name,
        phone,
        photo,
        email,
        sendInfo,
        loading,
        error
    } = useSelector(state => state.form);

    const dispatch = useDispatch();
    const id = props.match.params.id;

    useEffect(() => {
        dispatch(getEditContact(id));
    }, [dispatch, id]);

    const onSubmitEditFormHandler = (e, id, name, phone, email, photo) => {
        dispatch(sendEditContact(e, id, name, phone, email, photo));
        dispatch(redirectToHomePage());
    }

    if(sendInfo) {
        return <Redirect to='/' />
    }

    return (
        <section className="Edit-page">
            <Sugar customLoading={loading} />
            {
                error ? <h1 style={{textAlign: 'center'}}>{error.message}</h1> :
                    <>
                        <div className="container Edit-page__inner">
                            <h2 className="Title">Edit contact</h2>
                            {name && <Form
                                name={name}
                                phone={phone}
                                email={email}
                                photo={photo}
                                changed={e => dispatch(changedFieldForm(e))}
                                submited={e => onSubmitEditFormHandler(e, id, name, phone, email, photo)}
                            />}
                        </div>
                    </>
            }
        </section>
    );
};

export default EditPage;
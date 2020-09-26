import React from 'react';
import './ContactModal.css';
import Backdrop from "../Backdrop/Backdrop";
import {NavLink} from "react-router-dom";
import {AiTwotonePhone, AiTwotoneEdit} from 'react-icons/ai';
import {MdEmail, MdDeleteForever} from 'react-icons/md';

const ContactModal = props => {
    let phone = null;
    let info = null;
    let phoneItem = null;
    if(props.contact) {
        let phoneCopy = props.contact.phone;
        if(Number(phoneCopy[0]) === 0) {
            phone = phoneCopy.slice(1);
            phoneItem = (
                <a
                    href={`tel:+996${phone}`}
                    className="Contact-modal__link"
                >
                    <AiTwotonePhone />{props.contact.phone}
                </a>
            );
        } else {
            phoneItem = (
                <a
                    href={`tel:+996${props.contact.phone}`}
                    className="Contact-modal__link"
                >
                    <AiTwotonePhone />{props.contact.phone}
                </a>
            );
        }

        info = (
            <>
                <div className="Contact-modal__inner">
                    <div className="Contact-modal__img-box">
                        <img
                            src={props.contact.photo}
                            alt={props.contact.name}
                            className="Contact-modal__img"
                        />
                    </div>
                    <div className="Contact-modal__info">
                        <h4 className="Contact-modal__title">{props.contact.name}</h4>
                        {phoneItem}
                        <a
                            href={`mailto:${props.contact.email}`}
                            className="Contact-modal__link"
                        >
                            <MdEmail />{props.contact.email}
                        </a>
                    </div>
                </div>
                <div className="Contact-modal__btn-group">
                    <NavLink
                        to={`/edit/${props.contact.id}`}
                        className="Contact-modal__edit-btn"
                    >
                        <AiTwotoneEdit /> Edit
                    </NavLink>
                    <button
                        type="button"
                        className="Contact-modal__del-btn"
                        onClick={props.clicked}
                    >
                        <MdDeleteForever /> Delete
                    </button>
                </div>
            </>
        );
    }
    return (
        <>
            <Backdrop
                show={props.show}
                closed={props.closed}
            />
            <div className={props.show ? 'Contact-modal active' : 'contact-modal'}>
                {info}
            </div>
        </>
    );
};

export default ContactModal;
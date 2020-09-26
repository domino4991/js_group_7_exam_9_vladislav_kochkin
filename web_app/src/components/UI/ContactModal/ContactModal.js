import React from 'react';
import './ContactModal.css';
import Backdrop from "../Backdrop/Backdrop";

const ContactModal = props => {
    let phone;
    let phoneCopy = props.contact.phone;
    if(Number(phoneCopy[0]) === 0) {
        phoneCopy[0].replace('0', '');
        phone = phoneCopy;
    }
    return (
        <>
            <Backdrop
                show={props.show}
                closed={props.closed}
            />
            <div className={props.show ? 'Contact-modal active' : 'contact-modal'}>
                {props.contact &&
                    <>
                        <div className="Contact-modal__inner">
                            <div className="Contact-modal__img-box">
                                <img
                                    src={props.contact.photo}
                                    alt={props.contact.name}
                                />
                            </div>
                            <div className="Contact-modal__info">
                                <h4 className="Contact-modal__title">{props.contact.name}</h4>
                                <a href={`tel:+996${phone}`}>{props.contact.phone}</a>
                                <a href={`mailto:${props.contact.email}`}>{props.contact.email}</a>
                            </div>
                        </div>
                        <div className="Contact-modal__btn-group">
                        <button type="button" className="Contact-modal__edit-btn">Edit</button>
                        <button type="button" className="Contact-modal__del-btn">Delete</button>
                        </div>
                    </>
                }
            </div>
        </>
    );
};

export default ContactModal;
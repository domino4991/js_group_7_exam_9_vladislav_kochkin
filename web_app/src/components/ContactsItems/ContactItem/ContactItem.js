import React from 'react';
import './ContactItem.css';

const ContactItem = props => {
    return (
        <button className="Contact-item" onClick={props.clicked}>
            <div className="Contact-item__inner">
                <div className="Contact-item__img-box">
                    <img
                        src={props.photo}
                        alt={props.name}
                        className="Contact-item__img"
                    />
                </div>
                <p className="Contact-item__name">{props.name}</p>
            </div>
        </button>
    );
};

export default ContactItem;
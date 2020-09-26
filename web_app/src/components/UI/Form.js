import React from 'react';
import {NavLink} from "react-router-dom";

const Form = props => {
    return (
        <form className="Form">
            <input
                type="text"
                name="name"
                value={props.name}
                className="Form__filed"
                placeholder="Enter name"
                onChange={props.changed}
            />
            <input
                type="text"
                name="phone"
                value={props.phone}
                className="Form__filed"
                placeholder="Enter phone"
                onChange={props.changed}
            />
            <input
                type="text"
                name="email"
                value={props.email}
                className="Form__filed"
                placeholder="Enter email"
                onChange={props.changed}
            />
            <input
                type="text"
                name="image"
                value={props.photo}
                className="Form__filed"
                placeholder="Enter photo link"
                onChange={props.changed}
            />
            <div className="Form__img-preview">
                <p className="Form__img-label">Photo preview</p>
                <div className="Form__img-box">
                    <img
                        src={props.image}
                        alt={props.name}
                        className="Form__img"
                    />
                </div>
            </div>
            <button
                type='submit'
                className="Form__btn"
            >
                Save
            </button>
            <NavLink
                to='/'
                className="Form__back-link"
            >
                Back to contacts
            </NavLink>
        </form>
    );
};

export default Form;
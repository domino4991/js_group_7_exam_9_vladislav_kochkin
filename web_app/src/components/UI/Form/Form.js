import React from 'react';
import './Form.css';
import {NavLink} from "react-router-dom";

const Form = props => {
    return (
        <div className="container">
            <form
                className="Form"
                onSubmit={props.submited}
            >
                <input
                    type="text"
                    name="name"
                    value={props.name}
                    className="Form__filed"
                    placeholder="Enter name"
                    onChange={props.changed}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    value={props.phone}
                    className="Form__filed"
                    placeholder="Enter phone"
                    onChange={props.changed}
                    required
                />
                <input
                    type="text"
                    name="email"
                    value={props.email}
                    className="Form__filed"
                    placeholder="Enter email"
                    onChange={props.changed}
                    required
                />
                <input
                    type="text"
                    name="photo"
                    value={props.photo}
                    className="Form__filed"
                    placeholder="Enter photo link"
                    onChange={props.changed}
                    required
                />
                <div className="Form__img-preview">
                    <p className="Form__img-label">Photo preview</p>
                    <div className="Form__img-box">
                        {props.photo && <img
                            src={props.photo}
                            alt={props.name}
                            className="Form__img"
                        />}
                    </div>
                </div>
                <div className="Form__btn-group">
                    <button
                        type='submit'
                        className="Form__btn"
                    >
                        Save
                    </button>
                    <NavLink
                        to='/'
                        className="Form__btn Form__back-link"
                    >
                        Back to contacts
                    </NavLink>
                </div>
            </form>
        </div>
    );
};

export default Form;
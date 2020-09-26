import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="Header">
            <div className="container Header__inner">
                <span className="Logo">Contacts</span>
                <nav className="Header__nav">
                    <ul className="Header__nav-list">
                        <li className="Header__nav-item">
                            <NavLink
                                to='/'
                                className="Header__link"
                                exact
                            >
                                Contacts
                            </NavLink>
                        </li>
                        <li className="Header__nav-item">
                            <NavLink
                                to='/add-new-contact'
                                className="Header__link"
                                exact
                            >
                                Add new contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
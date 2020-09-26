import React from 'react';
import './Backdrop.css';

const Backdrop = props => {
    return (
        <div className={props.show ? 'Backdrop active' : 'Backdrop'} onClick={props.closed}/>
    );
};

export default Backdrop;
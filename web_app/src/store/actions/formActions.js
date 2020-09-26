import {CHANGE_FIELD, SEND_NEW_CONTACT_ERROR, SEND_NEW_CONTACT_REQUEST, SEND_NEW_CONTACT_SUCCESS} from "../actionTypes";
import {axiosBase} from "../../axiosBase";

export const changedFieldForm = e => {
    const name = e.target.name;
    const value = e.target.value;
    return {type: CHANGE_FIELD, name, value};
};

const sendNewContactRequest = () => {
    return {type: SEND_NEW_CONTACT_REQUEST};
};

const sendNewContactSuccess = () => {
    return {type: SEND_NEW_CONTACT_SUCCESS};
};

const sendNewContactError = error => {
    return {type: SEND_NEW_CONTACT_ERROR, error};
};

export const sendNewContact = (e, name, phone, email, photo) => {
    e.preventDefault();
    return async dispatch => {
        const newContact = {
            name,
            phone,
            email,
            photo
        };
        dispatch(sendNewContactRequest());
        try {
            await axiosBase.post(`contacts.json`, newContact);
            dispatch(sendNewContactSuccess());
        } catch (e) {
            dispatch(sendNewContactError(e));
        }
    };
}
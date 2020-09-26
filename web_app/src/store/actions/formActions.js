import {
    CHANGE_FIELD, CLEAR_VALUE,
    GET_EDIT_CONTACT_ERROR,
    GET_EDIT_CONTACT_REQUEST,
    GET_EDIT_CONTACT_SUCCESS,
    REDIRECT_TO_HOME, SEND_EDIT_CONTACT_ERROR,
    SEND_EDIT_CONTACT_REQUEST,
    SEND_EDIT_CONTACT_SUCCESS,
    SEND_NEW_CONTACT_ERROR,
    SEND_NEW_CONTACT_REQUEST,
    SEND_NEW_CONTACT_SUCCESS
} from "../actionTypes";
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
};

const getEditContactRequest = () => {
    return {type: GET_EDIT_CONTACT_REQUEST};
};

const getEditContactSuccess = data => {
    return {type: GET_EDIT_CONTACT_SUCCESS, data};
};

const getEditContactError = error => {
    return {type: GET_EDIT_CONTACT_ERROR, error};
};

export const getEditContact = id => {
    return async dispatch => {
        dispatch(getEditContactRequest());
        try {
            const response = await axiosBase.get(`contacts/${id}.json`);
            dispatch(getEditContactSuccess(response.data));
        } catch (e) {
            dispatch(getEditContactError(e));
        }
    };
};

export const redirectToHomePage = () => {
    return {type: REDIRECT_TO_HOME};
};

const sendEditContactRequest = () => {
    return {type: SEND_EDIT_CONTACT_REQUEST};
};

const sendEDitContactSuccess = () => {
    return {type: SEND_EDIT_CONTACT_SUCCESS};
};

const sendEditContactError = error => {
    return {type: SEND_EDIT_CONTACT_ERROR, error};
};

export const sendEditContact = (e, id, name, phone, email, photo) => {
    e.preventDefault();
    return async dispatch => {
        const editContact = {
            name,
            phone,
            email,
            photo
        };
        dispatch(sendEditContactRequest());
        try {
            await axiosBase.put(`contacts/${id}.json`, editContact);
            dispatch(sendEDitContactSuccess());
        } catch (e) {
            dispatch(sendEditContactError(e));
        }
    };
};

export const clearValue = () => {
    return {type: CLEAR_VALUE};
}
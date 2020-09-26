import {
    GET_CONTACTS_ERROR,
    GET_CONTACTS_REQUEST,
    GET_CONTACTS_SUCCESS, REMOVE_CONTACT_ERROR, REMOVE_CONTACT_REQUEST, REMOVE_CONTACT_SUCCESS,
    SHOW_MODAL_FULL_CONTACT
} from "../actionTypes";
import {axiosBase} from "../../axiosBase";

const getContactsRequest = () => {
    return {type: GET_CONTACTS_REQUEST};
};

const getContactsSuccess = data => {
    return {type: GET_CONTACTS_SUCCESS, data};
};

const getContactsError = error => {
    return {type: GET_CONTACTS_ERROR, error};
};

export const getContacts = () => {
    return async dispatch => {
        dispatch(getContactsRequest());
        try {
            const response = await axiosBase.get('contacts.json');
            dispatch(getContactsSuccess(response.data));
        } catch (e) {
            dispatch(getContactsError(e));
        }
    };
};

export const showModalHandler = id => {
    return {type: SHOW_MODAL_FULL_CONTACT, id, idItems: id};
};

const removeContactRequest = () => {
    return {type: REMOVE_CONTACT_REQUEST};
};

const removeContactSuccess = data => {
    return {type: REMOVE_CONTACT_SUCCESS, data};
};

const removeContactError = error => {
    return {type: REMOVE_CONTACT_ERROR, error};
};

export const removeContact = (id, contacts) => {
    const contactsCopy = {
        ...contacts
    };
    delete contactsCopy[id];
    return async dispatch => {
        dispatch(removeContactRequest());
        try {
            await axiosBase.delete(`contacts/${id}.json`);
            dispatch(removeContactSuccess(contactsCopy));
        } catch (e) {
            dispatch(removeContactError(e));
        }
    };
};
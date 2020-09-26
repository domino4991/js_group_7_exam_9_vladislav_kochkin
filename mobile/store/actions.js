import {CLOSE_MODAL, GET_CONTACT_ID, GET_CONTACTS_ERROR, GET_CONTACTS_SUCCESS} from "./actionTypes";
import {axiosBaseMobile} from "../axiosBaseMobile";

const getContactsSuccess = data => {
    return {type: GET_CONTACTS_SUCCESS, data};
};

const getContactsError = error => {
    return {type: GET_CONTACTS_ERROR, error};
};

export const getContacts = () => {
    return async dispatch => {
        try {
            const response = await axiosBaseMobile.get('contacts.json');
            dispatch(getContactsSuccess(response.data));
        } catch (e) {
            dispatch(getContactsError(e));
        }
    };
};

export const getContactId = id => {
    return {type: GET_CONTACT_ID, id};
};

export const closeModalHandler = () => {
    return {type: CLOSE_MODAL};
};
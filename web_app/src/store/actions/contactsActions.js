import {GET_CONTACTS_ERROR, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS, SHOW_MODAL_FULL_CONTACT} from "../actionTypes";
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
    return {type: SHOW_MODAL_FULL_CONTACT, id};
};
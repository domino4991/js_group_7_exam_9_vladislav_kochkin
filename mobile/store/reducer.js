import {CLOSE_MODAL, GET_CONTACT_ID, GET_CONTACTS_ERROR, GET_CONTACTS_SUCCESS} from "./actionTypes";

const initialState = {
    contactsItems: null,
    showModal: false,
    error: null,
    contactInfo: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                contactsItems: action.data
            };
        case GET_CONTACTS_ERROR:
            return {
                ...state,
                error: action.error
            };
        case GET_CONTACT_ID:
            return {
                ...state,
                contactInfo: state.contactsItems[action.id],
                showModal: true
            };
        case CLOSE_MODAL:
            return {
                ...state,
                showModal: false,
                contactInfo: null
            };
        default:
            return state;
    }
};
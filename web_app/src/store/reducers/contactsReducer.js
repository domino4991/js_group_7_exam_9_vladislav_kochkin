import {GET_CONTACTS_SUCCESS, SHOW_MODAL_FULL_CONTACT} from "../actionTypes";

const initialState = {
    contactsItems: null,
    error: null,
    loading: false,
    showModal: false,
    contactInfo: null
};

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                contactsItems: action.data,
                showModal: false
            };
        case SHOW_MODAL_FULL_CONTACT:
            return {
                ...state,
                showModal: !state.showModal,
                contactInfo: state.contactsItems[action.idItems] ? {
                    ...state.contactsItems[action.idItems],
                    id: action.id
                } : null
            };
        default:
            return state;
    }
};
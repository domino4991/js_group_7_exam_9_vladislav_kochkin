import {
    CHANGE_FIELD, CLEAR_VALUE,
    GET_EDIT_CONTACT_SUCCESS,
    REDIRECT_TO_HOME,
    SEND_EDIT_CONTACT_SUCCESS,
    SEND_NEW_CONTACT_SUCCESS
} from "../actionTypes";

const initialState = {
    name: '',
    phone: '',
    email: '',
    photo: '',
    error: null,
    sendInfo: false,
    loading: false
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FIELD:
            return {
                ...state,
                [action.name]: action.value
            };
        case CLEAR_VALUE:
            return {
                ...state,
                name: '',
                phone: '',
                email: '',
                photo: ''
            };
        case SEND_NEW_CONTACT_SUCCESS:
            return {
                ...state,
                sendInfo: true,
            }
        case GET_EDIT_CONTACT_SUCCESS:
            return {
                ...state,
                name: action.data.name,
                phone: action.data.phone,
                email: action.data.email,
                photo: action.data.photo
            };
        case SEND_EDIT_CONTACT_SUCCESS:
            return {
                ...state,
                sendInfo: true,
            };
        case REDIRECT_TO_HOME:
            return {
                ...state,
                sendInfo: false
            };
        default:
            return state;
    }
};
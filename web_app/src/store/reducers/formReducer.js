import {
    CHANGE_FIELD, CLEAR_VALUE, GET_EDIT_CONTACT_ERROR, GET_EDIT_CONTACT_REQUEST,
    GET_EDIT_CONTACT_SUCCESS,
    REDIRECT_TO_HOME, SEND_EDIT_CONTACT_ERROR, SEND_EDIT_CONTACT_REQUEST,
    SEND_EDIT_CONTACT_SUCCESS, SEND_NEW_CONTACT_ERROR, SEND_NEW_CONTACT_REQUEST,
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
        case SEND_NEW_CONTACT_REQUEST:
        case SEND_EDIT_CONTACT_REQUEST:
        case GET_EDIT_CONTACT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case SEND_NEW_CONTACT_SUCCESS:
            return {
                ...state,
                sendInfo: true,
                loading: false
            }
        case GET_EDIT_CONTACT_SUCCESS:
            return {
                ...state,
                name: action.data.name,
                phone: action.data.phone,
                email: action.data.email,
                photo: action.data.photo,
                loading: false
            };
        case SEND_EDIT_CONTACT_SUCCESS:
            return {
                ...state,
                sendInfo: true,
                loading: false
            };
        case REDIRECT_TO_HOME:
            return {
                ...state,
                sendInfo: false
            };
        case GET_EDIT_CONTACT_ERROR:
        case SEND_EDIT_CONTACT_ERROR:
        case SEND_NEW_CONTACT_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
};
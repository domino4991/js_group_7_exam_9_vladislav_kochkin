import {CHANGE_FIELD} from "../actionTypes";

const initialState = {
    name: '',
    phone: '',
    email: '',
    photo: '',
    error: null
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FIELD:
            return {
                ...state,
                [action.name]: action.value
            };
        default:
            return state;
    }
};
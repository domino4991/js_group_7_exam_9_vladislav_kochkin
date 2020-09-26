const initialState = {
    name: '',
    phone: '',
    email: '',
    photo: '',
    error: null
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
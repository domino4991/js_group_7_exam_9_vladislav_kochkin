import {CHANGE_FIELD} from "../actionTypes";

export const changedFieldForm = e => {
    const name = e.target.name;
    const value = e.target.value;
    return {type: CHANGE_FIELD, name, value};
};
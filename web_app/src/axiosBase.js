import axios from 'axios';

export const axiosBase = axios.create({
    baseURL: 'https://contacts-base-42066.firebaseio.com/'
});
import axios from 'axios';

export const axiosBaseMobile = axios.create({
    baseURL: 'https://contacts-base-42066.firebaseio.com/'
});
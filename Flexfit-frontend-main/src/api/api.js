// api.js

import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

// Make seperate header for authorization
const config = {
    headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
    }
}

// create user api
export const createUserApi = (data) => Api.post('/api/user/create', data);

// login user api
export const loginUserApi = (data) => Api.post('/api/user/login', data);

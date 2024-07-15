import axios from 'axios';

// Create Axios instance
const Api = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true,
});

// Separate config for authorization
const authConfig = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
};

// API functions
export const createUserApi = (data) => Api.post('/api/users/register', data, {
    headers: { 'Content-Type': 'application/json' }
});

export const loginUserApi = (data) => Api.post('/api/users/login', data, {
    headers: { 'Content-Type': 'application/json' }
});

// Example function for endpoints requiring file uploads
export const createClassApi = (data) => Api.post('/api/classes', data, {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
});

// Additional API functions as needed
export const fetchClassesApi = () => Api.get('/api/classes');
export const submitContactApi = (data) => Api.post('/api/contact', data, {
    headers: { 'Content-Type': 'application/json' }
});
export const createPaymentIntentApi = (data) => Api.post('/api/payments/create-payment-intent', data, {
    headers: { 'Content-Type': 'application/json' }
});
export const savePaymentApi = (data) => Api.post('/api/payments', data, {
    headers: { 'Content-Type': 'application/json' }
});

// services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:1337', // غيرها على حسب الـ backend بتاعك
    headers: {
        'Content-Type': 'application/json',
    },
});

// مثال على interceptor لو عندك Token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // أو من أي storage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error));

export default api;

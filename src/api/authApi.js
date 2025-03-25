// File: src/api/authApi.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8092';

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, { username, password });
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || 'Login failed');
    }
};




// auth.js
import axios from 'axios';

const userRegisterdata = async (formData) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/registers`, formData);
        return response.data;
    } catch (error) {
        console.error('Error fetching user registration data:', error.response?.data || error.message);
        throw error;
    }
};
const userLogin = async (formData) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, formData);
        return response.data;
    } catch (error) {
        console.error('Error logging in user:', error.response?.data || error.message);
        throw error;
    }
};


export { userRegisterdata,userLogin };

import axios from 'axios';

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`; // URL to auth controller

// configure axios to support cookies for passing credentials
const api = axios.create({ withCredentials: true });

// login service function
export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, { username, password });
    const user = response.data;
    return user;
};

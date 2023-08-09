import axios from 'axios';

// const SERVER_API_URL = 'http://localhost:4000/api';
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`; // URL to auth controller

// configure axios to support cookies for passing credentials
const api = axios.create({ withCredentials: true });

// login service function
export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, { username, password });
    // console.log(SERVER_API_URL);
    // console.log(JSON.stringify(response));
    const user = response.data;
    return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};


export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    // console.log(`RESPONSE Service: ${JSON.stringify(response)}`);
    return response;
};

export const updateUser = async (user) => {
    // added "_" since there already exists a controller that uses users/:some_number which needs to stay as an example
    const response = await api.put(`${USERS_URL}_/${user._id}`, user);
    // console.log(`RESPONSE DATA: ${JSON.stringify(response.data)}`); <--- Returns "OK"
    return response.data;
};


export const register = async ({ username, password, _id }) => {
    const response = await api.post(`${USERS_URL}/register`, { username, password, _id });
    const user = response.data;
    return user;
};

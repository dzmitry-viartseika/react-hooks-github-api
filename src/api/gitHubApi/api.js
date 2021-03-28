import { CURRENT_SERVER } from '../domain';
const axios = require('axios');
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export default {
    searchUser(value) {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.get(`/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
    },
    getUserById(id) {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.get(`/users/${id}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
    },
    getReposList(id) {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.get(`/users/${id}/repos?per_page=25&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
    },
};

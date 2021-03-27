import { CURRENT_SERVER } from '../domain';
const axios = require('axios');
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export default {
    searchUser(value) {
        console.log('value', value)
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.post(`/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
    },
    getQuizList() {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.get('quizes.json');
    },
    getQuizById(id) {
        console.log('id', id)
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.get(`quizes/${id}.json`);
    }
};
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com',
    client_id: "2708927d775286a82e36",
    client_secret: "b06f811efa13106510931ae69d20df6adf267fba"
});

export default api;
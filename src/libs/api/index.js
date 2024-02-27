import axios from 'axios';

const HOST_URL = import.meta.env.DEV ? "/" : process.env.PRODUCTION_HOST_URL;
const AXIOS_OPTIONS = {
    baseURL: HOST_URL,
    timeout: 6000,
    withCredentials: true,
}

const service = axios.create(AXIOS_OPTIONS);

service.interceptors.request.use(config => config, error => Promise.reject(error));

service.interceptors.response.use(response => response, error => Promise.reject(error));

export default service;
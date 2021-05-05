import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create( {
    baseURL: `http://127.0.0.1:3500`

} );

instance.interceptors.request.use( (request: AxiosRequestConfig) => {

    request.headers[`MyAuthenticationToken`] = 'AUTH092332'
    return request;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use( (response: AxiosResponse) => {

    return response;
}, error => {
    return Promise.reject(error);
});

export default instance;
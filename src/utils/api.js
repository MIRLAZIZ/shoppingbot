import axios from 'axios'


export const api = axios.create({
    baseURL: import.meta.env.VITE_APP_ENV + '/api',
    timeout: 20000
})
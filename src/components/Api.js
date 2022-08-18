import axios from "axios";

export const KEY = 'cdd2778a';

const API = axios.create({
    baseURL: 'https://api.hgbrasil.com/'
})

export default API
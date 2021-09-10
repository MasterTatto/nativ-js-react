import axios from 'axios';

const key = 'f1324f54';
const configOMB = {
    baseURL: `https://www.omdbapi.com?apikey=${key}&t=`,
};

console.log(configOMB.baseURL + `${'wow'}&pages=3`)
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`${title}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`${title}&type=${type}`)
    }
};


export default API;

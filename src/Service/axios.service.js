import axios from "axios";

const baseURL = 'https://rickandmortyapi.com/api';


const axiosService = axios.create({baseURL});

export default axiosService;
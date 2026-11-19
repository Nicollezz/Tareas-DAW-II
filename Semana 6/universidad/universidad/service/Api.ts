import axios from "axios";

const api = axios.create({
    baseURL: 'https://9bb7wtn1-5000.use2.devtunnels.ms'
})

export default api;
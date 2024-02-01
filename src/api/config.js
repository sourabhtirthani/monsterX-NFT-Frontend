import axios from 'axios';

export const axiosBase = axios.create({
    baseURL : process.env.REACT_APP_API_BASE_URL
})


// export const axiosBase = axios.create({
//     baseURL : "http://localhost:5000/api"
// })
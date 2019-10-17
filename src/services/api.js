import axios from 'axios';

const api = axios.create({
  baseURL: 'http://150.162.18.229:3333'
});


export default api;
import axios from "axios";
//import { config } from 'dotenv';
export const backEndDomain = process.env.REACT_APP_BACKEND_URL;
console.log(backEndDomain);
const instance = axios.create({
  baseURL: backEndDomain,
});

export default instance;

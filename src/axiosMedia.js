import axios from "axios";
//import { config } from 'dotenv';

export const mediaEndDomain = process.env.REACT_APP_MEDIA_URL;
console.log(mediaEndDomain);
const instancemedia = axios.create({
  baseURL: mediaEndDomain,
});

export default instancemedia;

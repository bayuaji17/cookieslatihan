import axios from "axios";
import { CookieStorage, CookieKeys } from "./cookies";

const token = CookieStorage.get(CookieKeys.AuthToken)
  ? CookieStorage.get(CookieKeys.AuthToken)
  : undefined;
const http2 = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 30000,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});
http2.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  };
  return config;
});

export default http2;

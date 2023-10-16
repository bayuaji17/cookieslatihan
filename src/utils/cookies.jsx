import Cookies from "universal-cookie";
const cookies = new Cookies();

export const CookieKeys = {
  AuthToken: "MyToken",
  User: "User",
  LimitError:100,
};

const CookieOptions = {
  path: "/",
  secure: true,
};

export const CookieStorage = {
  set: (key, data, options) => {
    return cookies.set(key, data, { ...CookieOptions, ...options });
  },
  get: (key, options) => {
    return cookies.get(key, { ...CookieOptions, ...options });
  },
  remove: (key, options) => {
    return cookies.remove(key, { ...CookieOptions, ...options });
  },
};
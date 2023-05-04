import { Cookies } from "react-cookie";
const cookies = new Cookies();

const KEY_TOKEN = "token";
const KEY_CONFIG = "config";

export const Cookie = {
  // TOKEN
  setToken(token) {
    cookies.set(KEY_TOKEN, token, {
      maxAge: 60 * 60 * 5,
      sameSite: "lax",
      secure: true,
    });
  },

  getToken() {
    return cookies.get(KEY_TOKEN);
  },

  // CONFIG
  setConfig(config) {
    cookies.set(KEY_CONFIG, config, {
      sameSite: "lax",
      secure: true,
    });
  },

  getConfig() {
    return cookies.get(KEY_CONFIG);
  },

  deleteCookie() {
    cookies.remove(KEY_TOKEN);
    cookies.remove(KEY_CONFIG);
  },
};

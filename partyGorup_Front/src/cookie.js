import { Cookies } from "react-cookie";

const cookie = new Cookies()

export const setCookie = (key, value) => {
    cookie.set(key, value)
}

export const getCookie = (key) => {
    return cookie.get(key)
}
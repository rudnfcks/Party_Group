import { Cookies } from "react-cookie";

const cookie = new Cookies()

export const setCookie = (key, value) => {
    let expire = new Date()
    expire.setFullYear(2050)
    cookie.set(key, value, {expires: expire})
}

export const getCookie = (key) => {
    return cookie.get(key)
}
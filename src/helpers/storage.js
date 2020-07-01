import Cookies from 'universal-cookie'

const cookie = new Cookies()

const defaultOptions = {
    path: '/'
}

export const getCookie = (name, options = {}) => {
    if (!name) return null;
    return cookie.get(name, { ...options, ...defaultOptions })
}

export const setCookie = (name, value, options = {}) => {
    if (!name || value === undefined) return null
    cookie.set(name, value, { ...options, ...defaultOptions })
    return true
}

export const removeCookie = (name, options = {}) => {
    if (!name) return null
    cookie.remove(name, { ...options, ...defaultOptions })
}

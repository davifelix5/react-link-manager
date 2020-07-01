import { setCookie, getCookie, removeCookie } from './storage'

const expires = new Date();
expires.setFullYear(expires.getFullYear() + 1)
const options = { expires }

const COOKIE_ACCOUNT_NAME = 'acc'
const COOKIE_TOKEN_NAME = 'tk'
const COOKIE_REFESH_TOKEN_NAME = 'rtk'

export const setAccount = account => setCookie(COOKIE_ACCOUNT_NAME, account, options)
export const getAccount = () => getCookie(COOKIE_ACCOUNT_NAME)
export const removeAccount = () => removeCookie(COOKIE_ACCOUNT_NAME)

export const setToken = token => setCookie(COOKIE_TOKEN_NAME, token, options)
export const getToken = () => getCookie(COOKIE_TOKEN_NAME)

export const setRefreshToken = refreshToken => setCookie(COOKIE_REFESH_TOKEN_NAME, refreshToken, options)
export const getRefreshToken = () => getCookie(COOKIE_REFESH_TOKEN_NAME)

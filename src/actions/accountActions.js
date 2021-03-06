import { apiLogin, apiPost, apiRefreshToken } from '../helpers/api'

// Action é um função que retorna um objeto com type e payload

export const SIGN_IN = 'SIGN_IN'  // Evitar erros de digitação
export const SIGN_UP = 'SIGN_UP'
export const SIGN_OUT = 'SIGN_OUT'
export const INIT_ACCOUNT = 'INIT_ACCOUNT'
export const REFRESH_TOKEN = 'REFRESH_TOKEN'


export const signIn = async data => {
    const { data: payload } = await apiLogin(data)
    return { type: SIGN_IN, payload }
}

export const signUp = async (data) => {
    const { data: payload } = await apiPost('auth/sign-up', data)
    return { type: SIGN_UP, payload }
}

export const signOut = () => {
    return { type: SIGN_OUT, payload: {} }
}

export const initAccount = () => {
    return { type: INIT_ACCOUNT, payload: {} }
}

export const getNewToken = async () => {
    const { data: payload } = await apiRefreshToken()
    return { type: REFRESH_TOKEN, payload }
}

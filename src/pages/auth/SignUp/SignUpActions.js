import { apiPost } from '../../../helpers/api'

export const SIGN_UP = 'SIGN_UP'  // Evitar error de digitação

// Action é um função que retorna um objeto com type e payload

export const signUp = async (data) => {
    const { data: payload } = await apiPost('auth/sign-up', data)
    return { type: SIGN_UP, payload }
}

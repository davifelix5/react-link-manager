import { apiLogin } from '../../../helpers/api'

export const SIGN_IN = 'SIGN_IN'  // Evitar error de digitação

// Action é um função que retorna um objeto com type e payload

export const signIn = async data => {
    const { data: payload } = await apiLogin(data)
    return { type: SIGN_IN, payload }
}
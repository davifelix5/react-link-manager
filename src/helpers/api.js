import api from '../services/api'
import { getToken } from './account'

const getHeaders = () => {
    const token = getToken()
    if (!token) return {}
    return {
        Authorization: `Bearer ${token}`
    }
}

export const apiPost = async (url, body) => {

    const options = {
        headers: getHeaders()
    }

    const result = await api.post(url, body, options)

    return result
}

export const apiLogin = async credentials => {
    const { email: username, password } = credentials
    const result = await api.get('auth/sign-in', {
        auth: {
            username,
            password
        }
    })
    return result
}

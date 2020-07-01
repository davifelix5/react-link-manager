import api from '../services/api'

const getHeaders = () => {
    return {}
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

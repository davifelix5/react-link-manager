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

    try {
        return await api.post(url, body, options)
    }

    catch (error) {
        return error.response
    }

}

export const apiGet = async (url) => {

    const options = {
        headers: getHeaders()
    }

    try {
        return await api.get(url, options)
    }
    catch (error) {
        return error.response
    }

}

export const apiPut = async (url, body) => {
    const options = {
        headers: getHeaders()
    }

    try {
        return await api.put(url, body, options)
    }
    catch (error) {
        return error.response
    }

}

export const apiDelete = async url => {
    const options = {
        headers: getHeaders()
    }

    try {
        return await api.delete(url, options)
    }
    catch (error) {
        return error.response
    }
}

export const apiLogin = async credentials => {
    const { email: username, password } = credentials

    try {
        const options = { auth: { username, password } }
        return await api.get('auth/sign-in', options)

    } catch (error) {
        return error.response
    }

}

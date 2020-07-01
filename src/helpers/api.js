import api from '../services/api'

const getHeaders = () => {
    return {}
}

export const apiPost = async (url, body) => {

    const options = {
        headers: getHeaders()
    }

    return await api.post(url, body, options)
}

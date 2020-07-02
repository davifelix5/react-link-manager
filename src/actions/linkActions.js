import { apiPost, apiGet } from '../helpers/api'

export const CREATE_LINK = 'CREATE_LINK'
export const FETCH_LINKS = 'FETCH_LINKS'
export const GET_LINK = 'GET_LINK'

export const createLink = async data => {
    console.log(data)
    const isSocial = data.isSocial === "on" ? true : false
    const { data: payload } = await apiPost('links/add-link', { ...data, isSocial })

    return { type: CREATE_LINK, payload }
}

export const fetchLinks = async () => {
    const { data: payload } = await apiGet('/links')

    return { type: FETCH_LINKS, payload }
}

export const getLink = async id => {
    const { data: payload } = await apiGet(`links/${id}`)
    return { type: GET_LINK, payload }
}

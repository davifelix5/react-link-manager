import { apiPost, apiGet, apiPut } from '../helpers/api'

export const CREATE_LINK = 'CREATE_LINK'
export const FETCH_LINKS = 'FETCH_LINKS'
export const GET_LINK = 'GET_LINK'
export const UPDATE_LINK = 'UPDATE_LINK'
export const RESET_LINKS = 'RESET_LINKS'
export const SET_REMOVE_LINK = 'SET_REMOVE_LINK'

export const createLink = async data => {
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

export const updateLink = async (id, data) => {
    const isSocial = data.isSocial === "on" ? true : false
    const { data: payload } = await apiPut(`links/${id}`, { ...data, isSocial })

    return { type: UPDATE_LINK, payload }
}

export const resetLinks = () => {
    return { type: RESET_LINKS, payload: {} }
}

export const setLinkToRemove = link => {
    return { type: SET_REMOVE_LINK, payload: link }
}
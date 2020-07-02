import { apiPost } from '../helpers/api'

export const CREATE_LINK = 'CREATE_LINK'

export const createLink = async data => {
    const isSocial = data.isSocial === "on" ? true : false
    const { data: payload } = await apiPost('links/add-link', { ...data, isSocial })

    return { type: CREATE_LINK, payload }
}

import { CREATE_LINK, FETCH_LINKS, GET_LINK } from '../actions/linkActions'

const initialState = {
    link: null,
    links: []
}

// Isso nunca pode retornar null, por isso a definição do initialState
export default function (state = initialState, action) {

    const { payload, type } = action

    switch (type) {
        case CREATE_LINK: {

            const link = payload ? payload.data : null

            return { ...state, link }
        }
        case FETCH_LINKS: {
            const links = payload ? payload.data : null

            return { ...state, links }
        }
        case GET_LINK: {
            const link = payload ? payload.data : null

            return { ...state, link }
        }
        default:
            return state
    }

}

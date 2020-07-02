import { CREATE_LINK, FETCH_LINKS, GET_LINK, UPDATE_LINK, RESET_LINKS } from '../actions/linkActions'

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
        case UPDATE_LINK: {
            const newLink = payload ? payload.data : null
            console.log('linkReducer.UPDAte-LINK: ', newLink)
            return { ...state, newLink }
        }
        case RESET_LINKS: {
            return { ...state, newLink: null, link: null }
        }
        default:
            return state
    }

}

import { CREATE_LINK, FETCH_LINKS } from '../actions/linkActions'

const initialState = {
    link: null,
    links: []
}

// Isso nunca pode retornar null, por isso a definição do initialState
export default function (state = initialState, action) {

    const { payload, type } = action

    switch (type) {
        case CREATE_LINK:

            const link = payload ? payload.data : null

            console.log('linkReducer.CREATE_LINK: ', payload)

            return { ...state, link }

        case FETCH_LINKS:
            const links = payload ? payload.data : null

            console.log('linkRedurcer.FETCH_LINKS: ', links)

            return { ...state, links }

        default:
            return state
    }

}

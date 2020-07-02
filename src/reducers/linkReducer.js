import { CREATE_LINK } from '../actions/linkActions'

const initialState = {
    link: null
}

// Isso nunca pode retornar null, por isso a definição do initialState
export default function (state = initialState, action) {

    const { payload, type } = action

    switch (type) {
        case CREATE_LINK:

            const link = payload ? payload.data : null

            console.log('linkReducer.CREATE_LINK: ', payload)

            return { ...state, link }

        default:
            return state
    }

}

import { SIGN_IN } from './SignInActions'
import { setToken, setAccount, setRefreshToken } from '../../../helpers/account'

const initialState = {
    account: null
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case SIGN_IN:
            const account = payload ? payload.data : null
            const metadata = payload ? payload.metadata : null

            const token = metadata ? metadata.token : null
            const refreshToken = metadata ? metadata.refreshToken : null

            if (account) setAccount(account)
            if (token) setToken(token)
            if (refreshToken) setRefreshToken(refreshToken)

            console.log('SignInReducer.payload: ', payload)

            return { ...initialState, account: payload }
        default:
            return state
    }
}

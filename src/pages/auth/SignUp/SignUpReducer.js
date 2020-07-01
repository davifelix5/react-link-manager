import { SIGN_UP } from './SignUpActions'
import { setAccount, setToken, setRefreshToken } from '../../../helpers/account'

const initialState = {
    account: null
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case SIGN_UP:
            const account = payload ? payload.data : null
            const metadata = payload ? payload.metadata : null

            const token = metadata ? metadata.token : null
            const refreshToken = metadata ? metadata.token : null

            if (account) setAccount(account)
            if (token) setToken(token)
            if (refreshToken) setRefreshToken(refreshToken)

            return { ...initialState, account }
        default:
            return state
    }
}

import { SIGN_UP, SIGN_IN, SIGN_OUT, INIT_ACCOUNT } from '../actions/accountActions'
import { setAccount, setToken, setRefreshToken, removeAccount, removeToken, removeRefreshToken, getAccount } from '../helpers/account'

const initialState = {
    account: null
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case SIGN_UP:
        case SIGN_IN:
            const account = payload ? payload.data : null
            const metadata = payload ? payload.metadata : null

            const token = metadata ? metadata.token : null
            const refreshToken = metadata ? metadata.token : null

            if (account) setAccount(account)
            if (token) setToken(token)
            if (refreshToken) setRefreshToken(refreshToken)

            return { ...state, account }
        case SIGN_OUT:
            removeAccount()
            removeToken()
            removeRefreshToken()
            return { ...state, account: null }
        case INIT_ACCOUNT:
            const loggedAccount = getAccount()
            return { ...state, account: loggedAccount }
        default:
            return state
    }
}

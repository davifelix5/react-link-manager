import { useEffect } from 'react'
import { getToken } from '../../helpers/account'
import { getTokenExpire } from '../../helpers/jwt'
import { connect } from 'react-redux'
import { getNewToken } from '../../actions/accountActions'

const TokenRefresher = ({ getNewToken }) => {

    const TRESHOLD = 30

    const calculate = () => {
        const token = getToken()
        const expiresSeconds = getTokenExpire(token)
        return expiresSeconds
    }

    useEffect(() => {
        const secondsToExpire = calculate() - TRESHOLD  // Atualiza o token 30segs antes de expirar
        const timeout = setTimeout(getNewToken, secondsToExpire * 1000);

        return () => clearTimeout(timeout)
    }, [getNewToken])


    return null
}

export default connect(state => state, { getNewToken })(TokenRefresher)
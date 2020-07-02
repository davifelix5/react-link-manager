import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../../actions/accountActions'
import { Redirect, useHistory, Link } from 'react-router-dom'

const ManageLayuot = ({ children, signOut, account }) => {

    const history = useHistory()

    if (!account) {
        return <Redirect to='/auth/sign-in' />
    }

    const handleSignOut = () => {
        signOut()
    }

    const handleGoBack = () => {
        history.goBack()
    }

    return (
        <div className="layout">
            <nav className="navbar navbar-expand-lg bg-primary text-ligth">
                <div className="container d-flex w-100 justify-content-between">
                    <div><button className="btn btn-clear" onClick={handleGoBack}>Voltar</button></div>
                    <Link className="text-center" to="/">Meus links</Link>
                    <div><button className="btn btn-clear" onClick={handleSignOut}>Sair</button ></div>
                </div>
            </nav>
            <div className="container">{children}</div>
        </div>
    )
}


const mapStateToProps = state => {
    return { account: state.account.account }
}

export default connect(mapStateToProps, { signOut })(ManageLayuot)
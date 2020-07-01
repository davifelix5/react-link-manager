import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../../actions/accountActions'
import { Redirect } from 'react-router-dom'

const ManageLayuot = ({ children, signOut, account }) => {

    if (!account) {
        return <Redirect to='/auth/sign-in' />
    }

    const handleSignOut = () => {
        signOut()
    }

    return (
        <div className="layout">
            <nav className="navbar navbar-expand-lg bg-primary text-ligth">
                <div className="container d-flex w-100 justify-content-between">
                    <div><span>BACK</span></div>
                    <div className="text-center"><strong>Links</strong></div>
                    <div><button className="btn btn-clear" onClick={handleSignOut}>EXIT</button ></div>
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
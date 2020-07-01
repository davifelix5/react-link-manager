import React from 'react'

import { Link, Redirect } from 'react-router-dom'

import { connect } from "react-redux";
import { signIn } from '../../../actions/accountActions'

const SignIn = (props) => {
    const { account, signIn } = props

    const handleSubmit = event => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        signIn(data)
    }

    if (account) {
        return <Redirect to="manage/links" />
    }

    return (
        <div className="container h-100 pt-5">
            <h1>Entrar</h1>
            <div className="d-flex flex-column h-100">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" name="email" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input className="form-control" type="password" name="password" id="password" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary btn-round">Entrar</button>
                    </div>
                </form>
                <div className="container text-center fixed-bottom pb-5">
                    <p className="text-muted">Ainda não tem uma conta?</p>
                    <Link to="/sign-up">Cadastre-se</Link>
                </div>

            </div>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        account: state.account.account
    }
}

export default connect(mapStatetoProps, { signIn })(SignIn)
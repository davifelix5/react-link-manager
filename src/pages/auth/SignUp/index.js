import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => (
    <div className="container h-100 pt-5">
        <h1>Criar conta</h1>
        <div className="d-flex flex-column h-100">
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input className="form-control" type="password" name="password" id="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirmação de senha</label>
                    <input className="form-control" type="password" name="password" id="password" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary btn-round">Registrar</button>
                </div>
            </form>
            <div className="container text-center fixed-bottom pb-5">
                <p className="text-muted">Já tem uma conta?</p>
                <Link to="/sign-in">Faça login</Link>
            </div>
        </div>
    </div>
)

export default SignUp

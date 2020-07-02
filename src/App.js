import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Links from './pages/manage/Links'
import CreateLink from './pages/manage/CreateLink'
import EditLink from './pages/manage/EditLink'
import Home from './pages/Home'

import { initAccount } from './actions/accountActions'

const App = ({ initAccount }) => {

	useEffect(() => {
		initAccount()
	}, [initAccount])

	return (
		< BrowserRouter >
			<div>
				<nav>
					<ul className="list-group list-group-horizontal">
						<li className="list-group-item"><Link to="/sign-in" >Fazer Login</Link></li>
						<li className="list-group-item"><Link to="/sign-up" >Criar Conta</Link></li>
						<li className="list-group-item"><Link to="/manage/links/create-link" >Adicionar Link</Link></li>
						<li className="list-group-item"><Link to="/manage/links/edit-link" >Gerenciar links</Link></li>
						<li className="list-group-item"><Link to="/manage/links" >Meus Links</Link></li>
					</ul>
				</nav>

				<Switch>
					<Route component={SignIn} path="/sign-in" />
					<Route component={SignUp} path="/sign-up" />
					<Route component={CreateLink} path="/manage/links/create-link" />
					<Route component={EditLink} path="/manage/links/edit-link/:id" />
					<Route component={Links} path="/manage/links" />
					<Route component={Home} path="/" />
				</Switch>
			</div>
		</BrowserRouter >
	)
}

const mapStateToProps = state => {
	return {
		account: state.account.account
	}
}

export default connect(mapStateToProps, { initAccount })(App)

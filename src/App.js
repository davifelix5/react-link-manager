import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import { initAccount } from './actions/accountActions'

import Routes from './routes'

const App = ({ initAccount }) => {

	useEffect(() => {
		initAccount()
	}, [initAccount])

	return <Routes />
}

const mapStateToProps = state => {
	return {
		account: state.account.account
	}
}

export default connect(mapStateToProps, { initAccount })(App)

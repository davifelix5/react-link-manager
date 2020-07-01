import React from 'react'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const App = () => (
	<BrowserRouter>
		<div>
			<nav>
				<ul>
					<li><Link to="/sign-in" >Fazer Login</Link></li>
					<li><Link to="/sign-up" >Criar Cont</Link>a</li>
					<li><Link to="/manage/links/create-link" >Adicionar Link</Link></li>
					<li><Link to="/manage/links/edit-links" >Gerenciar links</Link></li>
					<li><Link to="/manage/links" >Meus Links</Link></li>
				</ul>
			</nav>

			<Switch>
				<Route path="/sign-in"><h1>Fazer login</h1></Route>
				<Route path="/sign-up"><h1>Criar conta</h1></Route>
				<Route path="/manage/links/create-link"><h1>Criar links</h1></Route>
				<Route path="/manage/links/edit-links"><h1>Editar link</h1></Route>
				<Route path="/manage/links"><h1>Links</h1></Route>
				<Route path="/"><h1>Home</h1></Route>
			</Switch>
		</div>
	</BrowserRouter>
)

export default App

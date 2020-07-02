import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Links from './pages/manage/Links'
import CreateLink from './pages/manage/CreateLink'
import EditLink from './pages/manage/EditLink'
import Home from './pages/Home'

const Routes = () => {
    return (
        < BrowserRouter >
            <Switch>
                <Route component={SignIn} path="/sign-in" />
                <Route component={SignUp} path="/sign-up" />
                <Route component={CreateLink} path="/manage/links/create-link" />
                <Route component={EditLink} path="/manage/links/edit-link/:id" />
                <Route component={Links} path="/manage/links" />
                <Route component={Home} path="/" />
            </Switch>
        </BrowserRouter >
    )
}

export default Routes
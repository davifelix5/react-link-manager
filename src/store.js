import { applyMiddleware, combineReducers, createStore } from "redux"
import ReduxPromise from 'redux-promise'

import SignInReducer from './pages/auth/SignIn/SignInReducer'

const reducers = combineReducers({
    signIn: SignInReducer
})

const store = createStore(reducers, applyMiddleware(ReduxPromise))

export default store

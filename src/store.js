import { applyMiddleware, combineReducers, createStore } from "redux"
import ReduxPromise from 'redux-promise'

import SignInReducer from './pages/auth/SignIn/SignInReducer'
import SignUpReducer from './pages/auth/SignUp/SignUpReducer'

const reducers = combineReducers({
    signIn: SignInReducer,
    signUp: SignUpReducer
})

const store = createStore(reducers, applyMiddleware(ReduxPromise))

export default store

import { applyMiddleware, combineReducers, createStore } from "redux"
import ReduxPromise from 'redux-promise'

import AccountReducer from './reducers/accountReducer'
import LinkReducer from './reducers/linkReducer'

const reducers = combineReducers({
    account: AccountReducer,
    link: LinkReducer,
})

const store = createStore(reducers, applyMiddleware(ReduxPromise))

export default store

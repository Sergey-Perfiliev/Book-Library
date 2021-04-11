import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { BooksReducer } from './books-reducer'
import thunkMiddleware from "redux-thunk"

let rootReducer = combineReducers({
	books: BooksReducer 
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunkMiddleware)
))

window.__store__ = store

export default store

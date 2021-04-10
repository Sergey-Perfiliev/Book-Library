import { applyMiddleware, combineReducers, createStore } from 'redux'
import { BooksReducer } from './books-reducer'

let rootReducer = combineReducers({
	books: BooksReducer 
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware
))

export default store

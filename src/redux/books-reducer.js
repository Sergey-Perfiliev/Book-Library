import { booksAPI } from "../api/api"

const SET_BOOKS = "GET_BOOKS"
const SEARCH_BOOKS = "SEARCH_BOOKS"
const SET_DROP_LIST = "SET_DROP_LIST"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const SET_MODAL = "SET_MODAL"

// {
// 	"key": null,
// 	"title": null,
// 	"cover_i": null,
// 	"author_name": [],
// 	"cover": null,
// 	numFound: null,
// 	currentPage: null,
// }

const initialState = {
	books: [],
	dropList: false,
	modal: false,
	modalValue: {},
	toggleIsFetching: false
}

// Reducer
export const BooksReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_BOOKS:
			return {
				...state,
				books: action.books
			}

		case SEARCH_BOOKS:
			return {
				...state,
				books: action.books
			}

		case SET_DROP_LIST:
			return {
				...state,
				dropList: action.value
			}

		case TOGGLE_IS_FETCHING:
			return {
				...state,
				toggleIsFetching: action.value
			}

		case SET_MODAL:
			return {
				...state,
				modal: action.value,
				modalValue: action.book
			}

		default:
			return state
	}
}

const setBooks = (books) => ({ type: SET_BOOKS, books })
const setSearchBooks = (books) => ({ type: SEARCH_BOOKS, books })
export const setDropList = (value) => ({ type: SET_DROP_LIST, value })
const toggleIsFetching = (value) => ({ type: TOGGLE_IS_FETCHING, value })
export const setModal = (value, book) => ({ type: SET_MODAL, value, book })

// Thunks
export const requestBooks = () => {
	return async (dispatch) => {
		let data = await booksAPI.getBooks()

		dispatch(setBooks(data.books))
	}
}

export const searchBooks = (value) => {
	return async (dispatch) => {
		// set toggle
		dispatch(toggleIsFetching(true))
		let data = await booksAPI.searchBooks(value)

		// set cover_url to books
		data.forEach(element => element.cover_url = `https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg?default=https://openlibrary.org/static/images/icons/avatar_book-sm.png`)

		await dispatch(setSearchBooks(data))
		dispatch(toggleIsFetching(false))
	}
}

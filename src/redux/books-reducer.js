import { booksAPI } from "../api/api"

const SET_BOOKS = "GET_BOOKS"
const SEARCH_BOOKS = "SEARCH_BOOKS"
const SET_DROP_LIST = "SET_DROP_LIST"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const SET_MODAL = "SET_MODAL"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_NUM_FOUND = "SET_NUM_FOUND"

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
	toggleIsFetching: false,
	numFound: null,
	currentPage: 1,
	pageSize: 5
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
				toggleIsFetching: action.isFetching
			}

		case SET_MODAL:
			return {
				...state,
				modal: action.value,
				modalValue: action.book
			}

		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.page
			}

		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.count
			}

		case SET_NUM_FOUND:
			return {
				...state,
				numFound: action.numFound
			}

		default:
			return state
	}
}

export const setBooks = (books) => ({ type: SET_BOOKS, books })
export const setSearchBooks = (books) => ({ type: SEARCH_BOOKS, books })
export const setDropList = (value) => ({ type: SET_DROP_LIST, value })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setModal = (value, book) => ({ type: SET_MODAL, value, book })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setNumFound = (numFound) => ({ type: SET_NUM_FOUND, numFound })


// Thunks
export const requestBooks = () => {
	return async (dispatch) => {
		let data = await booksAPI.getBooks()

		dispatch(setBooks(data.books))
	}
}

export const searchBooks = (value, offset) => {
	return async (dispatch) => {
		// set toggle
		dispatch(toggleIsFetching(true))
		let data = await booksAPI.searchBooks(value, offset)

		dispatch(setNumFound(data.numFound))
		// set cover_url to books
		data.docs.forEach(element => element.cover_url = `https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg?default=https://openlibrary.org/static/images/icons/avatar_book-sm.png`)

		await dispatch(setSearchBooks(data.docs))
		dispatch(toggleIsFetching(false))
	}
}

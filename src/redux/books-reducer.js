import { booksAPI } from "../api/api"

const SET_BOOKS = "GET_BOOKS"
const SEARCH_BOOKS = "SEARCH_BOOKS"

// {
// 	"key": null, // "/works/id"
// 	"title": null,
// 	"cover_i": null,
// 	"author_name": [],
// 	"cover": null
// }

const initialState = {
	books: []
}

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

		default:
			return state
	}
}

const setBooks = (books) => ({ type: SET_BOOKS, books })
const setSearchBooks = (books) => ({ type: SEARCH_BOOKS, books })

export const requestBooks = () => {
	return async (dispatch) => {
		let data = await booksAPI.getBooks()

		dispatch(setBooks(data.books))
	}
}

export const searchBooks = (value) => {
	return async (dispatch) => {
		let data = await booksAPI.searchBooks(value)

		dispatch(setSearchBooks(data))
	}
}

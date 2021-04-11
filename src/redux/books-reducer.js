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
	books: [],
	dropList: false
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

		case 'SET_DROP_LIST':
			return {
				...state,
				dropList: action.value
			}

		default:
			return state
	}
}

const setBooks = (books) => ({ type: SET_BOOKS, books })
const setSearchBooks = (books) => ({ type: SEARCH_BOOKS, books })
export const setDropList = (value) => ({ type: 'SET_DROP_LIST', value })

export const requestBooks = () => {
	return async (dispatch) => {
		let data = await booksAPI.getBooks()

		dispatch(setBooks(data.books))
	}
}

export const searchBooks = (value) => {
	return async (dispatch) => {
		dispatch(setDropList(false))
		let data = await booksAPI.searchBooks(value)

		data.forEach(element => element.cover_url = `https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg?default=https://openlibrary.org/static/images/icons/avatar_book-sm.png`)
		
		await dispatch(setSearchBooks(data))
		dispatch(setDropList(true))
	}
}

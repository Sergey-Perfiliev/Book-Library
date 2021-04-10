import { booksAPI } from "../api/api"

const SET_BOOKS = "GET_BOOKS"

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

		default:
			return state
	}
}

const setBooks = (books) => ({ type: SET_BOOKS, books })

export const requestBooks = () => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true))

		let data = await booksAPI.getBooks()

		dispatch(setBooks(data.books))
		dispatch(toggleIsFetching(false))
	}
}

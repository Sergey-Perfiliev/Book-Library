import axios from "axios"

const instance = axios.create({
	baseURL: 'https://openlibrary.org/'
})

export const booksAPI = {
	getBooks() {
		return instance.get()
			.then(res => res.data)
	},
	searchBooks(value) {
		return instance.get(`search.json?q="${value}"&fields=key,cover_i,title,author_name&limit=10`)
			.then(res => res.data.docs)
	},
	getBookCover(cover_i, size = 'M') {
		return axios.get(`https://covers.openlibrary.org/b/id/${cover_i}-${size}.jpg
			?https://openlibrary.org/static/images/icons/avatar_book-sm.png`, {
			'Content-Type': 'image / jpeg'
		})
			.then(res => res.data)
	}
}

import axios from "axios"

const instance = axios.create({
	baseURL: 'https://openlibrary.org/'
})

export const booksAPI = {
	async searchBooks(value, offset = 0) {
		const res = await instance.get(`search.json?q=${value}&facet=false&limit=5&offset=${offset}&_spellcheck_count=0&fields=key,cover_i,title,author_name,publish_date,publisher&mode=everything`)
		return res.data
	},
	async getBookCover(cover_i, size = 'M') {
		const res = await axios.get(`https://covers.openlibrary.org/b/id/${cover_i}-${size}.jpg
			?https://openlibrary.org/static/images/icons/avatar_book-sm.png`, {
			'Content-Type': 'image / jpeg'
		})
		return res.data
	}
}

import axios from "axios"

const instance = axios.create({
	baseURL: 'https://openlibrary.org/'
})

export const booksAPI = {
	async getBooks() {
		const res = await instance.get()
		return res.data
	},
	async searchBooks() {
		const res = await instance.get()
		return res.data
	}
}

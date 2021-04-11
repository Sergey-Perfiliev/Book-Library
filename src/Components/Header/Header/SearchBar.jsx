import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { searchBooks } from '../../../redux/books-reducer'
import { setDropList } from '../../../redux/books-reducer'
import '../../../App.css'
import './SearchBar.css'


const SearchBar = ({ books, searchBooks, dropList }) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		searchBooks(Data)
	}

	const dispatch = useDispatch()
	const [Data, setData] = useState("")

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			searchBooks(Data)
		}, 1000)

		return () => clearTimeout(delayDebounceFn)
	}, [Data])

	return (
		<div className="search-bar-wrapper">
			<form onSubmit={(e) => handleSubmit(e)} className="search-bar" tabIndex="0" >
				<input
					onBlur={() => dispatch(setDropList(false))}
					placeholder="Search"
					type="text"
					className={`search-bar-input ${dropList ? "search-bar-input--active" : ""}`}
					value={Data}
					onChange={(e) => setData(e.target.value)}
				/>
				<button
					className={`search-bar-btn ${dropList ? "search-bar-btn--active" : ""}`}
					type="submit"
				>Find book
				</button>
			</form>
			{
				dropList && <ul className="dropList">
					{
						books.length !== 0 ? books.map(book =>
							<li key={book.key}>
								<img
									loading="lazy"
									src={book.cover_url}
									alt="book-img" className="book-cover book-cover_sm" />
								<div>
									<h4 className="book-title book-title_sm">{book.title}</h4>
									<h4 className="book-author book-author_sm">by {book.author_name}</h4>
								</div>
							</li>
						) : undefined
					}
				</ul>
			}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		books: state.books.books,
		dropList: state.books.dropList
	}
}

export default connect(mapStateToProps, { searchBooks })(SearchBar)

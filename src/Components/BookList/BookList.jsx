import './BookList.css'
import { connect } from 'react-redux'

const BookList = (props) => {
	let size = 'M'

	return (
		<main>
			<div className="section-outer section-books">
				<div className="section-inner books-wrapper">
					{
						props.books[0] ?
							props.books.map(book =>
								<div className="book-brief-info" key={book.key}>
									<img
										src={`https://covers.openlibrary.org/b/id/${book.cover_i}-${size}.jpg
										?default=https://openlibrary.org/static/images/icons/avatar_book-sm.png`}
										alt="book-img" className="book-cover" />
									<div>
										<h3 className="book-title">{book.title}</h3>
										<h3 className="book-author">by {book.author_name}</h3>
									</div>
								</div>
							) : <h2>Books</h2>
					}
				</div>
			</div>
		</main>
	)
}

const mapStateToProps = (state) => {
	return {
		books: state.books.books
	}
}

export default connect(mapStateToProps)(BookList)

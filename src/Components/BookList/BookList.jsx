import './BookList.css'
import { connect } from 'react-redux'

const BookList = (props) => {
	return (
		<main>
			<div className="section-outer section-books">
				<div className="section-inner books-wrapper">
					{
						props.books[0] ?
							props.books.map(book =>
								<div className="book-brief-info" key={book.key}>
									<img
										loading="lazy"
										src={book.cover_url}
										alt="book-img" className="book-cover book-cover_m" />
									<div>
										<h3 className="book-title book-title_m">{book.title}</h3>
										<h3 className="book-author book-author_m">by {book.author_name}</h3>
									</div>
								</div>
							) : <h3>Books</h3>
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

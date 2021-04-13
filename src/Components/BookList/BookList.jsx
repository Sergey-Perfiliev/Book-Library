import './BookList.css'
import { connect, useDispatch } from 'react-redux'
import BookInfo from '../BookInfo'
import { setModal } from '../../redux/books-reducer'

const BookList = (props) => {
	const dispatch = useDispatch()
	const openModal = (book) => {
		dispatch(setModal(true, book))
	}

	return (
		<main>
			<div className="section-outer section-books">
				<div className="section-inner books-wrapper">
					<BookInfo modal={props.modal} />
					<div>
						{
							props.books.length ?
								props.books.map(book =>
									<div className="book-brief-info" key={book.key} onClick={() => openModal(book)}>
										<img
											loading="lazy"
											src={book.cover_url}
											alt="book-img" className="book-cover book-cover_m" />
										<div>
											<h3 className="book-title book-title_m">{book.title}</h3>
											{
												book.author_name ?
													<h3 className="book-author book-author_m">by {book.author_name}</h3> :
													<h3 className="book-author book-author_m">by Unknown author</h3>
											}
										</div>
									</div>
								) : <h3>Search some books that you want to read!</h3>
						}
					</div>
				</div>
			</div>
		</main>
	)
}

const mapStateToProps = (state) => {
	return {
		books: state.books.books,
		modal: state.books.modal
	}
}

export default connect(mapStateToProps)(BookList)

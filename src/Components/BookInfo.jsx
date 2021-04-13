import React from 'react'
import './BookInfo.css'
import { connect, useDispatch } from 'react-redux'
import { setModal } from '../redux/books-reducer'

const BookInfo = ({ modal, book }) => {
	const dispatch = useDispatch()

	if (!modal) {
		return <></>
	}

	return (
		<div className="modal-window">
			<div className="modal-content"
				onBlur={() => dispatch(setModal(false, {}))}
				tabIndex={0}
				onLoad={(e) => e.currentTarget.focus()}
			>
				<div>
					<img src={book.cover_url} alt={book.title} className="book-cover book-cover_l" />
					<div>
						<h3 className="book-title">{book.title}</h3>
						<h3 className="boot-author">by {book.author_name}</h3>
						{
							book.publisher && book.publish_date ? <h3>
								This edition was published in {book.publish_date[0]} by {book.publisher[0]}
							</h3> : <h3>There is no info about publish date and publisher</h3>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		book: state.books.modalValue,
		modal: state.books.modal
	}
}

export default connect(mapStateToProps)(BookInfo)

import React from 'react'
import { useDispatch } from 'react-redux'
import Loader from '../../../assets/loader.svg'
import { setModal } from '../../../redux/books-reducer'

const DropList = ({ listBooks, dropList, toggleIsFetching }) => {
	const dispatch = useDispatch()

	const openModal = (book) => {
		dispatch(setModal(true, book))
	}

	return (
		dropList && <ul className="dropList">
			{
				toggleIsFetching ?
					<li>
						<img src={Loader} alt="Loader" />
					</li> :
					listBooks !== 0 ? listBooks.map(book =>
						<li key={book.key} onClick={() => openModal(book)}>
							<img
								loading="lazy"
								src={book.cover_url}
								alt="book-img" className="book-cover book-cover_sm" />
							<div>
								<h4 className="book-title book-title_sm">{book.title}</h4>
								{
									book.author_name ?
										<h4 className="book-author book-author_sm">by {book.author_name}</h4> :
										<h4 className="book-author book-author_sm">by Unknown author</h4>
								}
							</div>
						</li>
					) : undefined
			}
		</ul>
	)
}

export default DropList

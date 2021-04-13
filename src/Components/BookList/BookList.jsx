import './BookList.css'
import { connect, useDispatch } from 'react-redux'
import BookInfo from '../BookInfo'
import { setCurrentPage, setModal } from '../../redux/books-reducer'
import Paginator from './Paginator'
import { searchBooks } from '../../redux/books-reducer'
import Loader from '../../assets/loader.svg'
import { useState } from 'react'

const BookList = (props) => {
	const [loader, setLoader] = useState(false)
	const dispatch = useDispatch()
	const openModal = (book) => {
		dispatch(setModal(true, book))
	}

	const onPageChanged = async (pageNumber) => {
		setLoader(true)
		dispatch(setCurrentPage(pageNumber))
		await props.searchBooks(props.data, (pageNumber * 5) - 5)
		setLoader(false)
	}

	return (
		<main>
			<div className="section-outer section-books">
				<div className="section-inner books-wrapper">
					{
						loader ? 
						<img src={Loader} alt="loader" /> :
						<>
							<Paginator
								totalItemsCount={props.numFound}
								pageSize={props.pageSize}
								currentPage={props.currentPage}
								onPageChanged={onPageChanged}
							/>
							<div className="books">
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
								<BookInfo modal={props.modal} />
							</div>
						</>
					}
				</div>
			</div>
		</main>
	)
}

const mapStateToProps = (state) => {
	return {
		books: state.books.books,
		modal: state.books.modal,
		numFound: state.books.numFound,
		currentPage: state.books.currentPage,
		pageSize: state.books.pageSize,
		toggleIsFetching: state.books.toggleIsFetching
	}
}

export default connect(mapStateToProps, { searchBooks })(BookList)

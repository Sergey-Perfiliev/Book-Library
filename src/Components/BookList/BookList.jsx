import React from 'react'
import './BookList.css'
import BookCover from '../../assets/book-cover.jpg'

const BookList = () => {
	return (
		<main>
			<div className="section-outer section-books">
				<div className="section-inner books-wrapper">
					<div className="book-brief-info">
						<img src={BookCover} alt="book-img" className="book-cover" />
						<div>
							<h3>The Japanese haiku</h3>
							<h3>C.E. Tuttle Co</h3>
						</div>
					</div>
					<div className="book-brief-info">
						<img src={BookCover} alt="book-img" className="book-cover" />
						<div>
							<h3>The Japanese haiku</h3>
							<h3>C.E. Tuttle Co</h3>
						</div>
					</div>
					<div className="book-brief-info">
						<img src={BookCover} alt="book-img" className="book-cover" />
						<div>
							<h3>The Japanese haiku</h3>
							<h3>C.E. Tuttle Co</h3>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default BookList

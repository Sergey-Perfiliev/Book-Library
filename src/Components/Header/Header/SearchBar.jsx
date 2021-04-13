import react from 'react'
import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { searchBooks, setCurrentPage } from '../../../redux/books-reducer'
import { setDropList } from '../../../redux/books-reducer'
import '../../../App.css'
import './SearchBar.css'
import DropList from './DropList'


const SearchBar = ({ books, searchBooks, dropList, toggleIsFetching, modal, setModal, data, setData }) => {
	const dispatch = useDispatch()

	// handle 1seconds delay
	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			// check empty row
			if (data !== "") {
				dispatch(setCurrentPage(1))
				searchBooks(data)
				dispatch(setDropList(true))
			}
		}, 1000)

		// clear timeout
		return () => clearTimeout(delayDebounceFn)
	}, [data])

	// Find button
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(setDropList(false))
		dispatch(setCurrentPage(1))
		return data !== "" ? searchBooks(data) : undefined
	}

	const handleFocus = () => {
		if (data !== "") {
			searchBooks(data)
			dispatch(setCurrentPage(1))
			dispatch(setDropList(true))
		}
	}

	const closeModalWindow = () => {
		console.log('blur')
		dispatch(setDropList(false))
	}

	// set focus to an element
	const setFocus = (e) => {
		console.log('focus')
		e.currentTarget.focus()
	}

	return (
		<div className="search-bar-wrapper"
			onLoad={setFocus}
			onBlur={closeModalWindow}
		>
			<form onSubmit={(e) => handleSubmit(e)}
				className="search-bar"
				tabIndex="0"
			>
				<input
					placeholder="Search"
					type="text"
					className={`search-bar-input ${dropList ? "search-bar-input--active" : ""}`}
					value={data}
					onFocus={handleFocus}
					onChange={(e) => { setData(e.target.value) }}
				/>
				<button
					className={`search-bar-btn ${dropList ? "search-bar-btn--active" : ""}`}
					type="submit"
				>Find book
				</button>
			</form>
			<DropList
				modal={modal}
				dropList={dropList}
				books={books}
				toggleIsFetching={toggleIsFetching}
			/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		books: state.books.books,
		dropList: state.books.dropList,
		toggleIsFetching: state.books.toggleIsFetching,
		modal: state.books.modal
	}
}

export default connect(mapStateToProps, { searchBooks })(SearchBar)

import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { searchBooks, searchListBooks, setCurrentPage } from '../../../redux/books-reducer'
import { setDropList } from '../../../redux/books-reducer'
import '../../../App.css'
import './SearchBar.css'
import DropList from './DropList'


const SearchBar = ({ listBooks, searchBooks, searchListBooks, dropList, toggleIsFetching, modal, setModal, data, setData }) => {
	const dispatch = useDispatch()
	const setList = () => {
		if (data) {
			searchListBooks(data)
			dispatch(setDropList(true))
		}
	}

	// handle 1seconds delay
	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			// check empty row
			setList()
		}, 1000)

		// clear timeout
		return () => clearTimeout(delayDebounceFn)
	}, [data]) //

	// Find button
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(setDropList(false))
		dispatch(setCurrentPage(1))
		return data ? searchBooks(data) : undefined
	}

	const handleFocus = () =>  setList()

	const closeModalWindow = () => {
		dispatch(setDropList(false))
	}

	// set focus to an element
	const setFocus = (e) => {
		e.currentTarget.focus()
	}

	return (
		<div className="search-bar-wrapper"
			onBlur={closeModalWindow}
			onLoad={setFocus}
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
				listBooks={listBooks}
				toggleIsFetching={toggleIsFetching}
			/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		listBooks: state.books.listBooks,
		dropList: state.books.dropList,
		toggleIsFetching: state.books.toggleIsFetching,
		modal: state.books.modal,
	}
}

export default connect(mapStateToProps, { searchBooks, searchListBooks })(SearchBar)

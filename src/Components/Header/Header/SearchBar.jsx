import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { searchBooks } from '../../../redux/books-reducer'
import './SearchBar.css'


const SearchBar = (props) => {
	const onSubmit = (formData) => {
		props.searchBooks(formData.bookTitle)
	}

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={{ 'bookTitle': '' }}
		>
			{props => (
				<form onSubmit={props.handleSubmit} className="search-bar-wrapper" tabIndex="0" >
					<Field
						name="bookTitle"
						placeholder="Search"
						component="input"
						type="text"
						className="search-bar-input"
					/>
					<button
						className="search-bar-btn"
						type="submit"
					>Find book</button>
				</form>
			)}
		</Form>
	)
}

export default connect(null, { searchBooks })(SearchBar)

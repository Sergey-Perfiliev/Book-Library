import React from 'react'
import { Form, Field } from 'react-final-form'
import './SearchBar.css'

const onSubmit = (formData) => {
	console.log(formData)
}

const SearchBar = () => {
	return (
		<Form
			onSubmit={onSubmit}
			initialValues={{ 'book-title': '' }}
		>
			{props => (
				<form onSubmit={props.handleSubmit} className="search-bar-wrapper" tabindex="0" >
					<Field
						name="book-title"
						placeholder="Search"
						component="input"
						type="text"
						className="search-bar-input"
					/>
					<button className="search-bar-btn" type="submit">Find book</button>
				</form>
			)}
		</Form>
	)
}

export default SearchBar

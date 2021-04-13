import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import BookList from './Components/BookList/BookList';
import Header from './Components/Header/Header/Header';
import store from './redux/redux';

const App = () => {
	const [data, setData] = useState('')

	return <div className="App">
		<Header data={data} setData={setData} />
		<BookList data={data} setData={setData} />
	</div>
}

const Books = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	);
}

export default Books;

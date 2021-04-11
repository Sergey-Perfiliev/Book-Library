import { connect, Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import BookList from './Components/BookList/BookList';
import Header from './Components/Header/Header/Header';
import store from './redux/redux';

const App = () => {
	return <div className="App">
		<Header />
		<BookList />
	</div>
}

const AppContainer = connect(null, null)(App)

const Books = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	);
}

export default Books;

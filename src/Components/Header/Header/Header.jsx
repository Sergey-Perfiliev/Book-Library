import logo from '../../../assets/openlibrary-logo.svg'
import SearchBar from './SearchBar'
import '../../../App.css'
import './Header.css'

const Header = (props) => {
	return (
		<header className="section-outer section-header">
			<div className="section-inner header-wrapper">
				<div className="header-logo">
					<img src={logo} alt="library-logo" />
				</div>
				<SearchBar data={props.data} setData={props.setData} />
			</div>
		</header>
	)
}

export default Header

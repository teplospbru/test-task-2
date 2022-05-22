import { Link } from "react-router-dom";

const Header = ({ click }) => {
    // debugger
    return (
        <header>
	        <h1>Currency Converter</h1>
	        <div class="hamburger" onClick={ click } >
		        <svg>
			        <use xlinkHref="#burger"></use>
		        </svg>
	        </div>
	        <ul class="button">
		        <li><Link to="/calculator">Calculator</Link></li>
		        <li><Link to="/rates">Rates</Link></li>
	        </ul>
        </header>
    )
}

export default Header;
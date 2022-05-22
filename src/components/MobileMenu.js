import react from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ mobileMenu, click }) => {
    return mobileMenu && (
        <main>
            <div class="mobile-menu">
                <ul class="button">
                    <li><Link to="/calculator" onClick={ click } >Calculator</Link></li>
		            <li><Link to="/rates" onClick={ click } >Rates</Link></li>
                </ul>
            </div>
        </main>
    )
}

export default MobileMenu;
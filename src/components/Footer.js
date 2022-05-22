    import react from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { ratesFetch } from './redux/actions';

    const Footer = () => {

        const lastUpdate = useSelector(state => state.fetch.lastUpdate);

        const dispatch = useDispatch();

        return (
            <footer>
                <ul class="button" onClick={ () => dispatch(ratesFetch()) } >
                    <li>
                        <span>Update Rates</span>
                        <div class="svg-refresh">
                            <svg>
                                <use xlinkHref='#refresh'></use>
                            </svg>
                        </div>
                    </li>
                </ul>
                <span class="update-info">Last Update { lastUpdate }</span>	
            </footer>
        )
    }

    export default Footer;
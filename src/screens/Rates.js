import { useDispatch, useSelector } from 'react-redux';
import { exchangeFrom } from '../components/redux/actions';


// Components
import Select from '../components/Select';

const Rates = () => {

	const dispatch = useDispatch();
	const exchange = useSelector(state => state.exchange);
	const currencies = useSelector(state => state.fetch.currencies);
	
	const selectFromHandler = (event) => {
		const value = event.target.value;
		dispatch(exchangeFrom(value))
	}

    return (
        <>
            <div class="legend">Select Currency</div>
			<div class="currency-fields">
				<Select option={ exchange.from } currencies={ currencies } selectHandler={ (event) => selectFromHandler(event) } />
			</div>
			<div class="legend">Exchange Rates</div>
			<div class="exchange-rates">
				
				<div class="column-left">
					{
						exchange.to.slice(0, 5).map(item => (
							<div class="exchange-rates__rate">
								<div class="from">1 { exchange.from }</div>
								<div class="svg-arrow-right">
									<svg>
										<use xlinkHref="#right-arrow"></use>
									</svg>
								</div>
								<div class="to">{ item[1] } { item[0] }</div>
							</div>
						))
					}
				</div>

				<div class="column-right">
					{
						exchange.to.slice(5).map(item => (
							<div class="exchange-rates__rate">
								<div class="from">1 { exchange.from }</div>
								<div class="svg-arrow-right">
									<svg>
										<use xlinkHref="#right-arrow"></use>
									</svg>
								</div>
								<div class="to">{ item[1] } { item[0] }</div>
							</div>
						))
					}
				</div>
				
			</div>
        </>
    )
}

export default Rates;
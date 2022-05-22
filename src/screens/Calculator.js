import { useDispatch, useSelector } from 'react-redux';
import { calculatorFrom, calculatorTo, calculatorAmount, wrongInput, summary } from '../components/redux/actions';

// Components
import Select from '../components/Select';

const Calculator = () => {

	const dispatch = useDispatch();
	const calculate = useSelector(state => state.calculator);
	const currencies = useSelector(state => state.fetch.currencies);
	const alertMessage = useSelector(state => state.app.alert);
	
	const selectFromHandler = (event) => {
		const value = event.target.value;
		dispatch(calculatorFrom(value))
		dispatch(summary())
	}

	const selectToHandler = (event) => {
		const value = event.target.value;
		dispatch(calculatorTo(value))
		dispatch(summary())
	}

	const inputHandler = (event) => {
		const value = event.target.value;
		if(/^[0-9]*$/.test(value)) {
			dispatch(calculatorAmount(value));
			dispatch(summary())
		} else {
			dispatch(wrongInput())
		}
	}

    return (
        <>
            <div class="legend">Select Currencies</div>
			<div class="currency-fields">
				<Select option={ calculate.from } currencies={ currencies } selectHandler={ (event) => selectFromHandler(event) } />
				<div class="svg-arrow-right">
					<svg>
						<use xlinkHref="#right-arrow"></use>
					</svg>
				</div>
				<Select option={ calculate.to } currencies={ currencies } selectHandler={ (event) => selectToHandler(event) } />
			</div>
			<div class="legend">Amount to Exchange { alertMessage && (<span style={{ color: 'red' }}>( Just an Integer )</span>) } </div>
			<div class="input-field">
				<input type="text" value={ calculate.amount } onChange={ (event) => inputHandler(event) } placeholder='0'></input>
			</div>
			<div class="legend">Summary</div>
			<div class="summary">
				<span>{ calculate.summary }</span>
			</div>
        </>
    )
}

export default Calculator;
import { EXCHANGE_CALCULATE_FROM, RATES_FETCH } from "./types";

const initialState = {
    from: 'USD',
    fromRate: 1,
    to: [
        ['EUR', null],
        ['RUB', null],
        ['BYN', null],
        ['INR', null],
        ['CNY', null],
        ['TRY', null],
        ['GBP', null],
        ['CHF', null],
        ['JPY', null],
        ['THB', null],
    ],
    currencies: [
        ['USD', 1 ],
        ['EUR', null],
        ['RUB', null],
        ['BYN', null],
        ['INR', null],
        ['CNY', null],
        ['TRY', null],
        ['GBP', null],
        ['CHF', null],
        ['JPY', null],
        ['THB', null],
    ],
}

export const ratesReducer = (state = initialState, action) => {
    switch(action.type) {
        case EXCHANGE_CALCULATE_FROM:
            return {
                ...state, 
                from: action.currency,
                fromRate: state.currencies.filter(currency => currency[0] === action.currency)[0][1],
                to: state.currencies
                        .filter(currency => currency[0] !== action.currency)
                        .map(item => [item[0], parseFloat(item[1] / state.currencies.filter(currency => currency[0] === action.currency)[0][1]).toFixed(2)])
            }
        case RATES_FETCH:
            return {
                ...state,    
                currencies: action.currencies,
                to: action.currencies
                        .filter(currency => currency[0] !== state.from)
                        .map(item => [item[0], parseFloat(item[1] / state.fromRate).toFixed(2)])
            }
        default: return state;
    }
}
import { CALC_CALCULATE_FROM, CALC_CALCULATE_TO, CALC_AMOUNT, GET_SUMMARY, RATES_FETCH } from "./types";

const initialState = {
    from: 'USD',
    fromRate: '',
    to: 'RUB',
    toRate: '',
    amount: '',
    summary: 0,
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

export const calculatorReducer = (state = initialState, action) => {
    switch(action.type) {
        case CALC_CALCULATE_FROM:
            return {
                ...state, 
                from: action.currency, 
                fromRate: state.currencies.filter(currency => currency[0] === action.currency)[0][1], 
                summary: parseFloat(state.amount * state.toRate / state.currencies.filter(currency => currency[0] === action.currency)[0][1]).toFixed(2)
            }
        case CALC_CALCULATE_TO:
            return {
                ...state, 
                to: action.currency, 
                toRate: state.currencies.filter(currency => currency[0] === action.currency)[0][1],
                summary: parseFloat(state.amount * state.currencies.filter(currency => currency[0] === action.currency)[0][1] / state.fromRate).toFixed(2)
            }
        case CALC_AMOUNT:
            return {
                ...state, amount: action.amount, summary: parseFloat(action.amount * state.toRate / state.fromRate).toFixed(2)
            }
        case GET_SUMMARY:
            return {
                ...state, 
                summary: parseFloat(state.amount * state.toRate / state.fromRate).toFixed(2)
            }
        case RATES_FETCH:
            return {
                ...state, 
                currencies: action.currencies,
                fromRate: action.currencies.filter(currency => currency[0] === state.from)[0][1],
                toRate: action.currencies.filter(currency => currency[0] === state.to)[0][1],
            }
        default: return state;
    }
}
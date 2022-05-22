import { RATES_FETCH } from "./types";

const initialState = {
    fetchedData: {},
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
    lastUpdate: null
}

export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case RATES_FETCH:
            return {
                ...state, 
                fetchedData: action.fetchedData,    
                currencies: action.currencies,
                lastUpdate: action.lastUpdate
            }
        default: return state;
    }
}
import { combineReducers } from "redux";
import { calculatorReducer } from "./calculatorReducer";
import { ratesReducer } from "./ratesReducer";
import { fetchReducer } from "./fetchReducer";
import { appReducer } from "./appReducer";


export const rootReducer = combineReducers({
    calculator: calculatorReducer,
    exchange: ratesReducer,
    fetch: fetchReducer,
    app: appReducer
})
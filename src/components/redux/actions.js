import axios from 'axios';
import { CALC_AMOUNT, CALC_CALCULATE_FROM, CALC_CALCULATE_TO, EXCHANGE_CALCULATE_FROM, GET_SUMMARY, HIDE_ALERT, HIDE_LOADER, RATES_FETCH, SHOW_ALERT, SHOW_LOADER } from "./types";

const options = {
  method: 'GET',
  url: 'https://exchangerate-api.p.rapidapi.com/rapid/latest/USD',
  headers: {
    'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com',
    'X-RapidAPI-Key': '17ae393c6emshdd9cf9a325f83dbp1faa29jsnded4f4454e45'
  }
};

// Запрос к API
export function ratesFetch() {
    return dispatch => {
        dispatch({ type: SHOW_LOADER })
        axios.request(options).then(function (response) {
            const currencies = ['USD','EUR','RUB','BYN','INR','CNY','TRY','GBP','CHF','JPY','THB']; // Шаблон с нужными (используемыми) валютами
            const date = new Date(); // Здесь и на строчке ниже получаем дату последнего обновления
            const lastUpdate = date.getDate() + '.' + (((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '.' + date.getFullYear();
            const fetchedCurrensies = currencies.map(currency => Object.entries(response.data.rates).filter(item => item[0]=== currency)); // получаем массив с нужными валютами
            for(let i = 0; i < fetchedCurrensies.length; i++) { // убираем лишнюю вложенность
              let temp = fetchedCurrensies[i][0];
              fetchedCurrensies[i] = temp;
            }
            dispatch({ type: RATES_FETCH, fetchedData: response.data, lastUpdate, currencies: fetchedCurrensies }); // передаём массив с нужными валютами в соответствующие редьюсеры
            setTimeout(() => {
              dispatch({type: HIDE_LOADER });
            }, 500)
        }).catch(function (error) {
            console.error(error);
        });
    }
}

export function calculatorFrom(value) {
  return {
    type: CALC_CALCULATE_FROM,
    currency: value,
  }
}

export function calculatorTo(value) {
  return {
    type: CALC_CALCULATE_TO,
    currency: value,
  }
}

export function exchangeFrom(value) {
  return {
    type: EXCHANGE_CALCULATE_FROM,
    currency: value
  }
}

export function calculatorAmount(value) {
  return {
    type: CALC_AMOUNT,
    amount: value
  }
}

export function wrongInput() {
  return dispatch => {
    dispatch({ type: SHOW_ALERT });
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT })
    }, 1500)
  }
}

export function summary() {
  return {
    type: GET_SUMMARY,
  }
}
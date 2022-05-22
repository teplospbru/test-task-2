import react from 'react';

const Select = ({ currencies = ['USD'], option, selectHandler }) => { 
    //debugger
    return (
        <div class="currency-fields__select">
            <select value={ option } onChange={ selectHandler }>{
                currencies.map(currency => <option value={ currency[0] }>{ currency[0] }</option>)
            }</select>
            <div>
                <svg>
                    <use xlinkHref="#arrow-down"></use>
                </svg>
            </div>
        </div>
    )
}

export default Select;
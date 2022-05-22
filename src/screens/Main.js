import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Screens
import Calculator from './Calculator';
import Rates from './Rates';

const Main = ({ mobileMenu }) => {

    const loading = useSelector(state => state.app.loading);

    return (
        <main>{
            mobileMenu === true
                ?   null
                :   loading 
                    ?   (
                            <div class="center">
                                <div class="legend">Rates are updating...</div>
                            </div>
                        )
                    :   (
                            <>
                                <Routes>
                                    <Route exact path='/calculator' element={ <Calculator /> } />
                                    <Route exact path='/rates' element={ <Rates /> } />
                                    <Route exact path='/' element={ <Calculator /> } />
                                </Routes>
                            </>
                        ) 
        }</main>
    )
}

export default Main;
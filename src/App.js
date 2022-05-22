import react, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ratesFetch } from './components/redux/actions'

// Components
import Footer from './components/Footer';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';

// Screens
import Main from './screens/Main';

function App() {

  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ratesFetch());
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Header click={ () => setMobileMenuToggle(true) } />
        <MobileMenu mobileMenu={ mobileMenuToggle } click={ () => setMobileMenuToggle(false) } />
        <Main mobileMenu={ mobileMenuToggle } click={ () => setMobileMenuToggle(false) } />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
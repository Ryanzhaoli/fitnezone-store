import React from 'react';
import './style/App.css';
import { BrowserRouter as Router , Route , Switch, Redirect} from 'react-router-dom';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomeComponent';
import Contact from './components/ContactComponent';
import Basket from './components/BasketComponent';




function App () {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/basket' component={Basket} />
          <Redirect to='/fitnezone-store' />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
 }

export default App;

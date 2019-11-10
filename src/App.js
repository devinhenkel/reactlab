import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Registration from './pages/registration/registration.component';

const BreakfastItem = (props) => {
  console.log(props);
  return( 
    <div>
      <h1>Breakfast Item {props.match.params.breakfastid}!</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/registration" component={Registration} />
        <Route path="/breakfast/:breakfastid" component={BreakfastItem} />
      </Switch>
    </div>
  );
}

export default App;

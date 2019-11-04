import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const Breakfast = () => {
  return( 
    <div>
      <h1>Breakfast!</h1>
      <Link to="/breakfast/34">34</Link>
    </div>
  )
}

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
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/breakfast" component={Breakfast} />
        <Route path="/breakfast/:breakfastid" component={BreakfastItem} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/hats" components={HatsPage} /> */}
      </Switch>
    </div>
  );
}

export default App;

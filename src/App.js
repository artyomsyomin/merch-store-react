import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import AuthPage from './pages/authPage/AuthPage';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsibscribeFromAuth = null;

  componentDidMount() {
    this.unsibscribeFromAuth = auth.onAuthStateChanged(async user => {
      // this.setState({
      //   currentUser: user,
      // });
      createUserProfileDocument(user);
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsibscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

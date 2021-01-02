import React, { useEffect } from 'react';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import AuthPage from './pages/authPage/AuthPage';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';

import { selectCurrentUser } from './redux/user/userSelectors';
import { checkUserSession } from './redux/user/userActions';

import { connect } from 'react-redux';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/auth"
          render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

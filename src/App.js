import React from 'react';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import AuthPage from './pages/authPage/AuthPage';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';

import { selectCurrentUser } from './redux/user/userSelectors';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  unsibscribeFromAuth = null;

  componentDidMount() {
    const {
      setCurrentUser,
      // collectionsArray
    } = this.props;

    this.unsibscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShop) => {
          setCurrentUser({
            id: snapShop.id,
            ...snapShop.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsibscribeFromAuth();
  }

  render() {
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
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <AuthPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import AuthPage from './pages/authPage/AuthPage';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/userActions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  unsibscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

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
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);

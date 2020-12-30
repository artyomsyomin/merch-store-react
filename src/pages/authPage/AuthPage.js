import React from 'react';

import './AuthPage.scss';

import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';

const AuthPage = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthPage;

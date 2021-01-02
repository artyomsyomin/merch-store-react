import React, { useState } from 'react';
import { connect } from 'react-redux';

import './SignIn.scss';

import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/userActions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, SetUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const submitHandler = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    SetUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          name="email"
          type="email"
          value={email}
          changeHandler={changeHandler}
          required
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          changeHandler={changeHandler}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

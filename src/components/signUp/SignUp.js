import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

import { signUpStart } from '../../redux/user/userActions';

import './SignUp.scss';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });

  const { displayName, email, password, confirmedPassword } = userCredentials;

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmedPassword) {
      alert('Passwords do not match!');
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form className="sign-up-form" onSubmit={submitHandler}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={changeHandler}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={changeHandler}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmedPassword"
          value={confirmedPassword}
          onChange={changeHandler}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);

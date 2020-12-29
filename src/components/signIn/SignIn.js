import React from 'react';

import './SignIn.scss';

import FormInput from '../formInput/FormInput'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
  };

  changeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submitHandler}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            changeHandler={this.changeHandler}
            required
            label='Email'
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            changeHandler={this.changeHandler}
            label='Password'
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;

import React, { Component } from 'react';
import { authorizeUser } from './AuthorizeApi';
import { Redirect } from 'react-router-dom';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state.isAuthorized = this.props.isAuthorized;
  }

  state = {
    email: '',
    password: '',
    error: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ error: !authorizeUser(email, password) });
  };

  render() {
    const { isAuthorized, error } = this.state;
    return isAuthorized ? (
      <Redirect from="/auth" to="/" />
    ) : (
      <form action="">
        <input
          name="email"
          type="text"
          placeholder="email"
          onChange={this.handleChange}
        />
        <input
          name="password"
          type="text"
          placeholder="password"
          onChange={this.handleChange}
        />

        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>

        {error && <p className="error">Email or password is wrong</p>}
      </form>
    );
  }
}

export default Auth;

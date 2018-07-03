import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { auth, db } from '../../firebase';

export const DASHBOARD = '/dashboard';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  name: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
  blogtitle: '',
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      name,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        db.doCreateUser(authUser.user.uid, name, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(DASHBOARD);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });
      });
      
    event.preventDefault();
  }

  render() {
    const {
      name,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      name === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={name}
          onChange={event => this.setState(updateByPropertyName('name', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}
export default SignUpForm;
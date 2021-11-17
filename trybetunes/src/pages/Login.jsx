import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import LoginForm from '../components/LoginForm';
import Loading from '../components/Loading';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      nameInput: '',
      loading: false,
      logged: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({
      nameInput: value,
    });
  }

  handleClick() {
    const { nameInput: name } = this.state;

    this.setState({ loading: true }, async () => {
      try {
        await createUser({
          name,
        }).then(() => this.setState({ logged: true }));
      } catch (e) {
        console.log(e);
      }
    });
  }

  render() {
    const { nameInput, loading, logged } = this.state;

    if (loading) {
      return (
        logged ? <Redirect to="/search" /> : <Loading />
      );
    }

    return (
      <LoginForm
        nameInput={ nameInput }
        handleChange={ this.handleChange }
        handleClick={ this.handleClick }
      />
    );
  }
}

export default Login;

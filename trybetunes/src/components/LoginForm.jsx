import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  render() {
    const { nameInput, handleChange, handleClick } = this.props;

    return (
      <div data-testid="page-login">
        <form>
          <input
            type="text"
            value={ nameInput }
            onChange={ handleChange }
            data-testid="login-name-input"
          />
          <button
            type="button"
            disabled={ nameInput.length <= 2 }
            onClick={ handleClick }
            data-testid="login-submit-button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  nameInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default LoginForm;

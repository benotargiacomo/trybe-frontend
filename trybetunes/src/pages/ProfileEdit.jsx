import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUser, updateUser } from '../services/userAPI';
import Header from '../components/Header';
import Loading from '../components/Loading';

class ProfileEdit extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      description: '',
      image: '',
      loading: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchUser();
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.updateUser();
  }

  updateUser() {
    const { history } = this.props;
    const { name, email, image, description } = this.state;
    const updatedInfo = {
      name,
      email,
      image,
      description,
    };
    updateUser(updatedInfo);
    this.setState({ loading: true }, () => {
      history.push('/profile');
    });
  }

  async fetchUser() {
    try {
      const { name, email, description, image } = await getUser();

      this.setState({
        name,
        email,
        description,
        image,
      }, () => {
        this.setState({ loading: false });
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { name, email, description, image, loading } = this.state;

    if (loading) {
      return (
        <div data-testid="page-profile-edit">
          <Header />
          <Loading />
        </div>
      );
    }

    return (
      <div data-testid="page-profile-edit">
        <Header />
        <form>
          <input
            type="text"
            name="name"
            value={ name }
            onChange={ this.handleChange }
            data-testid="edit-input-name"
          />
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="edit-input-email"
          />
          <input
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
            data-testid="edit-input-description"
          />
          <input
            type="text"
            name="image"
            value={ image }
            onChange={ this.handleChange }
            data-testid="edit-input-image"
          />
          <button
            type="button"
            disabled={ !(name && email && description && image) }
            onClick={ this.handleClick }
            data-testid="edit-button-save"
          >
            Salvar
          </button>
          { loading ? <Loading /> : null }
        </form>
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.func.isRequired,
};

export default ProfileEdit;

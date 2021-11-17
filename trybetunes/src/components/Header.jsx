import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      loggedUser: {},
      loading: true,
    };

    this.fetchUser = this.fetchUser.bind(this);
  }

  componentDidMount() {
    this.fetchUser();
  }

  async fetchUser() {
    const loggedUser = await getUser();

    this.setState({
      loggedUser,
      loading: false,
    });
  }

  render() {
    const { loggedUser, loading } = this.state;

    return (
      <header data-testid="header-component">
        <nav>
          <Link to="/search">
            <span data-testid="link-to-search">Pesquisar</span>
          </Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
          <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        </nav>
        <span data-testid="header-user-name">
          { loading ? <Loading /> : loggedUser.name }
        </span>
      </header>
    );
  }
}

export default Header;

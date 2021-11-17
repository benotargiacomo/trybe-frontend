import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Header from '../components/Header';
import Loading from '../components/Loading';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      userInfo: {},
    };

    this.fetchUserInfo = this.fetchUserInfo.bind(this);
  }

  componentDidMount() {
    this.fetchUserInfo();
  }

  async fetchUserInfo() {
    try {
      const userInfo = await getUser();
      this.setState({
        userInfo,
      }, () => this.setState({ loading: false }));
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { loading, userInfo } = this.state;

    if (loading) {
      return (
        <div data-testid="page-profile">
          <Header />
          <Loading />
        </div>
      );
    }

    return (
      <div data-testid="page-profile">
        <Header />
        <img src={ userInfo.image } alt="Profile" data-testid="profile-image" />
        <Link to="/profile/edit">
          <div>Editar perfil</div>
        </Link>
        <p>
          <strong>Nome: </strong>
          { userInfo.name }
        </p>
        <p>
          <strong>Email: </strong>
          { userInfo.email }
        </p>
        <p>
          <strong>Descrição: </strong>
          { userInfo.description }
        </p>
      </div>
    );
  }
}

export default Profile;

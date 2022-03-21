import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import AreaInput from './AreaInput';
import NumberInput from './NumberInput';

const INITIAL_STATE = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;

    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { onClick } = this.props;

    event.preventDefault();
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInput n="title" v={ title } l="Título" onChange={ this.onChange } />
        <TextInput n="subtitle" v={ subtitle } l="Subtítulo" onChange={ this.onChange } />
        <label htmlFor="subtitle" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ this.onChange }
            data-testid="image-input"
          />
        </label>
        <AreaInput n="storyline" v={ storyline } l="Sinopse" onChange={ this.onChange } />
        <NumberInput n="rating" v={ rating } l="Avaliação" onChange={ this.onChange } />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ this.onChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

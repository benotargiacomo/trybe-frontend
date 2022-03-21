import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class TagInput extends Component {
  render() {
    const { tagOptions, tag, handleChange } = this.props;

    // console.log(tagOptions);

    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" value={ tag } onChange={ handleChange }>
          <option value="" disabled hidden>Tag</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

TagInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  tagOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  tag: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  tagOptions: state.user.tag,
});

export default connect(mapStateToProps, null)(TagInput);

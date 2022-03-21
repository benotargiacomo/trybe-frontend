import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { n, v, l, onChange } = this.props;

    return (
      <label htmlFor={ `${n}-input` } data-testid={ `${n}-input-label` }>
        { l }
        <input
          id={ `${n}-input` }
          type="text"
          name={ n }
          value={ v }
          onChange={ onChange }
          data-testid={ `${n}-input` }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  n: PropTypes.string.isRequired,
  v: PropTypes.string.isRequired,
  l: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;

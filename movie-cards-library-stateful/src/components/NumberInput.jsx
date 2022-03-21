import React from 'react';
import PropTypes from 'prop-types';

class NumberInput extends React.Component {
  render() {
    const { n, v, l, onChange } = this.props;

    return (
      <label htmlFor={ `${n}-input` } data-testid={ `${n}-input-label` }>
        { l }
        <input
          id={ `${n}-input` }
          type="number"
          name={ n }
          value={ v }
          onChange={ onChange }
          data-testid={ `${n}-input` }
        />
      </label>
    );
  }
}

NumberInput.propTypes = {
  n: PropTypes.string.isRequired,
  v: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  l: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberInput;

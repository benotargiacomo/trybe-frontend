import React from 'react';
import PropTypes from 'prop-types';

class AreaInput extends React.Component {
  render() {
    const { n, v, l, onChange } = this.props;

    return (
      <label htmlFor={ `${n}-input` } data-testid={ `${n}-input-label` }>
        { l }
        <textarea
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

AreaInput.propTypes = {
  n: PropTypes.string.isRequired,
  v: PropTypes.string.isRequired,
  l: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AreaInput;

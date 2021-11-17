import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Review.css';

class Star extends Component {
  render() {
    const { onKeyPress, onMouseEnter, onMouseLeave, onClick, star, nota } = this.props;

    let starColor = 'star-white';
    if (nota >= star) {
      starColor = 'star-yellow';
    }

    return (
      <div
        role="button"
        tabIndex={ nota }
        onKeyPress={ onKeyPress }
        onMouseEnter={ onMouseEnter }
        onMouseLeave={ onMouseLeave }
        onClick={ onClick }
      >
        <svg className={ starColor } xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" /></svg>
      </div>
    );
  }
}

Star.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  star: PropTypes.number.isRequired,
  nota: PropTypes.number.isRequired,
};

export default Star;

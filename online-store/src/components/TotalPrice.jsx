import React from 'react';
import PropTypes from 'prop-types';

class TotalPrice extends React.Component {
  render() {
    const { total } = this.props;
    return (
      <section>
        <h3>
          { `Total = R$ ${total}` }
        </h3>
      </section>
    );
  }
}

TotalPrice.propTypes = {
  total: PropTypes.number.isRequired,
};

export default TotalPrice;

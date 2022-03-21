import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import '../styles/Review.css';

class Rating extends Component {
  constructor() {
    super();

    const three = 3;
    const four = 4;
    const five = 5;

    this.state = {
      nota: 0,
      hoverState: 0,
      stars: [1, 2, three, four, five],
    };

    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseLeave() {
    this.setState({
      hoverState: 0,
    });
  }

  handleMouseEnter(e) {
    this.setState({
      hoverState: e,
    });
  }

  handleClick(e) {
    const { handleStars } = this.props;
    this.setState({
      nota: e,
    });
    handleStars(e);
  }

  onKeyPress() {
    const { hoverState } = this.state;
    this.setState({
      nota: hoverState,
    });
  }

  render() {
    const { nota, hoverState, stars } = this.state;

    return (
      <div className="rating-container">
        {
          stars.map((e) => (
            <Star
              key={ e }
              star={ e }
              nota={ hoverState || nota }
              onKeyPress={ this.onKeyPress }
              onMouseEnter={ () => this.handleMouseEnter(e) }
              onMouseLeave={ this.handleMouseLeave }
              onClick={ () => this.handleClick(e) }
            />))
        }
      </div>
    );
  }
}

Rating.propTypes = {
  handleStars: PropTypes.func.isRequired,
};

export default Rating;

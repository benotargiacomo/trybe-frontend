import React, { Component } from 'react';
import Rating from './Rating';
import '../styles/Review.css';

class Review extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      nota: 0,
      mensagem: '',
      reviews: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleStars = this.handleStars.bind(this);
    this.setlocalStorage = this.setLocalStorage.bind(this);
    this.readLocalStorage = this.readLocalStorage.bind(this);
  }

  componentDidMount() {
    this.readLocalStorage();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { email, nota, mensagem } = this.state;
    const review = {
      email,
      nota,
      mensagem,
    };

    this.setState(({ reviews }) => ({
      email: '',
      nota: 0,
      mensagem: '',
      reviews: [...reviews, review],
    }), () => {
      this.setLocalStorage();
    });
  }

  handleStars(nota) {
    this.setState({
      nota,
    });
  }

  setLocalStorage() {
    const { reviews } = this.state;
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }

  readLocalStorage() {
    const reviews = JSON.parse(localStorage.getItem('reviews'));
    if (reviews) {
      this.setState({
        reviews,
      });
    }
  }

  render() {
    const { email, mensagem, reviews } = this.state;
    const loadStorage = reviews.map((review) => (
      <div key={ review.mensagem }>
        <p>{review.email}</p>
        <p>{review.nota}</p>
        <p>{review.mensagem}</p>
      </div>
    ));

    return (
      <>
        <h2>Avaliações</h2>
        <section className="form-container">
          <form>
            <input
              id="email"
              type="text"
              name="email"
              value={ email }
              placeholder="Email"
              onChange={ this.handleChange }
            />

            <Rating handleStars={ this.handleStars } />

            <textarea
              id="comentario"
              name="mensagem"
              value={ mensagem }
              placeholder="Mensagem(opcional)"
              onChange={ this.handleChange }
              data-testid="product-detail-evaluation"
            />
            <button
              type="button"
              onClick={ this.handleClick }
            >
              Avaliar
            </button>

          </form>
        </section>
        <section>
          { loadStorage }
        </section>
      </>
    );
  }
}

export default Review;

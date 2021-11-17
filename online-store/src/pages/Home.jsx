import React from 'react';
import Categorias from '../components/Categorias';
import Produtos from '../components/Produtos';
import CarrinhoBt from '../components/CarrinhoBt';
import '../styles/Home.css';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      queryInput: '',
      responseApi: [],
      productsList: [],
      apiFetched: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.categoriesProducts = this.categoriesProducts.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((r) => this.fetchApi(r));
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({ queryInput: value });
  }

  handleClick() {
    this.fetchProducts();
  }

  fetchApi(response) {
    this.setState(
      { responseApi: response },
      () => {
        this.setState({ apiFetched: true });
      },
    );
  }

  async fetchProducts() {
    const { queryInput } = this.state;
    const fetchProdutcs = await
    api.getProductsFromCategoryAndQuery(queryInput);
    const productsList = fetchProdutcs.results;

    this.setState({
      productsList,
    });
  }

  categoriesProducts(productsList) {
    this.setState({
      productsList,
    });
  }

  render() {
    const { responseApi: r, apiFetched, queryInput, productsList } = this.state;
    const m = this.categoriesProducts;
    return (
      <section className="wrapper">
        <header className="header-container">
          <div className="header-esquerda">
            <h4 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h4>
          </div>
          <div className="header-direita">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar no Mercado Livre"
              value={ queryInput }
              onChange={ this.handleChange }
              data-testid="query-input"
            />
            <button
              type="button"
              className="bt-container bt-texto"
              onClick={ this.handleClick }
              data-testid="query-button"
            >
              BUSCAR
            </button>
            <CarrinhoBt />
          </div>

        </header>
        <section className="produtos-container">
          <aside className="categorias">
            { apiFetched && <Categorias responseApi={ r } metodo={ m } /> }
          </aside>
          <Produtos products={ productsList } />
        </section>
      </section>
    );
  }
}

export default Home;

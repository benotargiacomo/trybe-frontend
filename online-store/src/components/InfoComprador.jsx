import React, { Component } from 'react';

class InfoComprador extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      cpf: '',
      email: '',
      tel: '',
      cep: '',
      endereco: '',
      complemento: '',
      numero: '',
      cidade: '',
      estado: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      nome,
      cpf,
      email,
      tel,
      cep,
      endereco,
      complemento,
      numero,
      cidade,
      estado,
    } = this.state;
    const estados = [
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espírito Santo',
      'Goías',
      'Maranhão',
      'Mato Grosso',
      'Mato Grosso do Sul',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraíma',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins',
    ];
    return (
      <fieldset>
        <legend>Informações do Comprador</legend>
        <input
          type="text"
          name="nome"
          value={ nome }
          placeholder="Nome Completo"
          onChange={ this.handleChange }
          data-testid="checkout-fullname"
        />
        <input
          type="text"
          name="cpf"
          value={ cpf }
          placeholder="CPF"
          onChange={ this.handleChange }
          data-testid="checkout-email"
        />
        <input
          type="text"
          name="email"
          value={ email }
          placeholder="Email"
          onChange={ this.handleChange }
          data-testid="checkout-cpf"
        />
        <input
          type="text"
          name="tel"
          value={ tel }
          placeholder="Telefone"
          onChange={ this.handleChange }
          data-testid="checkout-phone"
        />
        <input
          type="text"
          name="cep"
          value={ cep }
          placeholder="CEP"
          onChange={ this.handleChange }
          data-testid="checkout-cep"
        />
        <input
          type="text"
          name="endereco"
          value={ endereco }
          placeholder="Endereço"
          onChange={ this.handleChange }
          data-testid="checkout-address"
        />
        <input
          type="text"
          name="complemento"
          value={ complemento }
          placeholder="Complemento"
          onChange={ this.handleChange }
          data-testid=""
        />
        <input
          type="text"
          name="numero"
          value={ numero }
          placeholder="Número"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          name="cidade"
          value={ cidade }
          placeholder="Cidade"
          onChange={ this.handleChange }
        />
        <select name="estado" value={ estado } onChange={ this.handleChange }>
          { estados.map((e, i) => (
            <option key={ i }>
              { e }
            </option>
          )) }
        </select>
      </fieldset>
    );
  }
}
export default InfoComprador;

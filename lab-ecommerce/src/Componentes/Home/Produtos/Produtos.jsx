import React from 'react';
import { Cabecalho } from './estiloDosProdutos';

class Produtos extends React.Component {

    manipularValorSelect = (event) => {
        console.log(event.target.value)
    }

  render() {
    return (
        <Cabecalho>
            <p>Quantidade de produtos: 2</p>
            <label>
                Ordenação:
                <select onChange={this.manipularValorSelect}>
                    <option value={"Crescente"}>Crescente</option>
                    <option value={"Decrescente"}>Decrescente</option>
                </select>
            </label>
        </Cabecalho>
    )
  }
}

export default Produtos;

import React from 'react';
import { Cabecalho, GrupoDeCartoes } from './estiloDosProdutos';
import CartaoDosProdutos from '../CartaoDosProdutos/CartaoDosProdutos';

class Produtos extends React.Component {

  render() {
    return (
        <div>
            <Cabecalho>
                <p>Quantidade de produtos: {this.props.quantidade}</p>
                <label>
                    Ordenação:
                    <select onChange={this.props.onChangeCabecalho}>
                        <option value={"Crescente"}>Crescente</option>
                        <option value={"Decrescente"}>Decrescente</option>
                    </select>
                </label>
            </Cabecalho>
            <GrupoDeCartoes>
                <CartaoDosProdutos
                    imagem = {"https://picsum.photos/200/200?a=1"}
                    nome = {"Produto"}
                    valor = {"200"}
                    onClick = {() => console.log("ok")}
                />
            </GrupoDeCartoes>
        </div>
    )
  }
}

export default Produtos;

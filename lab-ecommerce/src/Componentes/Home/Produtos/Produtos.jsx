import React from 'react';
import { Cabecalho, GrupoDeCartoes } from './estiloDosProdutos';
import CartaoDosProdutos from '../CartaoDosProdutos/CartaoDosProdutos';
import { pacoteDeProdutos } from '../../../pacoteDeProdutos';

class Produtos extends React.Component {

  render() {
    const produtosMapeados = pacoteDeProdutos.map(produto => {
        return <CartaoDosProdutos 
            imagem={produto.photo}
            nome={produto.name}
            valor={produto.price}
            onClick={() => console.log(produto.id)}
        />
    })

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
                {produtosMapeados}
            </GrupoDeCartoes>
        </div>
    )
  }
}

export default Produtos;

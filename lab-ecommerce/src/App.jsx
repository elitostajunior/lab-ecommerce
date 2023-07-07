import React from "react";
import Filtros from "./Componentes/Filtros/Filtros";
import { pacoteDeProdutos } from "./pacoteDeProdutos";
import Produtos from "./Componentes/Home/Produtos/Produtos";
import Carrinho from "./Componentes/Carrinho/Carrinho";

class App extends React.Component {
  state = {
    filtroMinimo: 20,
    filtroMaximo: 10000,
    filtroBuscaPorNome: "busca",
    ordenacao: "Crescente",
    carrinho: [
      {
        id: 1,
        name: 'Produto legal',
        price: 123,
        photo: 'https://picsum.photos/200/200?a=1',
      },
      {
        id: 2,
        name: 'Produto 2',
        price: 200,
        photo: 'https://picsum.photos/200/200?a=2',
      }
    ],
    valorTotal: 0
  };

  manipularValorDoFiltroMinimo = (event) => {
    this.setState({
      filtroMinimo: event.target.value
    });
  };

  manipularValorDoFiltroMaximo = (event) => {
    this.setState({
      filtroMaximo: event.target.value
    });
  };

  manipularValorDoFiltroBuscaPorNome = (event) => {
    this.setState({
      filtroBuscaPorNome: event.target.value
    });
  };

  filtrarProdutos = () => {
    const pacotesFiltradosMinimo = pacoteDeProdutos.filter((produto) => {
      if(this.state.filtroMinimo){
        return produto.price >= this.state.filtroMinimo
      }
    });

    const pacotesFiltradosMaximo = pacotesFiltradosMinimo.filter((produto) => {
      if(this.state.filtroMaximo){
        return produto.price <= this.state.filtroMaximo
      } else {
        return produto
      }
    });

    const pacoteFiltrado = pacotesFiltradosMaximo.filter((produto) => {
      return produto.name.includes(this.state.filtroBuscaPorNome)
    });

    return pacoteFiltrado
  };

  ordenarProdutos = (event) => {
    console.log(event.target.value)
    this.setState({
      ordenacao: event.target.value
    })
  }

  adicionarProdutoNoCarrinho = (produto) => {
    console.log(produto)
  }

  removerItemDoCarrinho = (item) => {
    console.log("produto", item)
  }

  render() {

    const produtosFiltrados = this.filtrarProdutos()
    console.log(produtosFiltrados)

    return (
      <div>
        {/* <Filtros
          minimo={this.state.filtroMinimo}
          maximo={this.state.filtroMaximo}
          buscaPorNome={this.state.filtroBuscaPorNome}

          onChangeMinimo = {this.manipularValorDoFiltroMinimo}
          onChangeMaximo = {this.manipularValorDoFiltroMaximo}
          onChangeBuscaPorNome = {this.manipularValorDoFiltroBuscaPorNome}
        />        */}
        {/* <Produtos
          quantidade = {pacoteDeProdutos.length}
          onChangeCabecalho={this.ordenarProdutos}
          ordenacao = {this.state.ordenacao}
          produtos = {pacoteDeProdutos}
          onClick = {this.adicionarProdutoNoCarrinho}
        /> */}
        <Carrinho
          carrinho = {this.state.carrinho}
          valorTotal = {this.state.valorTotal}
          removerItemDoCarrinho = {this.removerItemDoCarrinho}
        />
      </div>
    );
  }
}

export default App;

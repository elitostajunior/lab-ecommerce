import React from "react";
import Filtros from "./Componentes/Filtros/Filtros";
import { pacoteDeProdutos } from "./pacoteDeProdutos";
import Produtos from "./Componentes/Home/Produtos/Produtos";
import Carrinho from "./Componentes/Carrinho/Carrinho";
import { ConjuntoDeComponentes } from "./estiloDoApp";

class App extends React.Component {
  state = {
    filtroMinimo: 20,
    filtroMaximo: 10000,
    filtroBuscaPorNome: "",
    ordenacao: "Crescente",
    carrinho: [],
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
    this.setState({
      ordenacao: event.target.value
    });
  };

  adicionarProdutoNoCarrinho = (produto) => {
    if(produto.quantidade !== 1){
      produto.quantidade = 1    
      const novoCarrinho = [produto, ...this.state.carrinho]

      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (produto.id === item.id && item.quantidade >= 1) {
          return { ...item, quantidade: item.quantidade + 1 }
        } else {
          return item
        }
      });

      this.setState({
        carrinho: novoCarrinho,
      });
    };
  };

  removerItemDoCarrinho = (item) => {
    console.log("produto", item)
  }

  render() {
    const produtosFiltrados = this.filtrarProdutos()

    return (
      <ConjuntoDeComponentes>
        <Filtros
          minimo={this.state.filtroMinimo}
          maximo={this.state.filtroMaximo}
          buscaPorNome={this.state.filtroBuscaPorNome}

          onChangeMinimo = {this.manipularValorDoFiltroMinimo}
          onChangeMaximo = {this.manipularValorDoFiltroMaximo}
          onChangeBuscaPorNome = {this.manipularValorDoFiltroBuscaPorNome}
        />
        <Produtos
          quantidade = {produtosFiltrados.length}
          onChangeCabecalho={this.ordenarProdutos}
          ordenacao = {this.state.ordenacao}
          produtos = {produtosFiltrados}
          onClick = {this.adicionarProdutoNoCarrinho}
        />
        <Carrinho
          carrinho = {this.state.carrinho}
          valorTotal = {this.state.valorTotal}
          removerItemDoCarrinho = {this.removerItemDoCarrinho}
        />
      </ConjuntoDeComponentes>
    );
  }
}

export default App;

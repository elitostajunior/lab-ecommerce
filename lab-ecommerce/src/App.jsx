import React from "react";
import Filtros from "./Componentes/Filtros/Filtros";
import { pacoteDeProdutos } from "./pacoteDeProdutos";
import Produtos from "./Componentes/Home/Produtos/Produtos";

class App extends React.Component {
  state = {
    filtroMinimo: 20,
    filtroMaximo: 10000,
    filtroBuscaPorNome: "busca"
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

  funcaoDeTeste = (event) => {
    console.log(event.target.value)
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
        <Produtos
          quantidade = {10}
          onChangeCabecalho={this.funcaoDeTeste}
        />
      </div>
    );
  }
}

export default App;

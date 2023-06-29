import React from "react";
import Filtros from "./Componentes/Filtros/Filtros";

class App extends React.Component {
  state = {
    filtroMinimo: 20,
    filtroMaximo: 10000,
    filtroBuscaPorNome: "busca"
  }

  manipularValorDoFiltroMinimo = (event) => {
    this.setState({
      filtroMinimo: event.target.value
    })
  }

  manipularValorDoFiltroMaximo = (event) => {
    this.setState({
      filtroMaximo: event.target.value
    })
  }

  manipularValorDoFiltroBuscaPorNome = (event) => {
    this.setState({
      filtroBuscaPorNome: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Filtros
          minimo={this.state.filtroMinimo}
          maximo={this.state.filtroMaximo}
          buscaPorNome={this.state.filtroBuscaPorNome}

          onChangeMinimo = {this.manipularValorDoFiltroMinimo}
          onChangeMaximo = {this.manipularValorDoFiltroMaximo}
          onChangeBuscaPorNome = {this.manipularValorDoFiltroBuscaPorNome}
        />       
      </div>
    );
  }
}

export default App;

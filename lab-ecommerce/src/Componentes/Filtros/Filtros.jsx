import React from 'react';
import { Filtro, GrupoDeFiltros } from './estiloDoFiltro';

class Filtros extends React.Component {
  render() {
    return (
        <GrupoDeFiltros>
            <h2>Filtros</h2>
            <Filtro>
                Filtro mínimo: 
                <input type={"number"} />
            </Filtro>

            <Filtro>
                Filtro máximo: 
                <input type={"number"} />
            </Filtro>

            <Filtro>
                Busca por nome: 
                <input type={"text"} />
            </Filtro>
        </GrupoDeFiltros>
    );
  }
}

export default Filtros;

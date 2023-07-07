import React from 'react';
import { ConjuntoDeItens } from './estiloDosItens';

class Itens extends React.Component {
    render() {
        return (
            <ConjuntoDeItens>
                <p>1x</p>
                <p>Produto</p>
                <button>Remover</button>
            </ConjuntoDeItens>
        )
    }
};

export default Itens;
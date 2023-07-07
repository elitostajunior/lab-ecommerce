import React from 'react';
import { ConjuntoDoCarrinho } from './estiloDoCarrinho';
import Itens from './Itens/Itens';

class Carrinho extends React.Component {
    render() {
        return (
            <ConjuntoDoCarrinho>
                <h2>Carrinho:</h2>
                <div>
                    <Itens
                        quantidade={10}
                        nome={"produto 1"}
                        onClick = {() => console.log("removeu")}
                    />
                </div>
                <p>Valor total: R$ 0,00</p>
            </ConjuntoDoCarrinho>
        )
    }
};

export default Carrinho;
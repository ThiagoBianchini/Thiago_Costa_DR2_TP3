import React from "react";

function Ex10() {

    class Compras extends React.Component{
        constructor(props) {
            super(props)
        }

        render() {
            return(
                <div>
                    <h1>Lista de compras</h1>
                    <ul>
                        <strong>
                            <li>Arroz</li>
                            <li>Feijão</li>
                            <li>Carne</li>
                            <li>Óleo</li>
                            <li>Açúcar</li>
                            <li>Sal</li>
                        </strong>
                    </ul>
                </div>
            )
        }
    }

    return (
        <div>
            <Compras></Compras>
        </div>
    )
}

export default Ex10;

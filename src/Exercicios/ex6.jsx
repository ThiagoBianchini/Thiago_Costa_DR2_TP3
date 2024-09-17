import React from "react";

function Ex6() {

    class Mensagem extends React.Component{
        constructor(props) {
            super(props)
        }

        render() {
            return(
                <div>
                    <p>{this.props.texto}</p>
                </div>
            )
        }
    }

    class Container extends React.Component{
        constructor(props) {
            super(props)
            this.texto = "MENSAGEM PADRÃO PARA TODOS OS FILHOS"
        }

        render() {
            return(
                <div>
                    <Mensagem texto={this.texto}></Mensagem>
                </div>
            )
        }
    }

    return (
        <div><Container></Container></div>
    )
}

export default Ex6;
import React from "react";

function Ex7() {

    class Botao extends React.Component{
        constructor(props) {
            super(props)
        }

        render() {
            return(
                <div><button>Botão</button></div>
            )
        }
    }

    class Texto extends React.Component{
        constructor(props) {
            super(props)
        }

        render() {
            return(
                <div><p>Texto que fica abaixo do botão</p></div>
            )
        }
    }

    class Container extends React.Component{
        constructor(props) {
            super(props)
        }

        render() {
            return(
                <div>
                    <Botao></Botao>
                    <Texto></Texto>
                </div>
            )
        }
    }

    return (
        <div>
            <Container></Container>
        </div>
    )
}

export default Ex7;

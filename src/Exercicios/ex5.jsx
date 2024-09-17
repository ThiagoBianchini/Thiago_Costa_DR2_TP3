import React from "react";

function Ex5() {

    class Header extends React.Component{
        constructor(props) {
            super(props)
        }

        render() {
            return(
                <div><h1>HEADER</h1></div>
            )
        }
    }

    class Content extends React.Component{
        constructor(props) {
            super(props)
        }

        render() {
            return(
                <div><p>CONTEÚDO DO CONTENT</p></div>
            )
        }
    }

    class Page extends React.Component{
        constructor(props) {
            super(props)
        }

        render() {
            return(
                <div>
                    <Header></Header>
                    <Content></Content>
                </div>
            )
        }
    }

    return (
        <div>
            <Page></Page>
        </div>
    )
}

export default Ex5;
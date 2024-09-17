import React from "react";

function Ex1() {

    class Botao extends React.Component{
        constructor(props){
            super(props)
        }

        render() {
            return(
                <button style={{
                    backgroundColor:"red",
                    border: "3px dotted blue"
                }}>BOTÃO EX1</button>
            )
        }
    }

    return (
        <div><Botao/></div>
    )

}
export default Ex1;



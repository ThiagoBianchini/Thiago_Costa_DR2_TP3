import React from "react";

function Ex9() {
    
    class Caixa extends React.Component{
        constructor(props) {
            super(props)
        }

        render() {
            return(
                <div className="caixa" style={{
                    height:"200px",
                    width:"200px",
                    backgroundColor:"blue",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                }}>TEXTO CENTRAL</div>
            )
        }
    }


    return (
        <div>
            <Caixa></Caixa>
        </div>
    )
}

export default Ex9;
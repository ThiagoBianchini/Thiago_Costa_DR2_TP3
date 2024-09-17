import React from "react";

function Ex4() {

    class Forma extends React.Component {
        constructor(props) {
          super(props);
        }
    
        render() {
          return (
            <div>
              <p>{this.props.formato}</p>
              <p>{this.props.cor}</p>
            </div>
          );
        }
      }
    
      return (
        <div>
          <Forma formato={"quadrado"} cor={"vermelho"}></Forma>
          <Forma formato={"círculo"} cor={"azul"}></Forma>
        </div>
      );
}

export default Ex4;
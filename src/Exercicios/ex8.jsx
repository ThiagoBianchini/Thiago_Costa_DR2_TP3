import React from "react";

function Ex8() {


    const produto = {
        nome: 'Vinil Men at Work - Business as Usual',
        preco: 30.00,
        imagem: 'src/assets/vinil.jpg'
      };
      
        
    class Product extends React.Component {
        constructor(props) {
        super(props);
        }
    
        render() {
            const { nome, preco, imagem } = this.props.produto; 
            return (
                <div className="card">
                    <img src={imagem} alt="imagem do vinil" style={{borderRadius:"10px 10px 0 0"}}/>
                    <h3 style={{marginLeft:"10px"}}>{nome}</h3>
                    <p style={{marginLeft:"10px"}}>R${preco}</p>
                </div>
            );
        }
    }
    
    return (
        <div>
            <Product produto={produto}></Product>
        </div>
    );
}

export default Ex8;

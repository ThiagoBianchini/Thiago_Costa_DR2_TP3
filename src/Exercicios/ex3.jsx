import React from "react";

const data = {
  nome: 'David',
  idade: 37,
  email: 'david@prof.infnet.edu.br'
};

function Ex3() {
  
  class Pessoa extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { nome, idade, email } = this.props.data; 
      return (
        <div>
          <p>{nome}</p>
          <p>{idade}</p>
          <p>{email}</p>
        </div>
      );
    }
  }

  return (
    <div>
      <Pessoa data={data}></Pessoa>
    </div>
  );
}

export default Ex3;

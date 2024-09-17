import React from "react";

function Ex11() {

    var nome = "João"
    var sobrenome = "Silva"

    nome = "Maria"

    var texto = `Olá, meu nome é ${nome} ${sobrenome}`

    return (
        <div>
            <p>{texto}</p>

        </div>
    )
}

export default Ex11;
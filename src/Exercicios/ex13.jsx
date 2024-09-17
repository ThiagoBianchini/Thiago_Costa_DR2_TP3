import React, { useState } from 'react';

function Ex13() {

    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [nota4, setNota4] = useState(0);
    const [media, setMedia] = useState(0);

    const calcularMedia = () => {
        const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4
        setMedia(media)
    }

    const handleNota1 = (event) => {
        setNota1(event.target.value);
    }

    const handleNota2 = (event) => {
        setNota2(event.target.value);
    }

    const handleNota3 = (event) => {
        setNota3(event.target.value);
    }

    const handleNota4 = (event) => {
        setNota4(event.target.value);
    }


    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around",
            alignItems:"center",
            height:"600px"
        }}>
            <h1>Média das notas</h1>
            <div style={{
                flexWrap:"wrap",
                gap:"2rem"}}>
                <input type="number" value={nota1} onChange={handleNota1} placeholder="Nota 1" />
                <input type="number" value={nota2} onChange={handleNota2} placeholder="Nota 2" />
                <input type="number" value={nota3} onChange={handleNota3} placeholder="Nota 3" />
                <input type="number" value={nota4} onChange={handleNota4} placeholder="Nota 4" />   
            </div>
            <button onClick={calcularMedia}>Calcular</button>
            <p>Média: {media}</p>
        </div>
    );

}

export default Ex13;

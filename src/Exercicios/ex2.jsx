import React from "react";

function Ex2() {

    class Lista extends React.Component{
        constructor(props) {
            super(props)
        }

        render() {
            return(
                <div>
                    <h1>Lista</h1>
                    <ol>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                    </ol>
                </div>
            )
        }
    }



    return (
        <div><Lista></Lista></div>
    )
}

export default Ex2;